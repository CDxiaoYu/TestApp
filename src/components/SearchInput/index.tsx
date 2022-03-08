import React from 'react';
import ShowItem from './widget/ShowItem';
import InputTodo from './widget/InputTodo';
import ListsFooter from './widget/ListsFooter';

import styles from './index.less';
import store from './model/index';
import { Provider } from 'react-redux';

const index = () => {

  return (
    <Provider store={store}>
      <div className={styles.box}>
        <InputTodo />
        <div className={styles.itemBox}>
          <ShowItem />
          <ListsFooter />
        </div>
      </div>
    </Provider>
  )
}

export default index;
