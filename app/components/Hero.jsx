import React from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Container,
  Stack,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <Box sx={{ py: { xs: 8, sm: 16, lg: 24 }, position: 'relative', overflow: 'hidden' }}> 
      <Box
        sx={{
          position: 'absolute',
          top: '-474px',
          left: '41%',
          transform: 'translateX(-64%) rotate(33deg)',
          width: { xs: '36.125rem', sm: '72.1875rem' },
          height: '100%',
          zIndex: 0,
          filter:'blur(90px)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top right,#65bf65, #4caf50)',
            opacity: 0.3,
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            filter: 'blur(10px)',
          }}
        />
      </Box>
 
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
         <Box sx={{p:1, borderRadius:'100px',m:'auto',mb:4,border:'1px solid #84cf81', width:'fit-content', display:'flex',justifyContent:'center',alignItems:'center'}}>
         <Typography variant="body2" sx={{fontSize:'12px', color: '#84cf81'}}>
            Catch the latest soccer league updates and thrilling moments here at KickOff Central!
          </Typography>
         </Box>
          <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem' }, color: 'slate.900' }}>
            Welcome to KickOff Central
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: 'slate.700' }}>
            Your ultimate hub for soccer statistics, match highlights, and player insights. Immerse yourself in the world of soccer with us.
          </Typography>
        </Box>

        <Stack direction="column" spacing={3} alignItems="center">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{boxShadow:'unset', backgroundColor: '#84cf81', color: 'white', '&:hover': { backgroundColor: 'sky.400' } }}>
              Explore Now
            </Button>
            <Button variant="outlined" className="poppins-thin" sx={{boxShadow:'unset',color: 'black', borderColor: '#dcdcdc', '&:hover': { backgroundColor: 'slate.100' } }}>
              Discover More
            </Button>
          </Stack>
          <Stack direction="row">
            <IconButton component="a" href="https://twitter.com" target="_blank" sx={{ scale:(0.7),color: '#a0afba', '&:hover': { color: '#849dae' } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" target="_blank" sx={{ scale:(0.7),color: '#a0afba', '&:hover': { color: '#849dae' } }}>
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-389px',
          left: '91%',
          transform: 'translateX(-106%) rotate(359deg)',
          width: { xs: '36.125rem', sm: '72.1875rem' },
          height: '83%',
          zIndex: 0,
          filter:'blur(90px)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '73%',
            background: 'linear-gradient(to top right,#65bf65, #4caf50)',
            opacity: 0.3,
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            filter: 'blur(10px)',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
