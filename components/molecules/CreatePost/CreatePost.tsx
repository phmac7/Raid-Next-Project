import React from 'react';
import styles from './CreatePost.module.scss';
import { Button, Avatar } from '@/components/atoms';

import { CreatePostType } from '@/models/components';

const CreatePost: React.FC<CreatePostType> = ({ avatar, button }) => {
  return (
    <section className={styles.createPost}>
      <Avatar {...avatar} />
      <Button {...button} />
    </section>
  );
};

export default CreatePost;
