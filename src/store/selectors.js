import { createSelector } from 'reselect'
import { getTimeUtc } from '../const.js'

export const getData = (state) => state.data
export const getLoading = (state) => state.dataLoading
export const getError = (state) => state.dataError
export const getActiveSort = (state) => state.activeSort
export const getImage = (state) => state.image
export const getImageLoading = (state) => state.imageLoading
export const getImageError = (state) => state.imageError

export const getSortData = createSelector(
  [getData, getActiveSort],
  (data, activeSort) => {
    if ((activeSort === 'new')) {
      const selectedData = [...data].sort(
        (a, b) => getTimeUtc(b) - getTimeUtc(a),
      )
      return selectedData
    }
    if ((activeSort === 'old')) {
      const selectedData = [...data].sort(
        (a, b) => getTimeUtc(a) - getTimeUtc(b),
      )
      return selectedData
    }
  },
)
