import './success-start.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImage } from '../../store/selectors.js'
import { fetchImageAction } from '../../store/api-action.js'

function SuccessStart({ data }) {
  const image = useSelector(getImage)
  const [src, setSrc] = useState('')
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchImageAction(data.rocket))
  }, [])

  useEffect(() => {
    if (loaded) return
    if (image.id === data.rocket) {
      setSrc(image.src)
      setLoaded(true)
    }
  }, [image])

  const date = new Date(data.date_utc)

  return (
    <div className="wrapper">
      <h1 className="title">{data.name}</h1>
      <span className="date">{date.toString().slice(0, -36)}</span>
      <p className="details">{data.details}</p>
      <img className="image" src={src} width="300" />
    </div>
  )
}

export default SuccessStart
