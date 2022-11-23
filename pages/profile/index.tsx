import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '@/store';
import Layout from '@/layout/Layout';

const Profile = () => {
  const router = useRouter();

  const { storedUser } = useStore();

  router.replace(`/profile/${storedUser?.sys.id}`);
  return (
    <Layout>
      <div>Loading...</div>
    </Layout>
  );
};

export default Profile;
