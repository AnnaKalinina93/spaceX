import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/main/main.jsx'
import NotFoundScreen from '../../pages/no-found-screen/no-found-screen.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  )
}


export default App