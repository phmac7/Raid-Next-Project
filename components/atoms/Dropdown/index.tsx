import React from 'react';
import styles from './dropdown.module.scss';
import { DropdownType } from '@/models/components';

const Dropdown: React.FC<DropdownType> = ({
  name,
  options,
  onChange,
  value,
}) => {
  return (
    <select
      className={styles.dropdown}
      value={value}
      name={name}
      onChange={onChange}
    >
      <option disabled value="">
        Select an option...
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
