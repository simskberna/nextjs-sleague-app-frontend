'use client'
import React from "react";
import { Container, Box, Typography, Link,Card,CardMedia,CardContent,CardActions,Button } from '@mui/material';
import Image from "next/image";
import hero from '../../../public/assets/temporary-image.jpeg';
import AnimatedContainer from "@/app/components/Shared/AnimationContainer";
import EastIcon from '@mui/icons-material/East';
import TableComponent from "@/app/components/Shared/TableComponent";

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

const LeagueStatsPage = () => {
  return (
    <AnimatedContainer>
      <Container sx={{ display: 'flex', flexDirection: { sx: 'column', md: 'row' }, mt: 10, gap: 2 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h3" className="font-semibold">Unveiling the Best Moments in Soccer Leagues</Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
          </Box>
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
        <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 5 }}>
          <Typography variant="h5" className="font-semibold">League Standings</Typography>
          <Typography variant="body1">Stay updated with the latest league standings and team statistics. Analyze the performance of your favorite teams as the season progresses.</Typography>
        </Box>
        <TableComponent columns={columns} rows={rows} />
      </Container>

      <Container className="featured-teams">
      <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 5 }}>
          <Typography variant="h5" className="font-semibold">Featured Teams</Typography>
          <Typography variant="body1">Highlighting the achievements and profiles of prominent teams in the league. Discover their journey and what makes them stand out.</Typography>
      </Box>
      <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center',gap:4}}>
        
       {['1','2','3'].map((x,index) => 
         <Card key={index} sx={{ maxWidth: 345,border:'none',boxShadow:'none' }}>
         <CardMedia
           sx={{ height: 140,borderRadius:4}}
           image="/assets/temporary-image.jpeg"
           title="green iguana"
         />
         <CardContent sx={{py:2,px:0}}>
           <Typography gutterBottom variant="h5" component="div">
             Lizard
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         <CardActions sx={{p:0}}>
           <Button sx={{p:0,justifyContent:'start'}} size="small">Share</Button>
           <Button sx={{p:0,justifyContent:'start'}} size="small">Learn More</Button>
         </CardActions>
       </Card>
       )}
      </Box>
      
      </Container>

      <Container className="bottom-banner-section" sx={{mt:20}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', mb: 5,gap:2 }}>
          <Typography variant="h5" className="font-semibold">In-depth League Analysis</Typography>
          <Typography variant="body1">Dive into our comprehensive articles that provide insights and analysis on the latest league developments and trends.</Typography>
      </Box>
      <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center',gap:4}}>
        
       {['1','2','3'].map((x,index) => 
         <Card key={index} sx={{border:'none',boxShadow:'none',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
         <CardMedia 
           sx={{ height: 250,borderRadius:4}}
           image="/assets/temporary-bottom-banner.jpeg"
           title="green iguana"
         >
           <CardContent className="bg-gradient-from-gray" sx={{p:2,display:'flex',flexDirection:'column',justifyContent:'end',height:'100%',borderRadius:5}}>
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
    </AnimatedContainer>
  );
};

export default LeagueStatsPage;
