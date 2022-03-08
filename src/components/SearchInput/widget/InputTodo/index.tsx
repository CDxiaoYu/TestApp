import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import action from '../../model/actionCreate';

const InputTodo = (props: any) => {

  window.onbeforeunload = () => {
    localStorage.setItem('react-todo', JSON.stringify(props.todos))
  }

  return (
    <div className={styles.inputBox}>
      {props.todos.length !== 0 && (
        <div
          className={`${styles.inputBox_btn} ${props.completedAll && styles.inputBox_btn_all}`}
          onClick={() => {
            props.clickAll();
          }}
        >
          ❯
        </div>
      )}
      <input
        className={styles.inputBox_input}
        placeholder="What needs to be done?"
        onKeyDown={(e: any) => {
          if (e.code === 'Enter' && e.target.value) {
            props.add(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  )
}

export default connect(state => state, action)(InputTodo)
