import { Elysia } from "elysia";

import { user } from "./user.route";
import { post } from "./post.route";

export const root = new Elysia();

root.use(user);
root.use(post);
