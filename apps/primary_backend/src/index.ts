import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth"

//const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const app = new Elysia().use(authApp).listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

/*

  auth => sihnup/signin
  api-key => create api, get api, delete api, disable api key
  model => get supported models, prcing , providers,
  payment => razerpay / stripe

*/
