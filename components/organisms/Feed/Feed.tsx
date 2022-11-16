import React, { useRef, FC, useState, useEffect } from 'react';
import { Modal, CreatePost } from '@/components/molecules';
import { Button, Dropdown, TextArea, FileInput } from '@/components/atoms';
import Portal from '@/HOC/Portal';
import { createPost, getPosts } from '@/helpers/fetch';
import { Game } from '@/models/contentfulObjects';
import { DropdownOptions } from '@/models/components';

import { Camera } from 'phosphor-react';

const avatar = {
  avatar:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
  id: 'createPost',
};

const Feed: FC = () => {
  const [game, setGame] = useState('');
  const [message, setMessage] = useState('');
  const [allGames, setAllGames] = useState<DropdownOptions>([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      const response = await fetch('/api/games');
      const games = await response.json();
      const dropdownOptions = games.items.map((game: Game) => ({
        text: game.fields.name['en-US'],
        value: game.sys.id,
      }));
      console.log(dropdownOptions);
      setAllGames(dropdownOptions);
    };

    fetchAllGames();
  }, []);

  const modalRef = useRef<HTMLDialogElement>(null);

  const modalHeader = (
    <Dropdown
      id="games"
      name="games"
      options={allGames}
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
      <FileInput text="photo" icon={<Camera size={28} />} />
      <Button
        label="Create Post"
        onClick={() => {
          createPost(game, message);
          closeModalHandler();
          console.log(allGames[0]);
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
<<<<<<< HEAD
      <Modal
        onCloseModal={closeModalHandler}
        ref={modalRef}
        header={modalHeader}
        main={modalMain}
        footer={modalFooter}
      />
=======
      <Portal>
        <Modal
          onCloseModal={closeModalHandler}
          ref={modalRef}
          header={modalHeader}
          main={modalMain}
          footer={modalFooter}
        />
      </Portal>
>>>>>>> create-post-entry
    </>
  );
};

export default Feed;
