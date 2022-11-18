import React, { useState } from 'react';
import styles from '@/styles/pages/ProfilePage.module.scss';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import { getEntrysByFieldIdValue } from '@/helpers/delivery';
import contentfulTypes from '@/helpers/contentfulTypes';

import { ProfilePageProps } from '@/models/pages';
import { UserTitle, UserInfo, PostList } from '@/components/molecules';
import Image from 'next/image';
import { useStore } from '@/store';

const ProfilePage: React.FC<ProfilePageProps> = ({
  userId,
  userPosts,
  userGames,
}) => {
  const [component, setComponent] =
    useState<'feed' | 'games' | 'info' | 'all'>('feed');

  const { storedUser, setStoredUser } = useStore();

  console.log('STOREDUSER', storedUser);

  //console.log(userPosts);
  console.log(userGames);

  /*
  const user = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await (await fetch(`/api/users/${userId}`)).json();
      const data: User = await res['items'];
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

*/
  return <div></div>;

  /*return (
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
      <div className={styles.profile__games}>{/* <UserGames elo={} /> }</div>
    </div>
  );*/
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.id;

  if (typeof params === 'string') {
    const userPosts = await getEntrysByFieldIdValue(
      contentfulTypes.post,
      'fields.author.sys.id',
      params
    );

    const userGames = await getEntrysByFieldIdValue(
      contentfulTypes.userPlayGames,
      'fields.user.sys.id',
      params
    );

    return {
      props: {
        userId: params,
        userPosts: userPosts,
        userGames: userGames,
      },
    };
  }

  return {
    props: {
      userId: params,
    },
  };
};
