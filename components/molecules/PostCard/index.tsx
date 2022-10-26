import { UserProfile } from "@/components/atoms";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  userId: number;
  gameId: number;
};

const PostCard = ({ userId, gameId }: Props) => {
  const [gameInfo, setGameInfo] = useState({ name: "" });
  const URL = "/data/game.json";

  useEffect(() => {
    async function fetchGameData() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`Something went wrong :(`);
        }
        const filtered = data.filter((item: any) => item.id === gameId);
        setGameInfo({ ...gameInfo, name: filtered[0].name });
      } catch (err) {}
    }
    fetchGameData();
  }, []);

  return (
    <section className={styles.postCard}>
      <header className={styles.postCard__header}>
        <UserProfile userId={userId} />
        <div className={styles.postCard__playingGame}>
          <p className={styles["postCard__text--dark"]}>Playing</p>
          <p className={styles.postCard__text}>{gameInfo.name}</p>
        </div>
      </header>

      <div className={styles.postCard__content}></div>
      <div className={styles.postCard__footer}></div>
    </section>
  );
};

export default PostCard;
