import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const UserProfile = ({ userId, image }: any) => {
  const [userInfo, setUserInfo] = useState({ imageUrl: "", name: "" });

  useEffect(() => {
    // fetch in users table to grab the name and image from database

    setUserInfo({ imageUrl: "/Avatar.png", name: "Gilmar Santana" });
  }, [userId]);

  return (
    <div className={styles.userProfile}>
      <Image
        className={styles.userProfile__image}
        alt="Image of a game"
        width={50}
        height={50}
        src={userInfo.imageUrl}
      />
      <div className={styles.userProfile__data}>
        <p className={styles.userProfile__name}>{userInfo.name}</p>
        <p className={styles.userProfile__postDate}>Just now</p>
      </div>
    </div>
  );
};

export default UserProfile;
