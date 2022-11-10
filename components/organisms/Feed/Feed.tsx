import React, { useRef, FC, useState, useEffect } from 'react';
import { Modal, CreatePost } from '@/components/molecules';
import { Button, Dropdown, TextArea } from '@/components/atoms';
import Portal from '@/HOC/Portal';
import { createPost, getPosts } from '@/helpers/fetch';

const avatar = {
  avatar:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
  id: 'createPost',
};

const gamesArray = [
  { text: 'Select a game...', value: '' },
  { text: 'Valorant', value: 'valorant' },
  { text: 'League of legends', value: 'lol' },
];

const Feed: FC = () => {
  const [game, setGame] = useState('');
  const [message, setMessage] = useState('');

  const modalRef = useRef<HTMLDialogElement>(null);

  const modalHeader = (
    <Dropdown
      id="games"
      name="games"
      options={gamesArray}
      onChange={(e) => setGame(e.target.value)}
      value={game}
    />
  );

  const modalMain = (
    <TextArea
      placeholder="What's happening..."
      id="message"
      label="postMessage"
      onChange={(e) => setMessage(e.target.value)}
      value={message}
    />
  );

  const modalFooter = (
    <>
      <Button
        label="Create Post"
        onClick={() => {
          createPost(message);
          closeModalHandler();
          console.log(game, message);
        }}
      />
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
  useEffect(() => {
    console.log('POSTS ====================', getPosts());
  }, []);

  return (
    <>
      <CreatePost avatar={avatar} button={button} />
      <Portal>
        <Modal
          onCloseModal={closeModalHandler}
          ref={modalRef}
          header={modalHeader}
          main={modalMain}
          footer={modalFooter}
        />
      </Portal>
    </>
  );
};

export default Feed;
