import { t } from 'elysia';

export namespace AuthModel {

    // SignIn Schema
    export const signinSchema = t.Object({
        email: t.String(),
        password: t.String()
    })

    export type signinSchema = typeof signinSchema.static

    export const signinResponseSchema = t.Object({
        message: t.Literal("Signed in successfully.")
    })

    export const signinFailureSchema = t.Object({
        message: t.Literal("Invalid Credentials")
    })

    export type signinFailureSchema = typeof signinFailureSchema.static
    export type signinResponseSchema = typeof signinResponseSchema.static

    // SignUp Schema
    export const signupSchema = t.Object({
        email: t.String(),
        password: t.String()
    })

    export type signupSchema = typeof signupSchema.static

    export const signupResponseSchema = t.Object({
        id: t.String()
    })

    export const signupFailedResponseSchema = t.Object({
        message: t.Literal("Error While Sigining Up")
    })

    export type signupResponseSchema = typeof signupResponseSchema.static
    export type signupFailedResponseSchema = typeof signupFailedResponseSchema.static

}