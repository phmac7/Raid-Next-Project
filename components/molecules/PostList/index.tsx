import React, { useEffect, useState } from 'react';
//import PostCard from './PostCard';
import styles from './styles.module.scss';

type PostListProps = {
  fields: Object;
};

const PostList = () => {
  const [postList, setPostList] = useState<PostListProps[]>();

  useEffect(() => {
    const URL = 'http://localhost:3000/api/post';

    async function fetchPostList() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`Something went wrong :(`);
        }
        setPostList(data.items);
      } catch (err) {}
    }
    fetchPostList();
  }, []);

  return (
    <div className={styles.postList}>
      {postList != undefined ? (
        postList.map((el: PostListProps, i: React.Key | null | undefined) => {
          return (
            <div key={i}></div>
            /*<PostCard
              userFullName={el.fields.userAuthor.fields.name}
              userProfilePicture={
                el.fields.userAuthor.fields.profilePicture.fields.file.url
              }
              postContent={el.fields.message.content[0]}
              key={i}
            />*/
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default PostList;
