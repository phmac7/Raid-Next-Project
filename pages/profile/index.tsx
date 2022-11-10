<<<<<<< HEAD
import { BasicInfo } from '@/components/atoms';
import { UserExpanded, UserGames } from '@/components/molecules';
import type { NextPage } from 'next';

const Profile: NextPage = () => {
    return (
        <div>
            <UserExpanded />
            <BasicInfo />
            {/* Lista de Posts*/}
            <UserGames />
        </div>
    )
}
=======
import { PostList } from '@/components/molecules';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Profile = () => {
  const router = useRouter();
  router.push('/profile/4122dyrXJiL0Sr06dde27u');
  return <div>Loading...</div>;
};

export default Profile;
>>>>>>> feature/profilePage
