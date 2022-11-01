import CreatePost from '@/components/molecules/CreatePost/CreatePost';
import { Header, Sidebar } from '@/components/organisms';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const mockUser = {
  name: 'Mussum Cacildis',
  picture:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
};

const avatarInput = {
  placeholder: "What's is happening",
  avatar:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
  id: 'createPost',
  label: 'Create Post',
};

const button = {
  label: 'Create Post',
};

const Home: NextPage = () => {
  const [user, SetUser] = useState<string>('');

  useEffect(() => {
    const fetchFucntion = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      SetUser('https:' + data.items[0].fields.profilePicture.fields.file.url);
      console.log(data);
    };

    fetchFucntion();
  }, []);

  return (
    <>
      <Header userName={mockUser.name} userPicturePath={user} />
      <Sidebar />
      <CreatePost avatarInput={avatarInput} button={button} />
      <img src="" alt="" />
    </>
  );
};
export default Home;
