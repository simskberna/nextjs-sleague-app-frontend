'use client'
import React, { useState } from "react";
import { Container, Box, Typography, Link,Card,CardMedia,CardContent,CardActions,Button, Avatar,Stack } from '@mui/material';
import hero from '../../../public/assets/temporary-image.jpeg';
import AnimatedContainer from "@/app/components/Shared/AnimationContainer";
import EastIcon from '@mui/icons-material/East';
import TableComponent from "@/app/components/Shared/TableComponent";
import { IconButton } from '@mui/material';
import {  X as XIcon } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useIsMobile from "@/app/hooks/useIsMobile";
import Image from "next/image";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Column {
  id: 'positionTitle' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  {
    id: 'positionTitle',
    label: 'Position',
    minWidth: 170,
  },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  positionTitle: string;
  code: string;
  population: number;
  size: number;
  density: number;
  avatar: string;
}

function createData(
  positionTitle: string,
  code: string,
  population: number,
  size: number,
  avatar: string,
): Data {
  const density = population / size;
  return { positionTitle, code, population, size, density, avatar };
}
const avatar = '/assets/temporary-avatar.jpeg';
const rows: Data[] = [
  createData('Forward', 'IN', 1324171354, 3287263, avatar),
  createData('Midfielder', 'CN', 1403500365, 9596961, avatar),
];
interface Review {
  content: string,
  name: string,
  profession: string,
  avatar: string,
}

const topReviews : Review[] = [
  {
    content: 'KickOff Central is my go-to platform for all things soccer. The insights and data they provide are unmatched!',
    name: 'Nick V',
    profession: 'Sports Analyst',
    avatar: '/assets/temporary-avatar.jpeg',
  },
  {
    content: 'The comprehensive coverage of leagues and player stats keeps me informed and engaged all season long.',
    name: 'Amelia W',
    profession: 'League Follower',
    avatar: '/assets/temporary-avatar-2.jpeg',
  },
  {
    content: 'As a die-hard soccer fan, I appreciate the depth of analysis and the highlight reels that capture the essence of the game.',
    name: 'Jessie J',
    profession: 'Soccer Enthusiast',
    avatar: '/assets/temporary-avatar.jpeg',
  },
]
const LeagueStatsPage = () => {
  const [activeSection,setActiveSection] = useState('Nick V'); 
  const isMobile = useIsMobile();

  return (
    <AnimatedContainer>
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 10, gap: 2 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h3" className="font-semibold">Unveiling the Best Moments in Soccer Leagues</Typography>

          <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt:{xs:5,md:0} }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
              <Box sx={{ height: 'auto' }}>
                <Link href={'/'} underline="none" className='h-[50px] p-2 group bg-[#4caf50] rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all hover:bg-[#369b3d]'>
                  <Typography className='font-semibold' sx={{ fontSize: '14px', color: 'black' }}>Discover More</Typography>
                  <EastIcon sx={{ color: 'black', width: '20px' }} className='group-hover:translate-x-1 transition-all' />
                </Link>
              </Box>
              <Box sx={{ height: 'auto' }}>
                <Link href={'/'} underline="none" className='h-[50px] p-2 bg-white border-2 border-[#086017] rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all hover:bg-[#086017]'>
                  <Typography className='font-semibold' sx={{ fontSize: '14px', color: 'black' }}>View Highlights</Typography>
                </Link>
              </Box>
            </Box>
            <Typography variant="body2">Explore the thrilling highlights and key moments from soccer leagues worldwide. Join us in celebrating the passion and excitement of the beautiful game.</Typography>
          </Stack>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ maxHeight: 350, overflow: 'hidden', borderRadius: 4 }}>
            <Image className='rounded-lg object-contain w-full' src={hero} alt="league-image" height={200} width={500} />
          </Box>
          <Box sx={{ borderRadius: 4, p: 4, textAlign: 'left', background: '#65bf65', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5 }}>
            <Typography variant="h4" className="font-semibold">Your Gateway to Soccer Excellence</Typography>
            <Typography variant="body1">KickOff Central brings you closer to the action with in-depth analysis and captivating visuals, making every match unforgettable.</Typography>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10 }} className="league-standings-table">
        <Box sx={{ width: {xs:'100%',md:'60%'}, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 5 }}>
          <Typography variant="h5" className="font-semibold">League Standings</Typography>
          <Typography variant="body1">Stay updated with the latest league standings and team statistics. Analyze the performance of your favorite teams as the season progresses.</Typography>
        </Box>
        <TableComponent columns={columns} rows={rows} />
      </Container>

      <Container className="featured-teams">
      <Box sx={{ width: {xs:'100%',md:'60%'}, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 5 }}>
          <Typography variant="h5" className="font-semibold">Featured Teams</Typography>
          <Typography variant="body1">Highlighting the achievements and profiles of prominent teams in the league. Discover their journey and what makes them stand out.</Typography>
      </Box>
      <Box sx={{display:{xs:'grid',md:'flex'},gridTemplateColumns:'auto auto',width:'100%',justifyContent:{xs:'normal',md:'space-between'},alignItems:'center',gap:4}}>
        
       {['1','2','3'].map((x,index) => 
         <Card key={index} sx={{ width: '100%',height:'auto',border:'none',boxShadow:'none' }}>
         <CardMedia
           sx={{ height: 200,borderRadius:4}}
           image="/assets/temporary-image.jpeg"
           title="green iguana"
         />
         <CardContent sx={{py:2,px:0}}>
           <Typography gutterBottom variant="h5" component="div">
            Team B
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Top Contender
           </Typography>
         </CardContent>
         <CardActions sx={{p:0}}>
          <Link href="#">
          <IconButton
            className="group rounded-full"
            sx={{
              display:'flex',
              justifyContent:'flex-start',
              alignItems:'center',
              gap:2,
              color:'black',
              p: 0,
              backgroundColor: 'transparent', 
            }}
          >
           <XIcon />
           <LinkedInIcon/>
          </IconButton>
        </Link>
         </CardActions>
       </Card>
       )}
      </Box>
      
      </Container>

      <Container className="bottom-banner-section" sx={{mt:20}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', mb: 5,gap:2 }}>
          <Typography variant="h4" className="font-semibold">In-depth League Analysis</Typography>
          <Typography variant="body1">Dive into our comprehensive articles that provide insights and analysis on the latest league developments and trends.</Typography>
      </Box>
      <Box sx={{display:{xs:'grid',md:'flex'},gridTemplateColumns:'auto auto',width:'100%',justifyContent:{xs:'normal',md:'space-between'},alignItems:'center',gap:4}}>
        
       {['1','2','3'].map((x,index) => 
         <Card key={index} sx={{border:'none',boxShadow:'none',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
         <CardMedia 
           sx={{ height: 250,borderRadius:4}}
           image="/assets/temporary-bottom-banner.jpeg"
           title="green iguana"
         >
           <CardContent className="bg-gradient-from-gray" sx={{p:2,display:'flex',flexDirection:'column',justifyContent:'end',height:'100%',borderRadius:5}}>
           <Typography variant="body2" sx={{ color: 'white',opacity:0.7 }}>
           Oct 10, 2023 Alex Johnson
           </Typography>
           <Typography gutterBottom variant="body1" component="div" className="font-semibold" sx={{ color: 'white' }}>
           Breaking Down the Season's Highlights
           </Typography>
           <Typography variant="body2" sx={{ color: 'white',opacity:0.7 }}>
           An analysis of the most exciting moments and pivotal matches that defined the season.
           </Typography>
         </CardContent>
         
         </CardMedia>
        
       </Card>
       )}
      </Box>
      
      </Container>

      <Container className="slider-area" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '350px', width: '100%', backgroundColor: '#ebffe8', my: 10 }}>
          
        {topReviews.map((x, index) => 
          x.name === activeSection && (
            <Box key={index} sx={{ gap: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar alt={x.name} sx={{ width: 60, height: 60 }} src={x.avatar} />
              <Typography variant="h5" className="w-[80%] text-center font-semibold">
                {x.content}
              </Typography>
            </Box>
          )
        )}

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          {topReviews.map((x, index) => (
            <Box sx={{ height: 'auto' }} key={index}>
              <Button 
                className="group"
                onMouseOver={() => !isMobile ? setActiveSection(x.name) : undefined} 
                onMouseLeave={() => !isMobile ? setActiveSection(x.name) : undefined}
                onClick={() => isMobile ? setActiveSection(x.name) : undefined}
                sx={{ 
                  backgroundColor: x.name === activeSection ? '#4caf50' : 'white', 
                  transition: 'background-color 0.3s', 
                  padding: {xs:'5px',md:'12px'}, 
                  borderRadius: '50px',
                  '&:hover': { backgroundColor: '#4caf50' }
                }}
              > 
                  <Typography 
                    sx={{
                      fontSize: '14px', 
                      transition: 'color 0.3s',
                      color: x.name === activeSection ? 'white' : 'black'
                    }} 
                    className='group-hover:text-white'
                  >
                    {x.name} - {x.profession}
                  </Typography> 
              </Button>
            </Box>

          ))}
        </Box>
      </Container>

      <Container className="bottom-banner" sx={{bgcolor:'#086018',p:4}}>
        <Box className='shadow-md' sx={{gap:6,bgcolor:'rgb(255 255 255 / 0.05)',borderRadius:4,p:4,display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center'}}>
          <Image src="/assets/temporary-banner.jpeg" className="rounded-lg" alt="banner" width={300} height={300}/>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',gap:2}}>
              <Typography variant="h4" sx={{color:'white'}}>Join the Soccer Community</Typography>
              <Typography variant="body1" sx={{color:'white',opacity:0.6}}>Become a part of our vibrant community of soccer enthusiasts. Stay updated with the latest news, insights, and exclusive content.</Typography>
            </Box>
            <Stack sx={{display:'grid',gridTemplateColumns:{xs:'auto',sm:'auto auto'},justifyContent:'space-between',gap:2,width:'100%',mt:2}}>
              <Box sx={{display:'flex',justifyContent:'flex-start',gap:2,alignItems:'start'}}><CheckCircleIcon sx={{color:'white',height:20,width:20}} /><Typography variant="body1" sx={{color:'white'}}>Access to exclusive match analysis</Typography></Box>
              <Box sx={{display:'flex',justifyContent:'flex-start',gap:2,alignItems:'start'}}><CheckCircleIcon sx={{color:'white',height:20,width:20}} /><Typography variant="body1" sx={{color:'white'}}>Engage with fellow soccer fans</Typography></Box>
              <Box sx={{display:'flex',justifyContent:'flex-start',gap:2,alignItems:'start'}}><CheckCircleIcon sx={{color:'white',height:20,width:20}} /><Typography variant="body1" sx={{color:'white'}}>Stay ahead with timely updates</Typography></Box>
              <Box sx={{display:'flex',justifyContent:'flex-start',gap:2,alignItems:'start'}}><CheckCircleIcon sx={{color:'white',height:20,width:20}} /><Typography variant="body1" sx={{color:'white'}}>Participate in community events</Typography></Box>

            </Stack>
            <Link 
                href={'/'}  
                underline="none" 
                className='w-full mt-2 pt-2 group rounded-full flex items-center justify-start gap-2 hover:duration-300 transition-all'
              >
                <Typography sx={{ fontSize: '14px', color: '#64bd65' }}>Join Our Community</Typography>
                <EastIcon 
                  sx={{ color: '#64bd65', width: '20px', transition: 'transform 0.3s' }} 
                  className='group-hover:translate-x-1'
                />
            </Link>
          </Box>
        </Box>
      </Container>

    </AnimatedContainer>
  );
};

export default LeagueStatsPage;
