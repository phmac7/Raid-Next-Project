import React, { useState } from 'react';
import styles from '@/styles/pages/ProfilePage.module.scss';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import { getEntrysByFieldIdValue } from '@/helpers/delivery';
import contentfulTypes from '@/helpers/contentfulTypes';

import { ProfilePageProps } from '@/models/pages';
import {
  UserTitle,
  UserInfo,
  PostList,
  UserGames,
} from '@/components/molecules';
import Image from 'next/image';
import { useStore } from '@/store';

const ProfilePage: React.FC<ProfilePageProps> = ({
  userId,
  userPosts,
  userGames,
}) => {
  const [shownComponent, setShownComponent] =
    useState<'feed' | 'games' | 'info'>('feed');

  const { storedUser, setStoredUser } = useStore();
  const { storedUserGames } = useStore();
  return (
    <div className={styles.container}>
      <div className={styles.profile__user}>
        <UserTitle
          user={storedUser!}
          shownComponent={shownComponent}
          setShownComponent={setShownComponent}
        />
      </div>
      <div
        className={`${styles.profile__info} ${
          shownComponent === 'info' ? styles.profile__visible : ''
        }`}
      >
        <UserInfo user={storedUser!} />
      </div>
      <div
        className={`${styles.profile__feed} ${
          shownComponent === 'feed' ? styles.profile__visible : ''
        }`}
      >
        <PostList postList={userPosts} user={storedUser!} />
      </div>
      <div
        className={`${styles.profile__games} ${
          shownComponent === 'games' ? styles.profile__visible : ''
        }`}
      >
        <UserGames userGames={storedUserGames!} />
      </div>
    </div>
  );
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
