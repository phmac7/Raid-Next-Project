import React, { useRef, FC, useState, useEffect, ChangeEvent } from 'react';
import { Modal, CreatePost, Feedback, PostList } from '@/components/molecules';
import {
  Button,
  Dropdown,
  TextArea,
  FileInput,
  Spinner,
} from '@/components/atoms';
import { createPost, getPosts } from '@/helpers/fetch';
import {
  DropdownOptions,
  FeedProps,
  FeddbackObject,
} from '@/models/components';
import { useStore } from '@/store';
import { Camera } from 'phosphor-react';

const Feed: FC<FeedProps> = ({ dropdownOptions, posts }) => {
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

  const { storedUser } = useStore();

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
    closeModalHandler();
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

  const avatar = {
    avatar: storedUser
      ? 'https://' + storedUser!.fields.profilePicture.fields.file.url
      : '',
    id: 'createPost',
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
      <PostList postList={posts} />
      {feedbackInfo.show && (
        <Feedback
          title={feedbackInfo.title}
          message={feedbackInfo.message}
          status={feedbackInfo.status}
          onClose={closeFeedbackHandler}
        />
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default Feed;
