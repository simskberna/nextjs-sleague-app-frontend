import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import {Container, Typography} from '@mui/material';

const NoData = () => {
  return (
     <Container sx={{width:"100%",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:2}}>
        <ErrorIcon color="primary" style={{transform:'scale(2)'}}/>
        <Typography variant='h6'>No data found.</Typography>
     </Container>
  )
}

export default NoData
