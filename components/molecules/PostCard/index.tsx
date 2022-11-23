import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
  userFullName: string;
  postMessage?: string;
  userProfilePicture: string;
  postImage?: string;
};

const PostCard = ({
  userFullName,
  userProfilePicture,
  postMessage,
  postImage,
}: Props) => {
  const heart = useRef<HTMLDivElement | null>(null);

  function changeHeartColor() {
    if (heart.current?.classList.contains(styles.liked)) {
      heart.current?.classList.remove(styles.liked);
    } else {
      heart.current?.classList.add(styles.liked);
    }
  }

  // function openCommentModal() {
  //   // ...backlog
  // }

  console.log(postImage);

  return (
    <section className={styles.postCard}>
      <header className={styles.postCard__header}>
        <div className={styles.postCard__userData}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={50}
            height={50}
            src={'https://' + userProfilePicture}
          />
          <div className={styles.postCard__userInfo}>
            <p className={styles['postCard__text--big']}>{userFullName}</p>
            <p className={styles['postCard__text--dark']}>Just now</p>
          </div>
        </div>

        <div className={styles.postCard__playingGame}>
          <p className={styles['postCard__text--dark']}>Playing</p>
          <p className={styles.postCard__text}>League of Legends</p>
        </div>
      </header>

      <div className={styles.postCard__postContent}>
        <div className={styles.postCard__postImage}>
          {postImage && (
            <Image
              alt={'Picture of a game'}
              width={570}
              height={300}
              src={'https://' + postImage}
              style={{ marginBottom: 15 }}
            />
          )}
        </div>
        <p className={styles.postCard__text}>{postMessage}</p>
      </div>

      <hr />
      <div className={styles.postCard__likeAndCommentsSection}>
        <button
          onClick={changeHeartColor}
          className={`${styles.postCard__likeButton}`}
        >
          <div ref={heart} className={`${styles.postCard__heart}`}></div>
          <p className={styles.postCard__text}>Like</p>
        </button>

        <div className={styles.postCard__commentsAndLikeInfo}>
          <p className={styles['postCard__text--dark']}>15 Likes</p>
          {/* <p className={styles["postCard__text--dark"]}>15 Comments</p> */}
        </div>

        {/* <button
          onClick={openCommentModal}
          className={`${styles.postCard__commentButton}`}
        >
          <Image src={`/ChatCircle.svg`} width={24} height={24}></Image>
          <p className={styles.postCard__text}>Comments</p>
        </button> */}
      </div>
      <hr />

      <div className={styles.postCard__usersThatLiked}>
        <div className={styles.postCard__sideBySide}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={40}
            height={40}
            src={'https://' + userProfilePicture}
          />
        </div>
        <div className={styles.postCard__sideBySide}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={40}
            height={40}
            src={'https://' + userProfilePicture}
          />
        </div>
        +
        <div className={styles.postCard__sideBySide}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={40}
            height={40}
            src={'https://' + userProfilePicture}
          />
        </div>
        <div className={styles.postCard__sideBySide}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={40}
            height={40}
            src={'https://' + userProfilePicture}
          />
        </div>
        <div className={styles.postCard__sideBySide}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={40}
            height={40}
            src={'https://' + userProfilePicture}
          />
        </div>
      </div>
    </section>
  );
};

export default PostCard;
