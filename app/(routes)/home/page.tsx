import React from 'react';
import Hero from '@/app/components/HomePage/Hero';
import { Container, Typography, Box, Stack } from '@mui/material';
import VideoComponent from '@/app/components/Shared/VideoComponent';
import ReviewBox from '@/app/components/Shared/ReviewBox';
import AnimatedContainer from '@/app/components/Shared/AnimationContainer';
import Chart from 'react-apexcharts';
import TableComponent from '@/app/components/Shared/TableComponent';
import MetricsComponent from '@/app/components/HomePage/MetricsComponent';


interface Review {
  name: string,
  score: string,
  date: string,
  comment: string
}
 
const response = {
  "data": [
    { "total_matches": 150, "total_teams": 20, "total_players": 400, "date": "2024-10-01T17:46:32.529+00:00" },
    { "total_matches": 160, "total_teams": 21, "total_players": 420, "date": "2024-10-02T17:46:32.529+00:00" },
    { "total_matches": 170, "total_teams": 22, "total_players": 450, "date": "2024-10-03T17:46:32.529+00:00" },
    { "total_matches": 140, "total_teams": 19, "total_players": 380, "date": "2024-10-04T17:46:32.529+00:00" },
    { "total_matches": 130, "total_teams": 18, "total_players": 360, "date": "2024-10-05T17:46:32.529+00:00" },
    { "total_matches": 120, "total_teams": 17, "total_players": 340, "date": "2024-10-06T17:46:32.529+00:00" },
    { "total_matches": 110, "total_teams": 16, "total_players": 320, "date": "2024-10-07T17:46:32.529+00:00" },
    { "total_matches": 100, "total_teams": 15, "total_players": 300, "date": "2024-10-08T17:46:32.529+00:00" },
    { "total_matches": 90, "total_teams": 14, "total_players": 280, "date": "2024-10-09T17:46:32.529+00:00" },
    { "total_matches": 80, "total_teams": 13, "total_players": 260, "date": "2024-10-10T17:46:32.529+00:00" }
  ]
};
const chartOptions = {
  chart: {
    type: 'area' as const,
    title: { text: 'test' },
    height: 400,
    zoom: {
      enabled: false,
    },
  },
  colors: ['#ff6384', '#36a2eb', '#4bc0c0'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth' as const,
  },
  xaxis: {
    type: 'datetime' as const,
    categories: response.data.map(item => item.date),
  },
  tooltip: {
    x: {
      format: 'dd/MM/yyyy',
    },
  },
};

const series = [
  {
    name: 'Total Matches',
    data: response.data.map(item => item.total_matches),
  },
  {
    name: 'Total Teams',
    data: response.data.map(item => item.total_teams),
  },
  {
    name: 'Total Players',
    data: response.data.map(item => item.total_players),
  },
];
type Column = {
  id: string;
  label: string;
  minWidth: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string | React.JSX.Element; 
};

const columns: Column[] = [
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,  
  },
  {
    id: 'homeTeam',
    label: 'Home Team',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'awayTeam',
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
      <span style={{ backgroundColor: '#ff963d96', color: '#fff', fontWeight: 'bold', padding: '4px',borderRadius:20}}>
        {value}
      </span>
     ),
    },
];

type Row = {
  date: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
};

const getRandomDate = (): string => {
  const start = new Date(2020, 0, 1);
  const end = new Date(2023, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

const getRandomTeamName = (): string => {
  const teams = ['Lions', 'Tigers', 'Bears', 'Wolves', 'Eagles', 'Sharks'];
  return teams[Math.floor(Math.random() * teams.length)];
};

const generateRandomRows = (numRows: number): Row[] => {
  const rows: Row[] = [];
  for (let i = 0; i < numRows; i++) {
    rows.push({
      date: getRandomDate(),
      homeTeam: getRandomTeamName(),
      awayTeam: getRandomTeamName(),
      venue: `Stadium ${Math.floor(Math.random() * 100) + 1}`,
    });
  }
  return rows;
};
 
const rows = generateRandomRows(10); 

const HomePage: React.FC = () => {   
  
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
          <MetricsComponent/>
        </Container>
      </AnimatedContainer>

      <AnimatedContainer> 
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 0, md: 4 }}
          sx={{ width: '100%',my:10 }}
        >
          <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h5' className='font-semibold text-center'>Overall Statistics by Date</Typography>
          <Chart options={chartOptions} series={series} type="area" height={400} />
          </Box>
        </Stack> 
      </AnimatedContainer>

      <AnimatedContainer>
       <Container sx={{my:10}}>
       <Typography variant='h5' className='w-full text-center font-semibold py-8'>Upcoming Matches</Typography>
        <TableComponent columns={columns} rows={rows} headerBackground='#ebffe8' border='unset' rowStyle={{border:'none'}}/>
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
