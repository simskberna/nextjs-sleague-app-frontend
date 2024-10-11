import React, { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';

type Metric = {
  label: string;
  value: number;
};

const metrics: Metric[] = [
  { label: 'Goals Scored', value: 1200 },
  { label: 'Matches Played', value: 500 },
  { label: 'Top Players', value: 50 },
  { label: 'Leagues Covered', value: 10 }
];

const MetricsComponent: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(metrics.map(metric => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 50;
    const increments = metrics.map(metric => Math.floor(Number(metric.value)));

    const intervals = increments.map((target, index) => {
      let count = 0;
      const incrementAmount = Math.ceil(target / (duration / intervalTime));

      return setInterval(() => {
        if (count < target) {
          count += incrementAmount;
          if (count > target) count = target;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = count;
            return newCounts;
          });
        } else {
          clearInterval(intervals[index]);
        }
      }, intervalTime);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: '20px', md: '2px' },
        my: 5
      }}
    >
      {metrics.map((metric, index) => {
        const { label } = metric;
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
            <Typography variant='h4' className='font-bold'>{counts[index].toLocaleString()}</Typography>
            <Typography>{label}</Typography>
          </Box>
        );
      })}
    </Container>
  );
};

export default MetricsComponent;
