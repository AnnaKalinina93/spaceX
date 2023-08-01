import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  dataRequest: 'dataRequest',
  dataSucceeded: 'dataSucceeded',
  dataFailed: 'dataFailed',
  sortChange: 'activeSort',
  imageRequest: 'imageRequest',
  imageSucceeded: 'imageSucceeded',
  imageFailed: 'imageFailed',
}


export const dataRequest = createAction(ActionType.dataRequest)

export const dataSucceeded = createAction(ActionType.dataSucceeded, (data) => ({
  payload: data,
}))

export const dataFailed = createAction(ActionType.dataFailed)

export const activeSortChange = createAction(
  ActionType.sortChange,
  (activeSort) => ({
    payload: activeSort,
  }),
)

export const imageRequest = createAction(ActionType.imageRequest)

export const imageSucceeded = createAction(ActionType.imageSucceeded, (image) => ({
  payload: image,
}))

export const imageFailed = createAction(ActionType.imageFailed)
