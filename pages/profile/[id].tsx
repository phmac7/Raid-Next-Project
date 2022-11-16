import React, { useState } from 'react';
import styles from '@/styles/pages/ProfilePage.module.scss';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { Post, User } from '@/models/contentfulObjects';
import { UserTitle, UserInfo, PostList } from '@/components/molecules';
import Image from 'next/image';

interface ProfilePageProps {
  userId: string | string[] | undefined;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userId }) => {
  const [component, setComponent] =
    useState<'feed' | 'games' | 'info' | 'all'>('feed');

  const user = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await (await fetch(`/api/users/${userId}`)).json();
      const data: User = await res['items'];
      return data;
    },
  });

  const userPosts = useQuery({
    queryKey: ['userPosts'],
    queryFn: async () => {
      const res = await (await fetch('/api/post')).json();
      const data: Post[] = await res.items;
      return data;
    },
  });

  const elos = useQuery({
    queryKey: ['userElos'],
    queryFn: async () => {
      const res = await (await fetch(`/api/user_plays_game`)).json();
      const data = await res;
      return data;
    },
    enabled: !!user.data?.sys.id,
  });
  if (elos) {
    console.log(elos.data);
  }

  if (user.isLoading) {
    return (
      <div>
        <Image src={'/assets/loading.gif'} width={500} height={500} />
      </div>
    );
  }
  if (user.isError) {
    return <div>Something went wrong...</div>;
  }

  const filteredPosts = userPosts.data?.filter(
    (post) => post.fields.author['en-US'].sys.id === userId
  );

  if (!filteredPosts) {
    return (
      <div>
        <Image src={'/assets/loading.gif'} width={500} height={500} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.profile__user}>
        <UserTitle user={user.data} />
      </div>
      <div className={styles.profile__info}>
        <UserInfo user={user.data} />
      </div>
      <div className={styles.profile__feed}>
        <PostList postList={filteredPosts} user={user.data} />
      </div>
      <div className={styles.profile__games}>{/* <UserGames elo={} /> */}</div>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.id;

  return {
    props: {
      userId: params,
    },
  };
};
