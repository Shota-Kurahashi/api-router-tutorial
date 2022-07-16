import React, { FC } from "react";
import { Post } from "../types/type";

type Props = { postItem: Post };

export const PostItem: FC<Props> = ({ postItem }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="text-4xl font-bold text-red-400">{postItem.id}</div>
    <div className="text-2xl font-semibold">{postItem.title}</div>
    <div className="">{postItem.body}</div>
  </div>
);
