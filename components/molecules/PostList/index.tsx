import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PostCard } from '@/components/molecules';
import styles from './styles.module.scss';
import { PostListProps } from '@/models/components';
import { Post } from '@/models/responseTypes';

const PostList: React.FC<PostListProps> = ({ postList }) => {
  console.log(postList[0].fields.media?.fields.file.url);

  return (
    <div className={styles.postList}>
      {postList.map((post: Post, i: number) => (
        <PostCard
          userFullName={post.fields.author.fields.name}
          userProfilePicture={
            post.fields.author.fields.profilePicture.fields.file.url
          }
          postMessage={post.fields.message}
          postImage={post.fields.media?.fields.file.url}
          key={i}
        />
      ))}
    </div>
  );
};

export default PostList;
