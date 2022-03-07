import React from 'react';

import styles from './index.less'

const index = () => {
  return (
    <div className={styles.box}>
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://github.com/petehunt/" className={styles.box_link}>petehunt</a> </p>
      <p>Part of <a href="https://todomvc.com/" className={styles.box_link}>TodoMVC</a></p>
    </div>
  )
}

export default index;
