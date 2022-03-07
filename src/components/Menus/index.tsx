import React, { useState } from 'react';

import TestList from '../TestList';
import MessageBox from '../MessageBox';
import ListShow from '../ListShow'

import styles from './index.less';

const index = () => {

  const [hidden, setHidden] = useState( document.body.clientWidth < 900 )

  window.onresize = function() {
    if(hidden !== document.body.clientWidth < 900) {
      setHidden(document.body.clientWidth < 900)
    }
  }

  const testList = [
    {
      name: 'React',
      list: [
        {
          name: 'Example',
          content: [
            {
              name: 'Source',
              link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react',
            }    
          ]
        },
        {
          name: 'React + Backbone.js',
          content: [
            {
              name: 'Demo',
              link: 'https://todomvc.com/examples/react-backbone/',
            },
            {
              name: 'Source',
              link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone',
            },
          ]
        },{
          name: 'Example',
          content: [
            {
              name: 'Source',
              link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react',
            }    
          ]
        },{
          name: 'Example',
          content: [
            {
              name: 'Source',
              link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react',
            }    
          ]
        },{
          name: 'Example',
          content: [
            {
              name: 'Source',
              link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react',
            }    
          ]
        },
      ]
    }
  ]

  const messageContent = {
    message: 'React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.',
    name: 'React'
  }

  const listShowContent = [
    {
      title: 'Official Resources',
      content: [
        {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        },
        {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        },
        {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        }
      ]
    },
    {
      title: 'Community',
      content: [
        {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        },
        {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        }, {
          name: 'Tutorial',
          link: 'https://reactjs.org/tutorial/tutorial.html',
        }
      ]
    }
  ]

  return (
    <div className={`${styles.box} ${hidden ? styles.fadeOut : styles.fadeIn}`} >
      <TestList testList={testList} />
      <MessageBox content={messageContent} /> 
      <ListShow lists={listShowContent} />
      <div className={styles.footer} >
        If you have other helpful links to share, or find any of the links above no longer work, please
        <a href='https://github.com/tastejs/todomvc/issues' style={{ color: '#b83f45' }}>let us know.</a></div>
    </div>
  )
}

export default index;
