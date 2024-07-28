import { Character, Info } from '../../api/types';
import { getData } from '../../redux/api';

interface Props {
  value: string;
  onButtonClick: (val: { data: Character[]; info: Info }) => void;
}

const ButtonSearch = (props: Props) => {
  const { value, onButtonClick } = props;
  const { data } = getData.useGetDataApiQuery({ page: '', name: value });

  const handleButtonClick = async () => {
    if (data?.results) {
      onButtonClick({ data: data.results, info: data.info });
    } else {
      onButtonClick({ data: [], info: {} });
    }
    localStorage.setItem('textSearch', value);
  };

  return <button onClick={handleButtonClick}>Найти</button>;
};

export default ButtonSearch;
