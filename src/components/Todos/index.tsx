import React from 'react';

import SearchInput from '../SearchInput';
import TodosFooter from '../TodosFooter';

import styles from './index.less';


const Search = () => {
  return (
    <div className={styles.box} >
      <div className={styles.title}>todos</div>
      <SearchInput />
      <TodosFooter />
    </div>
  )
}

export default Search;
