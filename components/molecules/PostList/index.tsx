import { Post, User } from '@/models/contentfulObjects';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';
//import PostCard from './PostCard';
import styles from './styles.module.scss';

type PostListProps = {
  postList: Post[] | undefined;
  user: User;
};

const PostList: React.FC<PostListProps> = ({ postList, user }) => {
  const userMedia = useQuery({
    queryKey: ['userMedia'],
    queryFn: async () => {
      const res = await (
        await fetch(
          `https://api.contentful.com/spaces/mpk7fhk3qfhm/environments/master/assets/${user.fields.profilePicture['en-US'].sys.id}`,
          {
            headers: {
              Authorization:
                'Bearer ' + 'CFPAT-r-ibDp5k4zzbjj_wJQ9XLgy1WA4AimLuGEmfhPWi6JA',
            },
          }
        )
      ).json();
      const data = await res;
      return data;
    },
  });
  if (!postList || userMedia.isLoading) {
    return (
      <div>
        <Image src={'/assets/loading.gif'} width={200} height={200} />
      </div>
    );
  }

  return (
    <div className={styles.postList}>
      {postList.map((el: Post, i: any) => (
        <div key={i}>
          <PostCard
            userFullName={user.fields.name['en-US']}
            userProfilePicture={userMedia.data?.fields.file['en-US'].url}
            // postContent={el.fields.message['en-US']}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
