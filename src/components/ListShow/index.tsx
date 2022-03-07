import React, { useMemo } from 'react';

import styles from './index.less';

const index = (props: any) => {

  const { lists } = props;

  const content = useMemo(() => {
    return (
      <div>{
        lists?.map((list: any) => {
          return(
          <div>
            <h4 className={styles.title}>{list?.title ?? 'title'}</h4>
            <ul style={{margin: "0 0 30px -10px"}}>
              {list?.content?.map((value: any) => {
                return (
                  <li>
                    <a
                      href={value.link}
                      className={styles.name}
                    >
                      {value?.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )})
      }</div>
    )
  }, [lists]);

  return (
    <div>
      {content}
      <hr style={{ border: '0', borderTop: "1px dashed #c5c5c5", borderBottom: "1px dashed #f7f7f7", height: "1px", margin: "20px 0" }}></hr>
    </div>
  )
}

export default index;
