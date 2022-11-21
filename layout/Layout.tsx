import React, { ReactNode, FC, useState } from 'react';
import { Header, Sidebar } from '@/components/organisms';
import styles from './layout.module.scss';

interface LayoutType {
  children: ReactNode;
}

const mockUser = {
  name: 'Mussum Cacildis',
  picture:
    'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
};

const Layout: FC<LayoutType> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <Header
        onOpenMenu={openMenu}
        userName={mockUser.name}
        userPicturePath={mockUser.picture}
      />
      <section className={styles.layout}>
        <Sidebar onCloseMenu={closeMenu} isMenuOpen={isMenuOpen} />
        <main className={styles['layout__main']}>{children} </main>
      </section>
    </>
  );
};

export default Layout;
