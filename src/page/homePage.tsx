import { Component } from 'react';
import { getData } from '../api';
import { Character } from '../api/types';
import CardList from '../components/card/CardList';
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
      value: '',
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await getData();
    if (data) this.setState(data);
  }

  render() {
    const data: Character[] = this.state.data;
    return (
      <main className={styles.wrapper}>
        <CardList cards={data} />
      </main>
    );
  }
}

export default HomePage;
