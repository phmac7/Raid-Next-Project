import { ThemeChanger, Button } from "@/components/atoms";
import type { NextPage } from "next";
import styles from "@/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.home__title}>Hello World</h1>
      <ThemeChanger />
      <Button label="Button" />
    </>
  );
};

export default Home;
