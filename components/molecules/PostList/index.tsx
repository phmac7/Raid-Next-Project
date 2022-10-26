import React, { useEffect, useState } from "react";
import PostCard from "../PostCard";
import styles from "./styles.module.scss";

type PostListProps = {
  postId: number;
  userId: number;
  gameId: number;
  postImage: string;
  content: string;
  likes: number;
};

const PostList = () => {
  const [postList, setPostList] = useState<PostListProps[]>();

  const URL = "/data/post.json";

  useEffect(() => {
    async function fetchPostList() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`Something went wrong :(`);
        }
        setPostList(data);
      } catch (err) {}
    }
    fetchPostList();
  }, []);

  return (
    <div className={styles.postList}>
      {postList ? (
        postList.map((el: PostListProps, i: React.Key | null | undefined) => {
          return (
            <PostCard
              gameId={el.gameId}
              userId={el.userId}
              key={i}
            />
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default PostList;
