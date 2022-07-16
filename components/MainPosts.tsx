import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "../types/type";
import { PostItem } from "./PostItem";

export const MainPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get<Post[]>("/api/hello");

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((postItem) => (
        <PostItem postItem={postItem} key={postItem.id} />
      ))}
    </div>
  );
};
