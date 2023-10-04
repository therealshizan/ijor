import React from 'react'
import Home from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import EditorialBoard from '../../pages/EditorialBoard'

const MainContent = ({style}) => {
  return (
    <div style={style}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="editorial-board" element={<EditorialBoard/>} />
      </Routes>
    </div>
  )
}

export default MainContent
