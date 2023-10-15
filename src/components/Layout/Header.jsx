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
    <Stack  className="w-full items-center" px={3} py={1.5} direction={'row'} justifyContent={'space-between'} width={'100%'}>
      <Stack className='w-1/3'>
        <div id="logo">
          <img style={{height: '100px', width: '70%', objectFit: 'contain', marginLeft: 6}} src={Logo1} alt="Rizvi College Of Arts, Science & Commerce"/>
        </div>
      </Stack>
      <Stack className="w-1/3" alignItems={'center'}>
        <Typography className="border-b" pb={0.5} variant={'body1'} align='center' noWrap={false} style={{color: 'red'}}><em>Rizvi Education Society's</em> <br/> Rizvi College of Arts, Science & Commerce</Typography>
        <Typography className="text-primary" py={1} variant={'h5'} align='center' noWrap={false}>International Journal of Research</Typography>
        <Typography sx={{fontSize: '0.9rem'}} fontWeight={600} className="text-secondary border-t" pt={0.5} align='center'>ISSN 2231- 6124 (UGC Approved Sr.No. 63072 (2018))</Typography>
      </Stack>
      <Stack className="w-1/3 items-end">
        <img style={{height: '100px', width: '100px', objectFit: 'contain', marginRight: 6}} src={Logo2} alt="Rizvi Education Society"/>
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
