import { Feed } from '@/components/organisms';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
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
  }, []);

  return <Feed />;
};
export default Home;
