import React, { KeyboardEvent, useMemo, useState } from 'react';
import ShowItem from '../ShowItem';


import styles from './index.less'

const index = () => {

  // 任务list
  const [lists, setList] = useState(
    JSON.parse(localStorage.getItem('react-todos') ?? '[]')
  );

  // 全部已完成按钮
  const [allState, setAllState] = useState(
    lists?.length === 0 ? 0 : lists?.some((value: any) => {
      return !value?.completed;
    }) ? 1 : 2
  );

  // 展示type
  const [showType, setShowType] = useState(0)

  // 输入值
  const [todo, setTodo] = useState('');


  // 增删任务
  const setLocalStroage = (type: string, value: any) => {
    if (type === 'delete') {
      lists?.splice(value, 1)
      localStorage.setItem('react-todos', JSON.stringify(lists));
      return JSON.parse(localStorage.getItem('react-todos') ?? '[]')
    } else if (type === 'add') {
      localStorage.setItem(
        'react-todos',
        JSON.stringify([...lists, {
          completed: false,
          title: value
        }
        ]));
      return JSON.parse(localStorage.getItem('react-todos') ?? '[]')
    }
  }

  // 改变任务状态
  const changeComplate = (num: number) => {
    lists[num].completed = !lists[num]?.completed;
    localStorage.setItem('react-todos', JSON.stringify(lists));
    return JSON.parse(localStorage.getItem('react-todos') ?? '[]')
  }

  // 删除任务
  const deleteItem = (num: number) => {
    setList(setLocalStroage('delete', num))
    if (lists.length === 0) {
      setAllState(0);
    }
  };

  // 改变任务完成状态
  const completedItem = (num: number) => {
    setList(changeComplate(num));
    if (lists.some((value: any) => {
      return value.completed === false;
    })) {
      setAllState(1);
    } else {
      setAllState(2);
    }
  }

  // 改变展示type
  const changeShowType = (num: number) => {
    setShowType(num);
    if (num === 0) {

    }
  }

  // 删除已完成任务
  const deleteCompleted = () => {

    const a = lists.filter((value: any) => {
      return !value?.completed
    })

    localStorage.setItem('react-todos',
      JSON.stringify(a)
    )

    setList(a);

    setAllState(() => {
      if(a.length === 0) {
        return 0;
      }else {
        return 1;
      }
    });
  }

  // 点击全选按钮
  const clickAllCompleted = () => {
    if (allState === 1) {
      lists?.forEach((value: any, num: number) => {
        if (!value?.completed) {
          changeComplate(num);
        }
      })
      setAllState(2)
    } else {
      lists.forEach((value: any, num: number) => {
        if (value?.completed) {
          changeComplate(num);
        }
      })
      setAllState(1)
    }
    setList(JSON.parse(localStorage.getItem('react-todos') ?? '[]'))

  }

  const content = useMemo(() => {
    return (
      <div>
        { lists?.filter((value: any) => {
          if (showType === 2) {
            return value?.completed;
          } else if (showType === 1) {
            return !value?.completed
          } else {
            return true;
          }
        }).map((value: any, num: number) => {
          return (
            <ShowItem
              value={value}
              deleteItem={
                () => { deleteItem(num) }
              }
              completedItem={
                () => {
                  completedItem(num);
                }
              }
            />
          )
        })
        }
      </div>
    )
  }, [lists, showType])

  return (
    <div className={styles.box}>
      <div className={styles.inputBox}>
        <div
          className={`${styles.inputBox_btn} ${allState === 0 ? styles.inputBox_btn_none : allState === 1 ? styles.inputBox_btn : styles.inputBox_btn_all}`}
          onClick={clickAllCompleted}
        >
          ❯
        </div>
        <input
          className={styles.inputBox_input}
          placeholder="What needs to be done?"
          value={todo}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === 'Enter') {
              if (todo !== "") {
                setList(setLocalStroage('add', todo));
                setTodo('');
                setAllState(1);
              }
            } else {
              setTodo(todo + e.key);
            }
          }}
        />
      </div>

      <div className={styles.itemBox}>
        {content}
        {lists?.length !== 0 &&
          <>
            <div className={styles.itemBox_footer}>
              <span>{`${lists?.length ?? 0} items left`}</span>
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
                  visibility: lists?.some((value: any) => {
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
