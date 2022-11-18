import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.scss';

interface Props {
  title: string;
  href: string;
  icon: FC;
}

const SidebarItem: FC<Props> = ({ title, href, icon }) => {
  return (
    <li className={styles['sidebarItem']}>
      <Link href={`/${href ? href : title}`}>
        <a className={styles['sidebarItem__link']} href={href}>
          <>
            {icon}
            <span className={styles['sidebarItem__linkText']}>{title}</span>
          </>
        </a>
      </Link>
    </li>
  );
};
export default SidebarItem;
