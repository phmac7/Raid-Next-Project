import { FC, useRef } from 'react';
import styles from './input.module.scss';

interface Input {
  type?: string;
  placeholder?: string;
  title?: string;
  variation?: '--sm' | '--md' | '--lg';
  icon?: JSX.Element;
  id?: string;
  name?: string;
  required?: boolean;
  onChange?: () => void;
}

const Input: FC<Input> = ({
  type,
  icon,
  title,
  placeholder,
  id,
  name,
  variation,
  required,
  onChange,
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={styles[`container${variation}`]} onClick={handleClick}>
      {icon}
      <input
        ref={inputRef}
        title={title}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={styles[`container${variation}__input`]}
      />
    </div>
  );
};
export default Input;
