import React from 'react'
import PropTypes from 'prop-types'
import styles from './Services.module.scss'
import classNames from 'classnames/bind'
import { questionAndAnswer } from './const'
import purify from "dompurify";


const cx = classNames.bind(styles)

const Services = props => {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <h1 className={cx('heading')}>
          Services
        </h1>
        <div className={cx("content")}>
          {
            questionAndAnswer.map((item, index) => (
              <div className={cx('question-item')}>
                <div className={cx('question-item__heading')}>
                  <span>{index+1}</span>
                  <h3>{item.question}</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: purify.sanitize(item.answer) }} className={cx('question-item__content')}>
                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

Services.propTypes = {}

export default Services