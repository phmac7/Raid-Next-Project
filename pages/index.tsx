import { useEffect } from 'react';

import { Header, Sidebar } from '@/components/organisms';
import type { NextPage } from 'next';
import { Console } from 'console';

const mockUser = {
  name: 'Mussum Cacildis',
  picture:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
};

const Home: NextPage = () => {
  useEffect(() => {
    const fetchFunction = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      console.log(data);
    };

    fetchFunction();
  }, []);

  return (
    <>
      <Header userName={mockUser.name} userPicturePath={mockUser.picture} />
      <Sidebar />
    </>
  );
};
export default Home;
