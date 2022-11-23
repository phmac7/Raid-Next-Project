import React, { ReactNode, FC, useState } from 'react';
import { Header, Sidebar } from '@/components/organisms';
import styles from './layout.module.scss';

interface LayoutType {
  children: ReactNode;
}

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
      <Header onOpenMenu={openMenu} />
      <section className={styles.layout}>
        <Sidebar onCloseMenu={closeMenu} isMenuOpen={isMenuOpen} />
        <main className={styles['layout__main']}>{children} </main>
      </section>
    </>
  );
};

export default Layout;
