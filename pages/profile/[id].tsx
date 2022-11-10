import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { PostList, UserExpanded } from '@/components/molecules';
import { fetchPostList, fetchUserList } from '@/services/getData';
import { UserList } from 'phosphor-react';

const ProfilePage = () => {
  const router = useRouter();

  const userPosts = useQuery({
    queryKey: ['userPosts'],
    queryFn: fetchPostList,
  });

  const usersList = useQuery({
    queryKey: ['usersList'],
    queryFn: fetchUserList,
  });

  if (userPosts.isLoading || usersList.isLoading) {
    return <div>Loading...</div>;
  }
  if (userPosts.isError || usersList.isError) {
    return <div>Error</div>;
  }
  const filteredPosts = userPosts.data.filter(
    (post) =>
      post.fields.author['en-US'].sys.id.toLowerCase() === router.query.id
  );

  const filteredUser = usersList.data.filter(
    (post) => post.sys.id.toLowerCase() === router.query.id
  );
  console.log(filteredUser);

  return (
    <div>
      Dados Carregados!
      {filteredPosts.map((item, i) => (
        <p key={i}>{item.fields.author['en-US'].sys.id}</p>
      ))}
    </div>
  );
};

export default ProfilePage;
