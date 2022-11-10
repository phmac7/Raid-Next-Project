import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Post } from '@/models/contentfulObjects';
import { PostList } from '@/components/molecules';

const ProfilePage = () => {
  const router = useRouter();

  const fetchPostList = async () => {
    const res = await fetch('/api/post');
    const resJson = await res.json();
    const data: Post[] = resJson.items;
    return data;
  };

  const userPosts = useQuery({
    queryKey: ['userPosts'],
    queryFn: fetchPostList,
  });
  if (userPosts.isLoading) {
    return <div>Loading...</div>;
  }
  if (userPosts.isError) {
    return <div>Error</div>;
  }

  if (userPosts.data) {
    const filteredPosts = userPosts.data.filter(
      (post) =>
        post.fields.author['en-US'].sys.id.toLowerCase() === router.query.id
    );
    return <div>{/* <PostList postList={filteredPosts} /> */}</div>;
  }
};

export default ProfilePage;
