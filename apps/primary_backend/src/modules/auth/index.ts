import { Cookie, Elysia, status } from "elysia";
import { AuthModel } from "./models";
import { AuthService } from "./service";
import jwt from "@elysiajs/jwt";


export const app = new Elysia({ prefix: "auth" })
    .use(
        jwt({
            name: 'jwt',
            secret: process.env.JWT_SECRET!
        })
    )
    .post("/signup", async ({ body, status }) => {
        try {
            const userId = await AuthService.signup(body.email, body.password);

            return {
                id: userId
            }
        } catch(e) {
            return status(400, {
                message: "Error While Sigining Up"
            });
        }
    }, {
        body: AuthModel.signupSchema,
        response: {
            200: AuthModel.signupResponseSchema,
            400: AuthModel.signupFailedResponseSchema
        }
    })

    .post("/signin", async ({ jwt, body, status, cookie: { auth } }) => {
        const { correctCredentials, userId } = await AuthService.signin(body.email, body.password);

        if(correctCredentials && userId) {
            const token = await jwt.sign({ userId });

            auth.set({
                value: token,
                httpOnly: true,
                maxAge: 7 * 86400,
            }) 

            return {
                message: "Signed in successfully."
            }
        } else {
            return status(403, {
                message: "Invalid Credentials"
            });
        }
    }, {
        body: AuthModel.signinSchema, 
        response: {
            200: AuthModel.signinResponseSchema,
            403: AuthModel.signinFailureSchema
        }
    })