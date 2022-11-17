import { Feed } from '@/components/organisms';
import type { GetServerSideProps, NextPage } from 'next';

import { getAllEntriesFromOneContent } from '@/helpers/delivery';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import { useEffect } from 'react';

const Home: NextPage = ({ games }) => {
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

  const gamesDropdownOptions = games.map((game) => ({
    text: game.fields.name,
    value: game.sys.id,
  }));

  return <Feed dropdownOptions={gamesDropdownOptions} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const games = await getAllEntriesFromOneContent(contentfulTypeIds.game);

  return {
    props: {
      games: games,
    },
  };
};

export default Home;
