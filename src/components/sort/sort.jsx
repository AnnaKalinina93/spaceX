import './sort.css'
import React from 'react'
import { useDispatch } from 'react-redux';
import { activeSortChange } from '../../store/action';

function Sort() {
  const dispatch = useDispatch()

  const handleChangeSort = (type) => {
    dispatch(activeSortChange(type))
  }

  return (
    <div className="sort__wrapper">
      <p className="sort-date-text">Sort date</p>
      <button className="button-new" onClick={() => handleChangeSort('new')}>
        NEW
      </button>
      <button className="button-old" onClick={() => handleChangeSort('old')}>
        OLD
      </button>
    </div>
  )
}

export default Sort
