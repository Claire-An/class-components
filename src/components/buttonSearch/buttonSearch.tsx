import { Character, Info } from '../../api/types';
import { getData } from '../../redux/api';

interface Props {
  value: string;
  onButtonClick: (val: { data: Character[]; info: Info }) => void;
}

const ButtonSearch = (props: Props) => {
  const { value, onButtonClick } = props;
  const { data } = getData.useGetDataApiQuery({ page: 1, name: value });

  const handleButtonClick = async () => {
    if (data?.results && data.results.length > 0) {
      onButtonClick({ data: data.results, info: data.info });
    } else {
      onButtonClick({ data: [], info: {} });
    }
  };

  return <button onClick={handleButtonClick}>Найти</button>;
};

export default ButtonSearch;
