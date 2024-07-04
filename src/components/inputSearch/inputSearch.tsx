import { Component } from 'react';
import styles from './inputSearch.module.scss';

interface State {
  value: string;
}

interface Props {
  value?: string;
}

class InputSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const valueInput = this.props.value as string;
    return (
      <input
        className={styles.inputSearch}
        placeholder="Поиск"
        value={valueInput}
      />
    );
  }
}

export default InputSearch;
