import React, { useMemo } from 'react';

import styles from './index.less'

const index = (props: any) => {
  const { testList } = props;
  const content = useMemo(() => {
    return (
      <div className={styles.box}>
        {testList?.map((list: any) => {
          return (
            <div>
              <div className={styles.title}>{list.name}</div>
              <div>
                {list?.list?.map((list: any) => {
                  return (
                    <div className={styles.testItem}>
                      {list?.name}<br></br>
                      <span>
                        {list.content?.map((value: any, num: number, arr: any) => {
                          return (
                            <span>
                              <a href={value.link} style={{ color: '#b83f45' }}>
                                {value?.name}
                              </a>
                              {num < arr.length - 1 && (
                                <span>,</span>
                              )}
                            </span>
                          )
                        })}
                      </span>
                    </div>
                  )
                })
                }
              </div>
            </div>

          )
        })}
      </div>
    )

  }, [testList])

  return (
    <div>
      {content}
      <hr style={{ border: '0', borderTop: "1px dashed #c5c5c5",borderBottom: "1px dashed #f7f7f7", height: "1px", margin: "20px 0"}}></hr>
    </div>
  )
}

export default index;
