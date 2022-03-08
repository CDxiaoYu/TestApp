import React, { KeyboardEvent, useMemo, useState } from 'react';
import ShowItem from '../ShowItem';
import { RootState } from '../Todos/model/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, completedTodo, deletedTodo, deletedCompletedTodo, clickAllCompleted } from '../Todos/model/todos'

import styles from './index.less'

const index = () => {

  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()


  // 全部已完成按钮
  const [allState, setAllState] = useState(
    todos?.todos?.length === 0 ? 0 : todos?.todos?.some((value: any) => {
      return !value?.completed;
    }) ? 1 : 2
  );

  // 展示type
  const [showType, setShowType] = useState(0)

  // 删除任务
  const deleteItem = (num: string) => {
    dispatch(deletedTodo(num));
    // setList(setLocalStroage('delete', num))
    if (todos?.todos.length === 0) {
      setAllState(0);
    }
  };

  // 改变展示type
  const changeShowType = (num: number) => {
    setShowType(num);
    if (num === 0) {

    }
  }

  // 删除已完成任务
  const deleteCompleted = () => {

    dispatch(deletedCompletedTodo())

    setAllState(() => {
      if (todos?.todos?.length === 0) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  // 点击全选按钮

  const content = useMemo(() => {
    return (
      <div>
        {todos?.todos?.filter((value: any) => {
          if (showType === 2) {
            return value?.completed;
          } else if (showType === 1) {
            return !value?.completed
          } else {
            return true;
          }
        }).map((value: any, num: string) => {
          return (
            <ShowItem
              value={value}
              deleteItem={
                () => { deleteItem(num) }
              }
              completedItem={
                () => {
                  dispatch(completedTodo(num))
                }
              }
            />
          )
        })
        }
      </div>
    )
  }, [todos, showType])

  return (
    <div className={styles.box}>
      <div className={styles.inputBox}>
        <div
          className={`${styles.inputBox_btn} ${todos.allCompleted === '0' ? styles.inputBox_btn_none : todos.allCompleted === '1' ? styles.inputBox_btn : styles.inputBox_btn_all}`}
          onClick={() => { dispatch(clickAllCompleted()) }}
        >
          ❯
        </div>
        <input
          className={styles.inputBox_input}
          placeholder="What needs to be done?"
          onKeyDown={(e: any) => {
            if (e.code === 'Enter') {
              if (e.target.value !== '') {
                dispatch(add(e.target.value))
                setAllState(1);
                e.target.value = '';
              }
            }
          }}
        />
      </div>

      <div className={styles.itemBox}>
        {content}
        {todos?.todos?.length !== 0 &&
          <>
            <div className={styles.itemBox_footer}>
              <span>{`${todos?.todos?.length ?? 0} items left`}</span>
              <span className={styles.itemBox_footer_filter}>
                <span
                  className={`${showType === 0 ? styles.itemBox_footer_filter_focus : styles.itemBox_footer_filter_noFocus}`}
                  onClick={() => {
                    changeShowType(0);
                  }}
                >
                  All
                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  className={`${showType === 1 ? styles.itemBox_footer_filter_focus : styles.itemBox_footer_filter_noFocus}`}
                  onClick={() => {
                    changeShowType(1);
                  }}
                >
                  Active
                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  className={`${showType === 2 ? styles.itemBox_footer_filter_focus : styles.itemBox_footer_filter_noFocus}`}
                  onClick={() => {
                    changeShowType(2);
                  }}
                >
                  Completed
                </span>
              </span>
              <span
                style={{
                  visibility: todos?.todos?.some((value: any) => {
                    return value.completed
                  }) ? 'visible' : 'hidden'
                }}
                onClick={deleteCompleted}
              >Clear completed</span>
            </div>
            <div className={styles.itemBox_decorationOne}></div>
            <div className={styles.itemBox_decorationTwo}></div>
          </>
        }

      </div>
    </div>
  )
}

export default index;
