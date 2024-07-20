import { ChangeEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import styles from './inputSearch.module.scss';

interface Props {
  textSearch: string;
  onHandleChange: (value: string) => void;
}

const InputSearch = (props: Props) => {
  const { textSearch, onHandleChange } = props;
  const [value, setValue] = useState(textSearch);
  const { theme } = useContext(ThemeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputSearch: HTMLInputElement = event.currentTarget;

    setValue(inputSearch.value);
    if (onHandleChange) onHandleChange(inputSearch.value);
  };

  return (
    <input
      className={[
        styles.inputSearch,
        theme === 'dark' ? styles.inputsearchDark : '',
      ].join(' ')}
      placeholder="Поиск"
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputSearch;
