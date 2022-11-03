import { PostList } from "@/components/molecules";
import styles from "@/styles/pages/Feed.module.scss";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <PostList />
    </div>
  );
}
