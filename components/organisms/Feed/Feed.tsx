import React, { useRef, FC, useState, useEffect, ChangeEvent } from 'react';
import { Modal, CreatePost, Feedback } from '@/components/molecules';
import {
  Button,
  Dropdown,
  TextArea,
  FileInput,
  Spinner,
} from '@/components/atoms';
import { createPost, getPosts } from '@/helpers/fetch';
import { Game } from '@/models/contentfulObjects';
import {
  DropdownOptions,
  FeedProps,
  FeddbackObject,
} from '@/models/components';

import { Camera } from 'phosphor-react';

const avatar = {
  avatar:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
  id: 'createPost',
};

const Feed: FC<FeedProps> = ({ dropdownOptions }) => {
  const [feedbackInfo, setFeedbackInfo] = useState<FeddbackObject>({
    status: 'success',
    message: '',
    title: '',
    show: false,
  });
  const [allGames, setAllGames] = useState<DropdownOptions[]>(dropdownOptions);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [game, setGame] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let timerFeedback: NodeJS.Timeout;

    if (feedbackInfo.show) {
      timerFeedback = setTimeout(() => {
        setFeedbackInfo((prevState) => ({ ...prevState, show: false }));
      }, 5000);
    }

    return () => {
      clearTimeout(timerFeedback);
    };
  }, [feedbackInfo.show]);

  const closeFeedbackHandler = () => {
    setFeedbackInfo((prevState) => ({ ...prevState, show: false }));
  };

  const showFeedbackHandler = () => {
    setFeedbackInfo((prevState) => ({ ...prevState, show: true }));
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = URL.createObjectURL(event.target.files[0]);
      console.log();
      setSelectedPhoto(file);
    }
  };

  const openModalHandler = () => {
    modalRef.current?.showModal();
  };

  const closeModalHandler = () => {
    modalRef.current?.close();
  };

  const addPostHandler = async () => {
    setIsLoading(true);
    const response = await createPost(game, message, selectedPhoto);
    const feedbackObject = {
      title: response.title,
      message: response.message,
      status: response.status,
      show: true,
    };
    setFeedbackInfo(feedbackObject);
    setIsLoading(false);
    closeModalHandler();
  };

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
      <FileInput
        text={selectedPhoto ? 'Image Selected' : 'photo'}
        icon={<Camera size={28} />}
        onChange={onChangeFile}
        value={selectedPhoto}
      />
      <Button label="Create Post" onClick={addPostHandler} />
    </>
  );

  const button = {
    label: 'Create Post',
    onClick: openModalHandler,
  };

  return (
    <>
      <CreatePost avatar={avatar} button={button} />
      <Modal
        onCloseModal={closeModalHandler}
        ref={modalRef}
        header={modalHeader}
        main={modalMain}
        footer={modalFooter}
      />

      {feedbackInfo.show && (
        <Feedback
          title={feedbackInfo.title}
          message={feedbackInfo.message}
          status={feedbackInfo.status}
          onClose={closeFeedbackHandler}
        />
      )}
      {!isLoading && <Spinner />}
    </>
  );
};

export default Feed;
