import { Box } from '@mui/material'
import React from 'react'
import Layout from './components/Layout/Layout'
// import { useLoader } from './LoaderContext'

import './App.css'
// import Loader from './components/Loader'

const App = () => {
  // const { isLoading } = useLoader();
  return (
    <Box>
      {/* {isLoading && <Loader/>} */}
      <Layout/>
    </Box>
  )
}

export default App
