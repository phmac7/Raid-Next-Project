import React, { useRef } from 'react';
import { Modal, CreatePost } from '@/components/molecules';
import { Button, Dropdown, TextArea } from '@/components/atoms';

import styles from './Feed.module.scss';

const avatarInput = {
  placeholder: "What's is happening",
  avatar:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
  id: 'createPost',
  label: 'Create Post',
};

const gamesArray = [
  { text: 'Valorant', value: 'valorant' },
  { text: 'League of legends', value: 'lol' },
];

const Feed = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const modalHeader = <Dropdown id="games" name="games" options={gamesArray} />;

  const modalMain = (
    <TextArea
      placeholder="What's happening..."
      id="message"
      label="postMessage"
    />
  );

  const modalFooter = (
    <>
      <Button label="Create Post" />
    </>
  );

  const openModalHandler = () => {
    modalRef.current?.showModal();
  };

  const closeModalHandler = () => {
    modalRef.current?.close();
  };

  const button = {
    label: 'Create Post',
    onClick: openModalHandler,
  };

  return (
    <>
      <CreatePost avatarInput={avatarInput} button={button} />
      <Modal
        onCloseModal={closeModalHandler}
        ref={modalRef}
        header={modalHeader}
        main={modalMain}
        footer={modalFooter}
      />
    </>
  );
};

export default Feed;
