import { Component } from 'react';
import { getData } from '../api';
import { Character } from '../api/types';
import ButtonSearch from '../components/button/buttonSearch';
import CardList from '../components/card/CardList';
import InputSearch from '../components/inputSearch/inputSearch';
import styles from './homePage.module.scss';

export interface HomeProps {
  value?: string;
}

export interface HomeState {
  data: Character[];
  value: string;
}

class HomePage extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      data: [],
      value: localStorage.getItem('textSearch') || '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(val: string) {
    this.setState({ value: val });
  }

  async componentDidMount(): Promise<void> {
    const data = await getData(this.state.value);
    console.log(data);
    if (data) {
      this.setState(data);
    } else {
      this.setState({ data: [] });
    }
  }

  handleButtonClick = async (val: { data: Character[] }): Promise<void> => {
    console.log('handleButtonClick ' + val.data);
    this.setState({ data: val.data });
  };

  render() {
    const data: Character[] = this.state.data;
    return (
      <main className={styles.wrapper}>
        <div className={styles.searchBlock}>
          <InputSearch
            onHandleChange={this.handleInputChange}
            textSearch={this.state.value}
          />
          <ButtonSearch
            onButtonClick={this.handleButtonClick}
            value={this.state.value}
          />
        </div>
        <CardList cards={data} />
      </main>
    );
  }
}

export default HomePage;
