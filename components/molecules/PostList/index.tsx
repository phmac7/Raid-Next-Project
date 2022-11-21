import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PostCard } from '@/components/molecules';
import styles from './styles.module.scss';
import { PostListProps } from '@/models/components';
import { Post } from '@/models/responseTypes';

const PostList: React.FC<PostListProps> = ({ postList, user }) => {
  return (
    <div className={styles.postList}>
      {postList.map((el: Post, i: number) => (
        <PostCard
          userFullName={user.fields.name}
          userProfilePicture={user.fields.profilePicture.fields.file.url}
          //postMessage={el.fields.message}
          key={i}
        />
      ))}
    </div>
  );
};

export default PostList;
