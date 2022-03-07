import React, { useState } from 'react';

import styles from './index.less';

const index = (props: any) => {

  const { value, deleteItem = () => {}, completedItem = () => {} } = props;

  const [hover, setHover] = useState(false);

  return (
    <div 
      className={styles.item}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={styles.item_completed}
        style={ value.completed ?  {color: 'green', borderColor: 'green'} : {}}
        onClick={() => {
          completedItem()
        }}>
          √
        </div>
      <div className={`${styles.item_title} ${ value.completed ? styles.item_title_complated : ''}`} >{value?.title} </div>
      <div 
        className={styles.item_delete}
        style={{ display: hover ? 'block': 'none' }}
        onClick={() => {deleteItem()}}
      >
        ×
      </div>
    </div>
  )
}

export default index;
