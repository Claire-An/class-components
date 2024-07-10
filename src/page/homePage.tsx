import { Component } from 'react';
import { getData } from '../api';
import { Character } from '../api/types';
import ButtonSearch from '../components/buttonSearch/buttonSearch';
import CardList from '../components/card/CardList';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import InputSearch from '../components/inputSearch/inputSearch';
import styles from './homePage.module.scss';

export interface HomeProps {
  value?: string;
}

export interface HomeState {
  data: Character[];
  value: string;
  hasError: boolean;
}

class HomePage extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      data: [],
      value: localStorage.getItem('textSearch') || '',
      hasError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonErrorClick = this.handleButtonErrorClick.bind(this);
  }

  handleInputChange(val: string) {
    this.setState({ value: val });
  }

  async componentDidMount(): Promise<void> {
    const data = await getData(this.state.value);
    if (data) {
      this.setState(data);
    } else {
      this.setState({ data: [] });
    }
  }

  handleButtonClick = async (val: { data: Character[] }): Promise<void> => {
    this.setState({ data: val.data });
  };

  handleButtonErrorClick(): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error('ErrorBoundary error');
    }
    const data: Character[] = this.state.data;
    return (
      <main className={styles.wrapper}>
        <ErrorBoundary>
          <div className={styles.searchBlock}>
            <InputSearch
              onHandleChange={this.handleInputChange}
              textSearch={this.state.value}
            />
            <ButtonSearch
              onButtonClick={this.handleButtonClick}
              value={this.state.value}
            />
            <button
              onClick={this.handleButtonErrorClick}
              className={styles.buttonError}
            >
              Ошибка
            </button>
          </div>
          <CardList cards={data} />
        </ErrorBoundary>
      </main>
    );
  }
}

export default HomePage;
