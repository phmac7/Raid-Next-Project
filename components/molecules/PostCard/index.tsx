import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

type Props = {
  userFullName: string;
  postMessage?: string;
  userProfilePicture: string | StaticImageData;
};

const PostCard = ({ userFullName, userProfilePicture, postMessage }: Props) => {
  return (
    <section className={styles.postCard}>
      <header className={styles.postCard__header}>
        <div className={styles.postCard__userData}>
          <Image
            className={styles.postCard__userImage}
            alt="Image of a game"
            width={50}
            height={50}
            src={"https://" + userProfilePicture}
          />
          <div className={styles.postCard__userInfo}>
            <p className={styles["postCard__text--big"]}>{userFullName}</p>
            <p className={styles["postCard__text--dark"]}>Just now</p>
          </div>
        </div>

        <div className={styles.postCard__playingGame}>
          <p className={styles["postCard__text--dark"]}>Playing</p>
          <p className={styles.postCard__text}>League of Legends</p>
        </div>
      </header>
    </section>
  );
};

export default PostCard;
