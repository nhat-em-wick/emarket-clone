import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'
import { useLayoutEffect } from 'react'

const cx = classNames.bind(styles)
const Pagination = ({ pagination, onPageChange }) => {
  const { page, limit, total } = pagination
  const totalPages = Math.ceil(total / limit)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const [renderItem, setRenderItem] = useState(pageNumbers)
  const [currentPage, setCurrentPage] = useState(1)

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page)
      setCurrentPage(page)
    }
  }

  useEffect(() => {
    setRenderItem(pageNumbers)
  }, [pagination])

  

  const handlePrev = () => {
    handlePageChange(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  const handleNext = () => {
    handlePageChange(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  return (
    <div className={cx('pagination')}>
      <span
        onClick={handlePrev}
        className={`${cx('pagination__item')} ${currentPage <= 1 ? cx('disable') : ''}`}
      >
        <i className='bx bx-chevron-left' ></i>
      </span>
      {
        renderItem.map((item, index) => (
          <React.Fragment key={index}>
            {
              (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) ? <span
                onClick={() => handlePageChange(item)}
                 className={`${cx('pagination__item')} ${item === currentPage ? cx('active') : ''}`}>
                {item}
              </span> : null
            }
          </React.Fragment>
        ))
      }

      <span
        onClick={handleNext}
        className={`${cx('pagination__item')} ${currentPage >= totalPages ? cx('disable') : ''}`}
      >
        <i className='bx bx-chevron-right' ></i>
      </span>
    </div>
  )
}

Pagination.propTypes = {}

export default Pagination