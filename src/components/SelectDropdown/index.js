import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SelectDropdown.module.scss'
import { useClickOutside } from '~/custom-hook'

const cx = classNames.bind(styles)

const SelectDropdown = ({defaultValue, options}) => {

  const [selected, setSelected] = useState(defaultValue || 'Default')
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  const handleChoose = (item) => {
    setSelected(item.name)
    setIsOpen(false)
  }
  
  useClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div className={cx('select-dropdown')}>
      <div onClick={() => setIsOpen( !isOpen )} className={`${cx('select-dropdown')} ${cx('select-dropdown--selected')}`}>
        {selected}
        <i className='bx bxs-down-arrow'></i>
      </div>
      <div ref={dropdownRef} className={`${cx('select-dropdown__opts')} ${ isOpen ? cx('open') : ''}`}>
        {
          options.map((item, index) => (
            <div key={index} onClick={() => handleChoose(item)} className={cx('select-dropdown__opt')}>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

SelectDropdown.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.array
}

export default SelectDropdown