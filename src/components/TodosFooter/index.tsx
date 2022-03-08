import React from 'react';

import { RootState } from '../Todos/model/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Todos/model/index'
 
import styles from './index.less'

const index = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div className={styles.box}>
      <p>Double-click to edit a todo</p>
      <h1>{count}</h1>
      <button onClick={() => { dispatch(incrementByAmount(6))}}> + </button>
      <p>Created by <a href="http://github.com/petehunt/" className={styles.box_link}>petehunt</a> </p>
      <p>Part of <a href="https://todomvc.com/" className={styles.box_link}>TodoMVC</a></p>
    </div>
  )
}

export default index;
