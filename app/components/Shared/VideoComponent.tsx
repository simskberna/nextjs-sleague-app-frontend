import React from 'react';
import { Box, Container } from '@mui/material';

interface VideoProps {
    videoId: string;
}

const VideoComponent: React.FC<VideoProps> = ({videoId}) => {
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
          top: 20,
          left: 50, 
        }}
        title="YouTube Video"
      />
      </Container>
    </Box>
  );
};

export default VideoComponent;