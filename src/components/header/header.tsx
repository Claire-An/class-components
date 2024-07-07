import { Component } from 'react';
import InputSearch from '../inputSearch/inputSearch';
import styles from './header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <InputSearch />
          <button className={styles.buttonSearch}>Найти</button>
        </div>
      </header>
    );
  }
}

export default Header;
