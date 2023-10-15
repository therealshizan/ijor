import { Box, Typography } from '@mui/material'
import React from 'react'
import BoardMembers from './BoardMembers'
import EditorialBoardTable from './EditorialBoardTable'

const EditorialBoard = () => {
  return (
    <Box mx={2} my={2}>
      <Typography align="center" variant='h6' mb={2}>Editorial Board</Typography>

      <BoardMembers/>

      <EditorialBoardTable/>
    </Box>
  )
}

export default EditorialBoard
