import { Post } from '@/models/contentfulObjects';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';
//import PostCard from './PostCard';
import styles from './styles.module.scss';

type PostListProps = {
  postList: Post[];
};

const PostList: React.FC<PostListProps> = ({ postList }) => {
  if (!postList) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles.postList}>
      {postList.map((el: Post, i: any) => (
        <div key={i}>
          <PostCard
            userFullName={el.fields.author['en-US'].id}
            userProfilePicture={el.fields.author['en-US'].id}
            //   postContent={el.fields.message['en-US']}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
