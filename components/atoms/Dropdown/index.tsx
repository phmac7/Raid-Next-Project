import React from 'react';
import styles from './dropdown.module.scss';
import { DropdownType } from '@/models/components';

const Dropdown: React.FC<DropdownType> = ({ id, name, options, onChange }) => {
  return (
    <select className={styles.dropdown} name={name} onChange={onChange}>
      <option disabled value="">
        Select a option...
      </option>
      {options.map((opt) => (
        <option
          key={opt.value}
          className={styles['dropdown__option']}
          value={opt.value}
        >
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
