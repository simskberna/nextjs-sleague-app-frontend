import React from "react" 
import { Container,Stack,Box, Typography,Button } from '@mui/material'
import Image from "next/image" 
import Link from "next/link"
import EastIcon from "@mui/icons-material/East" 

const PlayerFocusPage = () => { 

  return <Container sx={{mt:10}}> 
    <Stack sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:10}}>
      <Box sx={{flex:1,width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',gap:3}}>
        <Typography variant="h3" className="font-semibold">Spotlight on Soccer's Elite</Typography>
        <Typography variant="body1" className="font-normal">Discover the journeys of soccer's top players, their career-defining moments, and the stats that set them apart. Immerse yourself in the world of player excellence.</Typography>
        <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <Button variant="contained" className="font-normal capitalize rounded-lg" sx={{boxShadow:'unset', backgroundColor: '#4caf50', color: 'white', '&:hover': {boxShadow:'unset', backgroundColor: '#84cf81' } }}>
             Explore Players
          </Button>
          <Link href={'/'} className='p-2 group rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all'>
              <Typography variant="body1" sx={{color:'black'}} className="font-semibold">View Highlights</Typography>
              <EastIcon 
                  sx={{ color: 'black', width:'20px',transition: 'transform 0.3s' }} 
                  className='group-hover:translate-x-1'
                />
            </Link>
        </Box>
      </Box>

      
      <Box sx={{flex:1}}>
      <Image src="/assets/dummy-image.jpeg" alt="banner-image" className="rounded-xl" width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}/>

      </Box>
    </Stack>

    <Stack sx={{mt:10,bgcolor:'#ebffe8',height:'auto',p:4}}>
      <Typography variant="h5" className="font-semibold pb-6">Player Metrics That Matter</Typography>
      <Typography variant="body1" className="font-normal">Analyze the numbers behind the legends. Compare top players across leagues with our in-depth statistics and performance metrics.</Typography>
      <Box sx={{display:'grid',gridTemplateColumns:'auto auto',mt:2}}>
        {['1','2','3','4'].map((item,idx) => <Box key="idx" 
           sx={{
                 borderBottom:idx === 0 ? '1px solid #d3e5d0' : 'none',
                 borderRight:idx === 0 || (idx+1)%3 === 0 ? '1px solid #d3e5d0' : 'none',
                 borderTop:idx === ['1','2','3','4'].length-1 ? '1px solid #d3e5d0' : 'none',
                 p:4
              }}>
          <Typography variant="h5" className="font-bold">100+</Typography>
          <Typography variant="body1" className="font-semibold" sx={{color:'#3a9d41'}}>Goals Scored</Typography>
        </Box>)}
      </Box>
    </Stack>

  </Container>
}

export default PlayerFocusPage