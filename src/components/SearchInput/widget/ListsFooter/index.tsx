import React from 'react';

import { connect } from 'react-redux';
import action from '../../model/actionCreate'

import styles from './index.less';

const ListsFooter = (props: any) => {

  return (
    <>
      {!!props.todos.length && (
        <>
          <div className={styles.footer}>
            <span>{` ${props.todos.filter((value: any) => !value.completed).length} items left`}</span>
            <span className={styles.footer_filter}>
              <span
                className={`${props.showType === 2 ? styles.footer_filter_focus : styles.footer_filter_noFocus}`}
                onClick={() => {
                  props.changeShowType(2);
                }}
              >
                All
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                className={`${props.showType === 0 ? styles.footer_filter_focus : styles.footer_filter_noFocus}`}
                onClick={() => {
                  props.changeShowType(0);
                }}
              >
                Active
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                className={`${props.showType === 1 ? styles.footer_filter_focus : styles.footer_filter_noFocus}`}
                onClick={() => {
                  props.changeShowType(1)
                }}
              >
                Completed
              </span>
            </span>
            <span
            className={`${ props.todos.some((value: any) => value.completed) ? styles.footer_clear_show : styles.footer_clear_hidden}`}
            onClick={() => {props.deleteCompleted()}}
            >Clear completed</span>
          </div>
          <div className={styles.decorationOne}></div>
          <div className={styles.decorationTwo}></div>
        </>
      )}
    </>
  )
}

export default connect(state => state, action)(ListsFooter)
