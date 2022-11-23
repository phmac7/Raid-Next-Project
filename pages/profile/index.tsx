import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '@/store';
import Layout from '@/layout/Layout';
import { Spinner } from '@/components/atoms';

const Profile = () => {
  const router = useRouter();

  const { storedUser } = useStore();

  router.replace(`/profile/${storedUser?.sys.id}`);
  return (
    <Layout>
      <Spinner />
    </Layout>
  );
};

export default Profile;
