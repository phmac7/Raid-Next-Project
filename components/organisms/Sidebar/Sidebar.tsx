import { SidebarItem } from '@/components/molecules';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { HiOutlineUsers, HiOutlineClock } from 'react-icons/hi';
import { RiFileListLine } from 'react-icons/ri';
import { TbMessages } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';

const menuItems = [
  {
    id: 1,
    title: 'Feed',
    href: '',
    icon: <RiFileListLine size={25} />,
  },
  {
    id: 2,
    title: 'Communities',
    href: '',
    icon: <HiOutlineUsers size={25} />,
  },
  {
    id: 3,
    title: 'Matches',
    href: '',
    icon: <HiOutlineClock size={25} />,
  },
  {
    id: 4,
    title: 'Messages',
    href: '',
    icon: <TbMessages size={25} />,
  },
  {
    id: 5,
    title: 'Notifications',
    href: '',
    icon: <IoNotificationsOutline size={25} />,
  },
  {
    id: 6,
    title: 'Profile',
    href: 'profile',
    icon: <AiOutlineUser size={25} />,
  },
  {
    id: 7,
    title: 'Settings',
    href: '',
    icon: <BsGear size={25} />,
  },
  {
    id: 8,
    title: 'Logout',
    href: '',
    icon: <MdOutlineLogout size={25} />,
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

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles['sidebar__list']}>{renderList(menuItems)}</ul>
    </div>
  );
};

export default Sidebar;
