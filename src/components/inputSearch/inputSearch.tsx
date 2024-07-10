import { Component } from 'react';
import styles from './inputSearch.module.scss';

interface State {
  value: string;
}

interface Props {
  textSearch: string;
  onHandleChange: (value: string) => void;
}

class InputSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.textSearch,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputSearch: HTMLInputElement = event.currentTarget;
    this.setState(
      () => ({ value: inputSearch.value }),
      () => this.props.onHandleChange(inputSearch.value),
    );
  }

  render() {
    return (
      <input
        className={styles.inputSearch}
        placeholder="Поиск"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

export default InputSearch;
