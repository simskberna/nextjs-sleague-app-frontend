"use client"
import React, { useEffect, useState } from 'react';
import Hero from '@/app/components/HomePage/Hero';
import { Container, Typography, Box, Stack, CardMedia, Card } from '@mui/material';
import VideoComponent from '@/app/components/Shared/VideoComponent';
import ReviewBox from '@/app/components/Shared/ReviewBox';
import AnimatedContainer from '@/app/components/Shared/AnimationContainer';
import Chart from 'react-apexcharts';
import useFetchRecentMatches from '@/app/hooks/useFetchRecentMathces';
import useFetchUpcomingMatches from '@/app/hooks/useFetchUpcomingMatches';
import TableComponent from '@/app/components/Shared/TableComponent';
import MetricsComponent from '@/app/components/HomePage/MetricsComponent';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import useIsMobile from '@/app/hooks/useIsMobile';
import LoadingSpinner from '@/app/components/Shared/LoadingSpinner';
import NoData from '@/app/components/Shared/NoData';
import useDateFormatter from '@/app/hooks/useDateFormatter';
import useFetchOverallStats from '@/app/hooks/useFetchOverallStats';

interface Review {
  name: string;
  score: string;
  date: string;
  comment: string;
} 
interface OverallStat {
  last_updated: string;
  total_matches: number;
  total_teams: number;
  total_players: number;
}

interface SeriesData {
  name: string;
  data: number[];
}
type Column = {
  id: string;
  label: string;
  minWidth: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string | React.JSX.Element; 
}; 

const columns: Column[] = [
  {
    id: 'match_date',
    label: 'Date',
    minWidth: 170,  
    format: (value) => {
      const dateValue = value || 'No date available'; 
      const formattedDate = useDateFormatter(dateValue);
      return <span>{formattedDate}</span>;
    },
  },
  {
    id: 'home_team_name',
    label: 'Home Team',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'away_team_name',
    label: 'Away Team',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'venue',
    label: 'Venue',
    minWidth: 170,
    align: 'right',
    format: (value: string) => (
      <span style={{ backgroundColor: '#ff963d96', color: '#fff', fontWeight: 'bold', padding: '4px', borderRadius: 20 }}>
        {value}
      </span>
    ),
  },
];

const HomePage: React.FC = () => {   
  const isMobile = useIsMobile();
  const reviews: Review[] = [
    { name: 'Alex Johnson', score: '4/5', date: 'October 10, 2023', comment: 'KickOff Central is my go-to site for all soccer stats and highlights. Absolutely love it!' },
    { name: 'Jamie Lee', score: '5/5', date: 'October 5, 2023', comment: 'The insights provided here are unmatched. A must-visit for any soccer fan!' },
    { name: 'Sam Taylor', score: '5/5', date: 'September 28, 2023', comment: 'Great content and easy navigation. KickOff Central keeps me updated with all the latest in soccer.' },
  ];

  const { recentMatches, error: recentError, isLoading: recentLoading } = useFetchRecentMatches();
  const { upcomingMatches, error: upcomingError, isLoading: upcomingLoading } = useFetchUpcomingMatches();
  const { overallStats, error: statsError, isLoading: statsLoading } = useFetchOverallStats();

  const [series, setSeries] = useState<SeriesData[]>([]);

  useEffect(() => {
    if (overallStats && overallStats.length > 0) {
      setSeries([
        { name: 'Total Matches', data: overallStats.map(item => item.total_matches) },
        { name: 'Total Teams', data: overallStats.map(item => item.total_teams) },
        { name: 'Total Players', data: overallStats.map(item => item.total_players) },
      ]);
    }
  }, [overallStats]);
  

  const chartOptions = {
    chart: {
      type: 'area' as const,
      height: 400,
      zoom: { enabled: false },
    },
    colors: ['#ff6384', '#36a2eb', '#4bc0c0'],
    dataLabels: { enabled: true, formatter: (val: number) => val.toString() },
    stroke: { curve: 'smooth' as const },
    xaxis: {
      categories: overallStats?.map(item => item.last_updated),
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: { format: 'dd/MM/yyyy' },
    },
  };

  return (
    <>
      <AnimatedContainer>
        <Hero />
      </AnimatedContainer>
      <AnimatedContainer>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, my: 8 }}>
          <Typography variant='h5' className='font-semibold'>Soccer League Standouts</Typography>
          <Typography variant='body2'>Dive into the top-performing teams and essential statistics that every soccer enthusiast needs to know.</Typography>
          <MetricsComponent />
        </Container>
      </AnimatedContainer>

      <AnimatedContainer> 
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 4 }} sx={{ width: '100%', my: 10 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h5' className='font-semibold text-center pb-4'>Overall Statistics by Date</Typography>
            {statsError ? <NoData /> : statsLoading ? <Container sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}><LoadingSpinner /></Container> :
                <Chart options={chartOptions} series={series} type="area" height={400} />}
          </Box>
        </Stack> 
      </AnimatedContainer>

      <AnimatedContainer>
        <Typography variant='h5' className='w-full text-center font-semibold py-8'>Recent Results</Typography>
        {recentError ? <NoData /> :
          recentLoading ? <Container sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}><LoadingSpinner /></Container> : 
          <Slide slidesToScroll={isMobile ? 1 : 2} slidesToShow={isMobile ? 1 : 2} indicators={true}>
            {recentMatches?.map((result, idx) => (
              <Container key={idx} className='recent-results shadow-md rounded-md each-slide-effect' sx={{ my: 10, backgroundColor: 'white', p: 2, border: '1px solid', borderColor: '#ededed' }}>
                <Box sx={{ bgcolor: "#ffc900", width: 'fit-content', height: 'auto', p: 1, m: 0, mb: 2, borderRadius: 10 }}>
                  <Typography variant='h6' className='font-semibold text-white'>{result?.league || 'LaLiga'}</Typography>
                </Box>
                <Stack sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto', p: 0, alignItems: 'center' }}> 
                  <Box className="home-team"> 
                    <Card sx={{ border: 'none', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                      <CardMedia sx={{ height: 150 }} image={result?.home_team_img || ''} title="team-home" />
                    </Card> 
                    <Typography variant='body1' className='text-black font-semibold py-2'>{result?.home_team_name}</Typography>
                    <Typography variant='body2' className='text-black font-normal opacity-[0.7]'>Home</Typography>
                  </Box>
                  <Box className="score text-center mb-8">
                    <Typography variant='h3' className='font-semibold text-black'>{result?.score}</Typography>
                  </Box>
                  <Box className="away-team"> 
                    <Card sx={{ border: 'none', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                      <CardMedia sx={{ height: 150 }} image={result?.away_team_img || ''} title="team-away" />
                    </Card>
                    <Typography variant='body1' className='text-black font-semibold py-2'>{result?.away_team_name}</Typography>
                    <Typography variant='body2' className='text-black font-normal opacity-[0.7]'>Away</Typography>
                  </Box>
                </Stack>
              </Container>
            ))}
          </Slide>}
      </AnimatedContainer>

      <AnimatedContainer>
        <Container sx={{ my: 10 }}>
          <Typography variant='h5' className='w-full text-center font-semibold py-8'>Upcoming Matches</Typography>
          {upcomingError ? <NoData /> : upcomingLoading ? <LoadingSpinner /> : <TableComponent columns={columns} rows={upcomingMatches || []} headerBackground='#ebffe8' border='unset' rowStyle={{ border: 'none' }} />}
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
