import React from 'react';
import styles from './CreatePost.module.scss';
import { Button, AvatarInput } from '@/components/atoms';

import { CreatePostType } from '@/models/components';

const CreatePost: React.FC<CreatePostType> = ({ avatarInput, button }) => {
  return (
    <section className={styles.createPost}>
      <AvatarInput {...avatarInput} />
      <Button {...button} />
    </section>
  );
};

export default CreatePost;
