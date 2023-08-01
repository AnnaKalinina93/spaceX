import { ApiRoute, query } from '../const.js'
import {
  dataRequest,
  dataSucceeded,
  dataFailed,
  imageRequest,
  imageSucceeded,
  imageFailed,
} from './action.js'

export const fetchDataAction = () => async (dispatch, _, api) => {
  dispatch(dataRequest())
  try {
    const { data } = await api.post(ApiRoute.launches, query)
    dispatch(dataSucceeded(data.docs))
  } catch {
    dispatch(dataFailed())
  }
}

export const fetchImageAction = (id) => async (dispatch, _, api) => {
  dispatch(imageRequest())
  try {
    const { data } = await api.get(`${ApiRoute.image}${id}`)
    const image = {
        id,
        src: data.flickr_images[0],
    }
    dispatch(imageSucceeded(image))
  } catch {
    dispatch(imageFailed())
  }
}
