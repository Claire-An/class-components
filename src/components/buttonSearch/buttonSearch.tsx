import { getData } from '../../api';
import { Character, Info } from '../../api/types';

interface Props {
  value: string;
  onButtonClick: (val: { data: Character[]; info: Info }) => void;
}

const ButtonSearch = (props: Props) => {
  const { value, onButtonClick } = props;

  const handleButtonClick = async () => {
    localStorage.setItem('textSearch', value);
    const data = await getData(value);
    if (data) {
      onButtonClick(data);
    } else {
      onButtonClick({ data: [], info: {} });
    }
  };

  return <button onClick={handleButtonClick}>Найти</button>;
};

export default ButtonSearch;
