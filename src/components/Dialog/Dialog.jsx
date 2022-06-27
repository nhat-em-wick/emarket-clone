import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Dialog.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeDialog } from '~/redux/DialogSlice'

const cx = classNames.bind(styles)
const Dialog = () => {
  const dispatch= useDispatch()
  const dialogStore = useSelector(state => state.dialogStore)

  return (
    <div className={`${cx('dialog')} ${dialogStore.active ? cx('active') : ''}`}>
      <div className={cx('dialog__content')}>
        <div className={cx('dialog__header')}>
          <span className={cx('dialog__header-icon')}>
            <i className='bx bx-error'></i>
          </span>
          <h3 className={cx('dialog__header-text')}>
            {dialogStore?.text?.title}
          </h3>
        </div>
        <div className={cx('dialog__body')}>
        {dialogStore?.text?.content}
        </div>
        <div className={cx('dialog__footer')}>
          <button className={`${cx('dialog__footer-btn')} ${cx('confirm')}`}>
          {dialogStore?.text?.textConfirm}
          </button>
          <button onClick={() => dispatch(removeDialog())} className={`${cx('dialog__footer-btn')} ${cx('cancel')}`}>
          {dialogStore?.text?.textCancel}
          </button>
        </div>
      </div>
    </div>
  )
}

Dialog.propTypes = {}

export default Dialog