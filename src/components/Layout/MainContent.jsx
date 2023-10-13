import React from 'react'
import Home from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import EditorialBoard from '../../pages/EditorialBoard/EditorialBoard'
import Subscription from '../../pages/Subscription'
import Guidelines from '../../pages/Guidelines/Guidelines'
import GeneralInformation from '../../pages/GeneralInformation/GeneralInformation'
import CallForPapers from '../../pages/CallForPapers'

const MainContent = ({style}) => {
  return (
    <div style={style}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="editorial-board" element={<EditorialBoard/>} />
        <Route path="subscription" element={<Subscription/>} />
        <Route path="guidelines" element={<Guidelines/>} />
        <Route path="general-information" element={<GeneralInformation/>} />
        <Route path="call-for-papers" element={<CallForPapers/>} />
      </Routes>
    </div>
  )
}

export default MainContent
