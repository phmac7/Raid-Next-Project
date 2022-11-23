import LogoFull from '@/components/atoms/Icons/Logo/LogoFull';
import Image from 'next/image';
import { FC } from 'react';

import { List, MagnifyingGlass } from 'phosphor-react';

import styles from './header.module.scss';
import Logo from '@/components/atoms/Icons/Logo/Logo';
import { useStore } from '@/store';

interface HeaderProps {
  onOpenMenu: () => void;
}

const Header: FC<HeaderProps> = ({ onOpenMenu }) => {
  const { storedUser, setStoredUser } = useStore();
  console.log(storedUser);

  return (
    <nav className={styles.header}>
      <div className={styles['header__logo']}>
        <LogoFull width="195" height="40" />
      </div>
      <div className={styles['header__mobileMenu']}>
        <button className={styles['header__menuButton']} onClick={onOpenMenu}>
          <List size={36} />
        </button>
        <Logo />
      </div>

      <div className={styles['header__searchInputContainer']}>
        <MagnifyingGlass
          size={28}
          className={styles['header__searchInputIcon']}
        />
        <input
          className={styles['header__searchInput']}
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search for something..."
        />
      </div>
      {/* TODO - add label to search, make it invisible*/}
      <div className={styles['header__userInfo']}>
        <span className={styles['header__userName']}>
          {storedUser?.fields.name}
        </span>
        <Image
          className={styles['header__userPicture']}
          src={
            storedUser
              ? 'https://' + storedUser!.fields.profilePicture.fields.file.url
              : ''
          }
          alt={`picture of ${storedUser?.fields.name}`}
          width="60px"
          height="60px"
        />
      </div>
    </nav>
  );
};
export default Header;
