import { Feed } from '@/components/organisms';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchFucntion = async () => {
      const response = await fetch('/api/assets/3Rt5pOaSKKgUEFb8SYSQxb');
      const data = await response.json();
      //SetUser('https:' + data.items[0].fields.profilePicture.fields.file.url);
      console.log(data);
    };

    fetchFucntion();
  }, []);

  return <Feed />;
};
export default Home;
