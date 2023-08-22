import { Elysia } from "elysia";

export const post = new Elysia({ prefix: "/posts" });

post.get("/", (c) => {
  return {
    post: [{ name: "post 1" }, { name: "post 2" }],
  };
});
