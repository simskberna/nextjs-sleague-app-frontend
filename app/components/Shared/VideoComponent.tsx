'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import useIsMobile from '@/app/hooks/useIsMobile';

interface VideoProps {
    videoId: string;
}

const VideoComponent: React.FC<VideoProps> = ({videoId}) => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius:'7px',
        paddingBottom: '200px', 
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        backgroundColor: '#000',
      }}
    >
      <Container sx={{ width: {xs:'w-fit',md:'400px'},
          height: '200px',}}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        style={{ 
          top: '22px',
          left: isMobile ? '6px' : '35px', 
          right:'0px',
          bottom:'0px',
          position:'relative'
        }}
        title="YouTube Video"
      />
      </Container>
    </Box>
  );
};

export default VideoComponent;