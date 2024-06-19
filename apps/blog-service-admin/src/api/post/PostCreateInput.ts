import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  image?: InputJsonValue;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
