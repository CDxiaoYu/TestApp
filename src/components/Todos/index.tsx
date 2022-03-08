import React from 'react';

import SearchInput from '../SearchInput';
import TodosFooter from '../TodosFooter';

import styles from './index.less';

import { Provider } from 'react-redux';
import { store } from './model/store';

const Search = () => {
  return (
    <Provider store={store}>
      <div className={styles.box} >
        <div className={styles.title}>todos</div>
        <SearchInput />
        <TodosFooter />
      </div>
    </Provider>
  )
}

export default Search;
