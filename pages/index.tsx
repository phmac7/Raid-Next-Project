import { Feed } from '@/components/organisms';
import type { GetServerSideProps, NextPage } from 'next';

import { getAllEntriesFromOneContent, getEntryById } from '@/helpers/delivery';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import { useEffect } from 'react';
import { HomePageProps } from '@/models/pages';
import { useStore } from '@/store';

import Layout from '@/layout/Layout';

const Home: NextPage<HomePageProps> = ({ games, user, posts }) => {

  const { storedUser, setStoredUser } = useStore();
  const { storedUserGames, setStoredUserGames } = useStore();

  useEffect(() => {
    setStoredUser(user);
    setStoredUserGames(games);
  }, []);

  const gamesDropdownOptions = games.map((game) => ({
    text: game.fields.name,
    value: game.sys.id,
  }));

  return (
    <Layout>
      <Feed dropdownOptions={gamesDropdownOptions} posts={posts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const games = await getAllEntriesFromOneContent(contentfulTypeIds.game);
  const user = await getEntryById('4122dyrXJiL0Sr06dde27u');

  const posts = await getAllEntriesFromOneContent(contentfulTypeIds.post);

  return {
    props: {
      games: games,
      user: user,
      posts: posts,
    },
  };
};

export default Home;
