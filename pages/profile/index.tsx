import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '@/store';

const Profile = () => {
  const router = useRouter();

  const { storedUser } = useStore();

  router.replace(`/profile/${storedUser?.sys.id}`);
  return <div>Loading...</div>;
};

export default Profile;
