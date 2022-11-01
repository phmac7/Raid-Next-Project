import React from 'react';
import styles from './Dropdown.module.scss';
import { DropdownType } from '@/models/components';

const Dropdown: React.FC<DropdownType> = ({ id, name, options }) => {
  return (
    <select className={styles.dropdown} name={name}>
      {options.map((opt) => (
        <option className={styles['dropdown__option']} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
