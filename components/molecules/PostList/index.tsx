import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';
import styles from './styles.module.scss';
import { PostListProps } from '@/models/components';
import { Post } from '@/models/responseTypes';

const PostList: React.FC<PostListProps> = ({ postList, user }) => {
  return (
    <div className={styles.postList}>
      {postList.map((el: Post, i: number) => (
        <div key={i}></div>
      ))}
    </div>
  );
};

export default PostList;
