import './data.css'
import React from 'react'
import SuccessStart from '../success-start/success-start.jsx'
import { useSelector } from 'react-redux'
import { getSortData } from '../../store/selectors'

function Data() {
    const data = useSelector(getSortData)
    return (
      <div className="data-wrapper">
        {data.map((item) => (
          <SuccessStart data={item} key={item.id} />
        ))}
      </div>
    )
}

export default Data
