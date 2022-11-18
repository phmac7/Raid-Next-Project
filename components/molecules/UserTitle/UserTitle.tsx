import React from 'react';
import Image from 'next/image';
import styles from './UserTitle.module.scss';
import { UserTitleProps } from '@/models/components';
import { useQuery } from '@tanstack/react-query';

const UserTitle: React.FC<UserTitleProps> = ({ user }) => {
  const userMedia = useQuery({
    queryKey: ['userMedia'],
    queryFn: async () => {
      const res = await (
        await fetch(
          `https://api.contentful.com/spaces/mpk7fhk3qfhm/environments/master/assets/${user.fields.profilePicture['en-US'].sys.id}`,
          {
            headers: {
              Authorization:
                'Bearer ' + 'CFPAT-r-ibDp5k4zzbjj_wJQ9XLgy1WA4AimLuGEmfhPWi6JA',
            },
          }
        )
      ).json();
      const data = await res;
      return data;
    },
  });

  if (userMedia.isLoading) {
    return (
      <div>
        <Image src={'/assets/loading.gif'} width={200} height={200} />
      </div>
    );
  }

  return (
    <figure className={styles.user}>
      <div className={styles.user__photo}>
        <Image
          src={'https:/' + userMedia.data.fields.file['en-US'].url}
          width={100}
          height={100}
        />
      </div>
      <figcaption className={styles.user__description}>
        <span className={styles.user__description__name}>
          {user.fields.name['en-US']}
        </span>
        <span className={styles.user__description__discordId}>
          {user.fields.discord['en-US']}
        </span>
      </figcaption>
    </figure>
  );
};

export default UserTitle;
