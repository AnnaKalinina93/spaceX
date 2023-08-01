import React from 'react'
import LoadingScreen from '../loading-screen/loading-screen.jsx'
import DataErrorScreen from '../data-error-screen/data-error-screen.jsx'
import Sort from '../../components/sort/sort.jsx'
import Data from '../../components/data/data.jsx'
import { getData, getError, getLoading } from '../../store/selectors.js';
import { useSelector } from 'react-redux';
import './main.css'


function Main() {
const dataLoading = useSelector(getLoading);
const dataError = useSelector(getError);

  return (
    <div className="root-container">
      <Sort />
      {dataLoading && <LoadingScreen />}
      {!dataLoading && dataError && <DataErrorScreen />}
      {!dataLoading && !dataError && <Data />}
      </div>

  )
}

export default Main 

