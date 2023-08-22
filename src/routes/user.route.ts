import { Elysia } from "elysia";

export const user = new Elysia({ prefix: "/users" });

user.get("/", (c) => {
  return {
    users: [{ name: "user 1" }, { name: "user 2" }],
  };
});
