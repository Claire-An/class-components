import { Component } from 'react';
import { getData } from '../../api';
import { Character } from '../../api/types';
import styles from './buttonSearch.module.scss';

interface State {
  value: string;
}

interface Props {
  value: string;
  onButtonClick: (val: { data: Character[] }) => void;
}

class ButtonSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    localStorage.setItem('textSearch', this.props.value);
    const data = await getData(this.props.value);
    if (data) {
      this.props.onButtonClick(data);
    } else {
      this.props.onButtonClick({ data: [] });
    }
  }

  render() {
    return (
      <button className={styles.buttonSearch} onClick={this.handleButtonClick}>
        Найти
      </button>
    );
  }
}

export default ButtonSearch;
