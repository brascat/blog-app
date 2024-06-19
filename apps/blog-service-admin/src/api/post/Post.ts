import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
