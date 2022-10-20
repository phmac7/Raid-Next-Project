import { FC } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles['sidebar__list']}>
        <li className={styles['sidebar__listItem']}>
          <a className={styles['sidebar__listItemLink']} href="">
            Feed
          </a>
        </li>
        <li className={styles['sidebar__listItem']}>
          <a className={styles['sidebar__listItemLink']} href="">
            Communities
          </a>
        </li>
        <li className={styles['sidebar__listItem']}>
          <a className={styles['sidebar__listItemLink']} href="">
            Matches
          </a>
        </li>
        <li className={styles['sidebar__listItem']}>
          <a className={styles['sidebar__listItemLink']} href="">
            Notifications
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
