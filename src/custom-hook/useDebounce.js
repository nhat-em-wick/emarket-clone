import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => clearTimeout(timerId)
  }, [value])
  
  return debounceValue
}



export default useDebounce