import React from 'react';
import { Avatar, Card, Box, Container, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

interface ReviewProps {
  name: string;
  score: string;
  date: string;
  comment: string;
}

const ReviewBox: React.FC<ReviewProps> = ({ name, score, date, comment }) => { 
  const [filledStars, totalStars] = score.split('/').map(Number);

  return (
    <Card sx={{ boxShadow: 'unset', maxWidth:'560px', display: 'flex', flexDirection: 'column', my: 2, borderBottom: '1px solid #e5e5e5', pb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'start', width: 'fit-content' }}>
        <Avatar>H</Avatar>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
            {[...Array(filledStars)].map((_, index) => (
              <StarIcon key={index} sx={{ color: '#4caf50' }} />
            ))} 
            {[...Array(totalStars - filledStars)].map((_, index) => (
              <StarOutlineSharpIcon key={index} sx={{ color: '#4caf50' }} />
            ))}
          </Box>
          <Typography variant='body2' sx={{ my: 2 }}>
            {comment}
          </Typography>
          <Typography variant='body2' className='font-semibold'>
            {name}
          </Typography>
          <Typography variant='body2' className='font-regular' sx={{ color: 'gray' }}>
            {date}
          </Typography>
        </Container>
      </Box>
    </Card>
  );
};

export default ReviewBox;
