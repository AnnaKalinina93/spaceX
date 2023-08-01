import {
  activeSortChange,
  dataFailed,
  dataRequest,
  dataSucceeded,
  imageFailed,
  imageRequest,
  imageSucceeded,
} from './action'
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  dataLoading: false,
  dataError: false,
  activeSort: 'new',
  imageLoading: false,
  image: {},
  imageError: false,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(dataRequest, (state) => {
      state.dataLoading = true
    })

    .addCase(dataSucceeded, (state, action) => {
      state.dataLoading = false
      state.data = action.payload
    })

    .addCase(dataFailed, (state) => {
      state.dataError = true
      state.dataLoading = false
    })

    .addCase(activeSortChange, (state, action) => {
      state.activeSort = action.payload
    })

    .addCase(imageRequest, (state) => {
      state.imageLoading = true
    })

    .addCase(imageSucceeded, (state, action) => {
      state.imageLoading = false
      state.image = action.payload
    })

    .addCase(imageFailed, (state) => {
      state.imageError = true
      state.imageLoading = false
    })
})

export { reducer }
