import { SidebarItem } from '@/components/molecules';
import { SidebarProps } from '@/models/components';
import { FC } from 'react';
import styles from './sidebar.module.scss';

import {
  Article,
  Users,
  Clock,
  ChatsCircle,
  Bell,
  User,
  Gear,
  SignOut,
  X,
} from 'phosphor-react';

const menuItems = [
  {
    id: 1,
    title: 'Feed',
    href: '/',
    icon: <Article size={24} weight="bold" />,
  },
  {
    id: 2,
    title: 'Communities',
    href: '/',
    icon: <Users size={24} weight="bold" />,
  },
  {
    id: 3,
    title: 'Matches',
    href: '/',
    icon: <Clock size={24} weight="bold" />,
  },
  {
    id: 4,
    title: 'Messages',
    href: '/',
    icon: <ChatsCircle size={24} weight="bold" />,
  },
  {
    id: 5,
    title: 'Notifications',
    href: '/',
    icon: <Bell size={24} weight="bold" />,
  },
  {
    id: 6,
    title: 'Profile',
    href: '/profile',
    icon: <User size={24} weight="bold" />,
  },
  {
    id: 7,
    title: 'Settings',
    href: '/',
    icon: <Gear size={24} weight="bold" />,
  },
  {
    id: 8,
    title: 'Logout',
    href: '/login',
    icon: <SignOut size={24} weight="bold" />,
  },
];

const renderList = (list: any[]) =>
  list.map((item) => (
    <SidebarItem
      key={item.id}
      title={item.title}
      href={item.href}
      icon={item.icon}
    />
  ));

const Sidebar: FC<SidebarProps> = ({ isMenuOpen, onCloseMenu }) => {
  return (
    <div className={styles[`sidebar${isMenuOpen ? '--open' : ''}`]}>
      <button className={styles['sidebar__button']} onClick={onCloseMenu}>
        <X size={40} />
      </button>
      <ul className={styles['sidebar__list']}>{renderList(menuItems)}</ul>
    </div>
  );
};

export default Sidebar;
