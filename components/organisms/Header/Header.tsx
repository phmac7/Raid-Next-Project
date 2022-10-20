import LogoDefault from '@/components/atoms/Icons/Logo/LogoDefault';
import Image from 'next/image';
import { FC } from 'react';

import styles from './header.module.scss';

interface HeaderProps {
  userName: string;
  userPicturePath: string;
}

const Header: FC<HeaderProps> = ({ userName, userPicturePath }) => {
  return (
    <nav className={styles.header}>
      <div className={styles['header__logo']}>
        <LogoDefault width="195" height="40" />
      </div>
      <div>
        <input
          className={styles['header__searchInput']}
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search for something..."
        />
      </div>
      <div className={styles['header__userInfo']}>
        <span className={styles['header__userName']}>{userName}</span>
        <Image
          className={styles['header__userPicture']}
          src={userPicturePath}
          alt={`picture of ${userName}`}
          width="60px"
          height="60px"
        />
      </div>
    </nav>
  );
};
export default Header;
