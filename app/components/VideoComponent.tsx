import React from 'react';
import { Box } from '@mui/material';

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
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        style={{ 
          top: 0,
          left: 0,
          width: '400px',
          height: '200px',
        }}
        title="YouTube Video"
      />
    </Box>
  );
};

export default VideoComponent;