import { Feed } from '@/components/organisms';
import type { GetServerSideProps, NextPage } from 'next';

import { getAllEntriesFromOneContent, getEntryById } from '@/helpers/delivery';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import { useEffect } from 'react';
import { HomePageProps } from '@/models/pages';

const Home: NextPage<HomePageProps> = ({ games, user }) => {
  /*useEffect(() => {
    const fetchFucntion = async () => {
      const response = await fetch('/api/user_plays_game', {
        method: 'POST',
        body: JSON.stringify({
          fieldIdentificator: 'fields.user.sys.id',
          value: '3ylBXptrDQxOV3M0hRuDlc',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      //SetUser('https:' + data.items[0].fields.profilePicture.fields.file.url);
      console.log(data);
    };

    fetchFucntion();
  }, []);*/

  console.log(games);
  console.log(user);

  const gamesDropdownOptions = games.map((game) => ({
    text: game.fields.name,
    value: game.sys.id,
  }));

  return <Feed dropdownOptions={gamesDropdownOptions} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const games = await getAllEntriesFromOneContent(contentfulTypeIds.game);

  const user = await getEntryById('4122dyrXJiL0Sr06dde27u');

  return {
    props: {
      games: games,
      user: user,
    },
  };
};

export default Home;
