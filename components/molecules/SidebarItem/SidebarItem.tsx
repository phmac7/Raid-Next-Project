import Link from "next/link";
import { FC } from "react";
import styles from "./Sidebar.module.scss";

interface Props {
  title: string;
  href: string;
  icon: FC;
  isDisabled: boolean;
}

const SidebarItem: FC<Props> = ({ title, href, icon, isDisabled }) => {
  return (
    <li className={styles["sidebarItem disabled"]}>
      <Link href={`${href ? href : title}`}>
        <a
          className={
            isDisabled
              ? `${styles.sidebarItem__link} ${styles["disabled-link"]}`
              : styles.sidebarItem__link
          }
          href={href}
        >
          <>
            {icon}
            <span className={styles["sidebarItem__linkText"]}>{title}</span>
          </>
        </a>
      </Link>
    </li>
  );
};
export default SidebarItem;
