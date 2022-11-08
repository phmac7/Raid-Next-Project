import { Feed } from '@/components/organisms';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [user, SetUser] = useState<string>('');

  useEffect(() => {
    const fetchFucntion = async () => {
      const response = await fetch('/api/users/3ylBXptrDQxOV3M0hRuDlc');
      const data = await response.json();
      //SetUser('https:' + data.items[0].fields.profilePicture.fields.file.url);
      console.log(data);
    };

    fetchFucntion();
  }, []);

  return <Feed />;
};
export default Home;
