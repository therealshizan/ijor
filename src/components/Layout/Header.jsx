import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import MenuItems from '../Header/MenuItems'

import Logo1 from '../../assets/img/rizvi-educational-society-logo-2.jpeg'
import Logo2 from '../../assets/img/rizvi-educational-society-logo.png'

const Header = () => {
  return (
    <Box sx={{background: theme.palette.primary.main}}>
    <Container className='bg-white' disableGutters>
    <Stack  className="w-full items-center" p={1} py={3} direction={'row'} justifyContent={'space-between'} width={'100%'}>
      <Stack className='w-1/3'>
        <div id="logo">
          <img style={{height: '100px', width: '70%', objectFit: 'contain'}} src={Logo1} alt="Rizvi College Of Arts, Science & Commerce"/>
        </div>
      </Stack>
      <Stack className="w-1/3" alignItems={'center'}>
        <Typography className="text-secondary border-b" pb={0.5} variant={'body1'} align='center' noWrap={false}>Rivi Education Society's <br/> Rizvi College of Arts, Science & Commerce</Typography>
        <Typography className="text-primary" py={1} variant={'h5'} align='center' noWrap={false}>International Journal Of Research</Typography>
        <Typography className="text-secondary border-t" pt={0.5}>ISSN 2231- 6124 (UGC Approved Sr.No. 63072 (2018))</Typography>
      </Stack>
      <Stack className="w-1/3 items-end">
        <img style={{height: '100px', width: '100px', objectFit: 'contain'}} src={Logo2} alt="Rizvi Education Society"/>
      </Stack>
    </Stack>
    <Stack>
      <MenuItems/>
    </Stack>
    </Container>
    </Box>
  )
}

export default Header
