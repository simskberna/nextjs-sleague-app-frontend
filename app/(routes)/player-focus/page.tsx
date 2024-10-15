"use client";
import React from "react"; 
import { Container, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Image from "next/image"; 
import Link from "next/link";
import EastIcon from "@mui/icons-material/East"; 
import AnimatedContainer from "@/app/components/Shared/AnimationContainer";
import useIsMobile from "@/app/hooks/useIsMobile";

const PlayerFocusPage = () => { 
  const isMobile = useIsMobile();
  return (
    <AnimatedContainer> 
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 10, mt: { xs: 5, md: 15 } }}>
        <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3 }}>
          <Typography variant={isMobile ? "h4":"h2"} className="font-semibold">Spotlight on Soccer's Elite</Typography>
          <Typography variant="body1" className="font-normal">Discover the journeys of soccer's top players, their career-defining moments, and the stats that set them apart. Immerse yourself in the world of player excellence.</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button variant="contained" className="font-normal capitalize rounded-lg" sx={{ boxShadow: 'unset', backgroundColor: '#4caf50', color: 'white', '&:hover': { boxShadow: 'unset', backgroundColor: '#84cf81' } }}>
              Explore Players
            </Button>
            <Link href={'/'} className='p-2 group rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all'>
              <Typography variant="body1" sx={{ color: 'black' }} className="font-semibold">View Highlights</Typography>
              <EastIcon 
                sx={{ color: 'black', width: '20px', transition: 'transform 0.3s' }} 
                className='group-hover:translate-x-1'
              />
            </Link>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Image src="/assets/dummy-image.jpeg" alt="banner-image" className="rounded-xl" width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}/>
        </Box>
      </Container>

      <Container className="!max-w-[unset]" sx={{ mt: 10, bgcolor: '#ebffe8', height: 'auto', p: {xs:2,md:10} }}>
        <Typography variant="h4" className="font-semibold pb-6">Player Metrics That Matter</Typography>
        <Typography variant="body1" className="font-normal">Analyze the numbers behind the legends. Compare top players across leagues with our in-depth statistics and performance metrics.</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', mt: 2, px: {xs:0,md:10}, py: {xs:0,md:5} }}>
          {[{ value: '100+', title: 'Goals Scored' }, { value: '50+', title: 'Assists Made' }, { value: '200+', title: 'Matches Played' }, { value: '5', title: 'Player of the Year Awards' }].map((item, idx) => (
            <Box key={item.title} 
              sx={{
                borderBottom: idx === 0 ? '1px solid #d3e5d0' : 'none',
                borderRight: idx === 0 || (idx + 1) % 3 === 0 ? '1px solid #d3e5d0' : 'none',
                borderTop: idx === ['1', '2', '3', '4'].length - 1 ? '1px solid #d3e5d0' : 'none',
                p: 4
              }}>
              <Typography variant="h4" className="font-bold">{item.value}</Typography>
              <Typography variant="body1" className="font-semibold" sx={{ color: '#3a9d41' }}>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', mt: 10 }}>
        <Typography variant="h3" className="font-semibold md:w-[50%] text-center pb-8">Iconic Moments Captured</Typography>
        <Typography variant="body1" className="md:w-[50%] text-center pb-2">Relive unforgettable moments with our exclusive collection of player action shots.</Typography>
        <Typography variant="body1" className="md:w-[50%] text-center">Experience the thrill of the game through our curated gallery of soccer highlights.</Typography>
        <Box sx={{ width: '100%', display: 'grid', justifyContent: { xs: 'center', md: 'space-between' }, gridTemplateColumns: { xs: 'auto auto', sm: 'auto auto auto', md: 'auto auto auto auto', lg: 'auto auto auto auto auto auto' }, gap: 5, mt: 10 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item} sx={{ borderRadius: 4, backgroundColor: '#000', width: { xs: 125, md: 175, lg: 150 }, height: { xs: 125, md: 175, lg: 150 } }}>
              <CardMedia
                sx={{ height: { xs: 125, md: 175, lg: 150 }, width: { xs: 125, md: 175, lg: 150 }, borderRadius: 4 }}
                image="/assets/temporary-image.jpeg"
                title="green iguana"
              />
            </Card>
          ))}
        </Box>
      </Container>

      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', mt: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 5, gap: 2 }}>
          <Typography variant="h4" className="font-semibold">Player Insights & Trends</Typography>
          <Typography variant="body1">Stay updated with the latest analyses and stories from the world of soccer players.</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, position: 'relative', justifyContent: 'space-between', gap: 4 }}>
          {['1', '2', '3'].map((x) => 
            <Card key={x} sx={{ border: 'none', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <CardMedia 
                sx={{ height: 250, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}
                image="/assets/temporary-bottom-banner.jpeg"
                title="temporary-image"
              > 
              </CardMedia>
              <CardContent className="bg-gradient-from-green" sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'end', height: '100%', borderBottomLeftRadius: 7, borderBottomRightRadius: 7 }}>
                <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                  Oct 10, 2023 Alex Johnson
                </Typography>
                <Typography gutterBottom variant="body1" component="div" className="font-semibold" sx={{ color: 'white' }}>
                  Breaking Down the Season's Highlights
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                  An analysis of the most exciting moments and pivotal matches that defined the season.
                </Typography>
              </CardContent>
            </Card>
          )} 
        </Box>
      </Container>

      <Container className="!max-w-[unset]" sx={{ my: 5, p: 5, width: '100%', height: { xs: '600px', md: '400px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4caf50' }}>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '50%' }, flexDirection: 'column' }}>
          <Typography variant="h4" className="text-white font-semibold text-center pb-8">Join the Soccer Revolution</Typography>
          <Typography variant="body1" className="text-white text-center opacity-[0.7]">Be part of our community to get the latest player updates and exclusive content. Sign up today to stay ahead in the world of soccer.</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 5 }}>
          <Button variant="contained" className="font-normal capitalize rounded-lg" sx={{ boxShadow: 'unset', backgroundColor: 'white', color: 'black', '&:hover': { boxShadow: 'unset', backgroundColor: '#e2ffe1' } }}>
            Join Now
          </Button>
          <Link href={'/'} className='p-2 group rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all'>
            <Typography variant="body1" sx={{ color: 'white' }} className="font-semibold">Discover More</Typography>
            <EastIcon 
              sx={{ color: 'white', width: '20px', transition: 'transform 0.3s' }} 
              className='group-hover:translate-x-1'
            />
          </Link>
        </Box>
      </Container> 
    </AnimatedContainer>
  );
};

export default PlayerFocusPage;
