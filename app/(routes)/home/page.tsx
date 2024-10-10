import React from 'react';
import Hero from '@/app/components/HomePage/Hero';
import { Container, Typography, Box } from '@mui/material';
import VideoComponent from '@/app/components/Shared/VideoComponent';
import ReviewBox from '@/app/components/Shared/ReviewBox';
import AnimatedContainer from '@/app/components/Shared/AnimationContainer';

interface Metric {
  label: string,
  value: string,
}
interface Review {
  name: string,
  score: string,
  date: string,
  comment: string
}

const HomePage: React.FC = () => {
    

  const metrics: Metric[] = [
    { label: 'Goals Scored', value: '1,200+' },
    { label: 'Matches Played', value: '500+' },
    { label: 'Top Players', value: '50+' },
    { label: 'Leagues Covered', value: '10+' }
  ];
  
  const reviews: Review[] = [
    { name: 'Alex Johnson', score: '4/5', date: 'October 10, 2023', comment: 'KickOff Central is my go-to site for all soccer stats and highlights. Absolutely love it!' },
    { name: 'Jamie Lee', score: '5/5', date: 'October 5, 2023', comment: 'The insights provided here are unmatched. A must-visit for any soccer fan!' },
    { name: 'Sam Taylor', score: '5/5', date: 'September 28, 2023', comment: 'Great content and easy navigation. KickOff Central keeps me updated with all the latest in soccer.' },
  ];

  return (
    <>
      <AnimatedContainer>
      <Hero />
      </AnimatedContainer>
      <AnimatedContainer>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, my: 8 }}>
        <Typography variant='h5' className='font-semibold'>Soccer League Standouts</Typography>
        <Typography variant='body2'>Dive into the top-performing teams and essential statistics that every soccer enthusiast needs to know.</Typography>
        <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: '20px', md: '2px' }, my: 5 }}>
          {metrics.map((metric, index) => {
            const { label, value } = metric;
            const isFirst = index === 0;
            const isLast = index === metrics.length - 1;

            return (
              <Box
                key={index}
                sx={{
                  bgcolor: '#ebffe8',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '250px',
                  height: '110px',
                  ...(isFirst && {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                  }),
                  ...(isLast && {
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }),
                }}
              >
                <Typography variant='h6'>{value}</Typography>
                <Typography>{label}</Typography>
              </Box>
            );
          })}
        </Container>
      </Container>
      </AnimatedContainer>
    

     <AnimatedContainer>
     <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
          <Typography variant='h4' className='font-semibold'>Relive the Action</Typography>
          <Typography variant='body2'>Watch high-energy reels of key matches and unforgettable soccer moments.</Typography>
        </Box>
        <VideoComponent videoId='1234' />
      </Container>
     </AnimatedContainer>

     
     <AnimatedContainer>
     <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', my: 10 }}>
        {reviews.map((review, index) => (
          <ReviewBox
            key={index}
            name={review.name}
            score={review.score}
            date={review.date}
            comment={review.comment}
          />
        ))}
      </Container>  
     </AnimatedContainer>
      </>
  );
};

export default HomePage;
