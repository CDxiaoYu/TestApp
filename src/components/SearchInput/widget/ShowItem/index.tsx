import React from 'react';

import styles from './index.less';
import { connect } from 'react-redux';
import action from '../../model/actionCreate';

const Item = (props: any) => {

  const { value, deleteItem = () => { }, completedItem = () => { }, editTodo = () => { }, showType } = props;

  return (
    <>
      {(showType === 2 || value.completed === !!showType) && (
        <div
          className={styles.item}
        >
          <div
            className={`${styles.item_completed} ${value.completed && styles.item_completed_true}`}
            onClick={() => {
              completedItem()
            }}>
            √
          </div>
          <div
            onDoubleClick={(e: any) => {
              e.target.contentEditable = 'true';
            }}
            onBlur={(e: any) => {
              e.target.contentEditable = 'false';
              editTodo(e.target.innerText)
            }}
            onKeyDown={(e: any) => {
              if (e.code === 'Enter' && e.target.innerText) {
                editTodo(e.target.innerText.slice(0, -4))
                e.target.contentEditable = 'false';
              }
            }}
            className={`${styles.item_title} ${value.completed ? styles.item_title_complated : ''}`} >{value?.title} </div>
          <div
            className={styles.item_delete}
            onClick={() => { deleteItem() }}
          >
            ×
          </div>
        </div>)}
    </>
  )
}

const index = (props: any) => {

  const editTodo = (num: number) => {

    return (title: string) => {
      props.editTodo(title, num);
    }
  }


  return (
    <>
      {
        props.todos.map((value: any, num: number) => {
          return (
            <Item
              value={value}
              deleteItem={() => { props.deleteTodo(num) }}
              completedItem={() => { props.completedTodo(num) }}
              editTodo={editTodo(num)}
              showType={props.showType}
            />
          )
        }).reverse()
      }
    </>
  )
}

export default connect(state => state, action)(index);
