import { ChangeEvent, useState } from 'react';
import styles from './inputSearch.module.scss';

interface Props {
  textSearch: string;
  onHandleChange: (value: string) => void;
}

const InputSearch = (props: Props) => {
  const { textSearch, onHandleChange } = props;
  const [value, setValue] = useState(textSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputSearch: HTMLInputElement = event.currentTarget;

    setValue(inputSearch.value);
    if (onHandleChange) onHandleChange(inputSearch.value);
  };

  return (
    <input
      className={styles.inputSearch}
      placeholder="Поиск"
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputSearch;
