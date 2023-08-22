import { Elysia } from "elysia";

import { root } from "./routes";

const app = new Elysia({ prefix: "/api/v1" });

app.on("error", (c) => {
  return {
    code: c.code,
    message: c.error.message,
  };
});

// app.on("beforeHandle", (c) => {
//   console.log(c.headers.authorization);

//   if (!c.headers.authorization) {
//     c.set.status = 401;
//     throw new Error("Unauthorized");
//   }
// });

app.use(root);

app.get("/", (c) => {
  return { name: "Elysia" };
});

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
