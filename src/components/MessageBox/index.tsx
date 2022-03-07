import React from 'react';

import styles from './index.less'

const index = (props: any) => {

  const { 
    content: {
      message = 'React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.',
      name = 'React',
    } 
  } = props;

  return (
    <div>
      <div className={styles.messageBox}>
        <div className={styles.marks}>
          {message}
          <div className={styles.triangle}></div>
          <span className={styles.name}>{name}</span>
        </div>
      </div>
      <hr style={{ border: '0', borderTop: "1px dashed #c5c5c5", borderBottom: "1px dashed #f7f7f7", height: "1px", margin: "20px 0" }}></hr>
    </div>
  )
}

export default index;
