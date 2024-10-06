"use client"
import React from 'react';
import { Box, AppBar, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

const pagesData = [
  {
    title: 'Title',
    pages: ['Page 1', 'Page 2'],
  },
  {
    title: 'Title 2',
    pages: ['Page 2', 'Page 3'],
  },
  {
    title: 'Title 3',
    pages: ['Page 4', 'Page 5'],
  },
];

const FooterBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky' sx={{ bgcolor: '#323232', borderTop: '1px solid white' }}>
        <Container sx={{ width: '100%', py: 5, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Typography sx={{ textAlign: 'center', width: '25%' }}>
            A Chance not to miss anything about NWSL Teams...
          </Typography>
          {pagesData.map(({ title, pages }) => (
            <Box key={title} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    textAlign: 'center',
                    color: '#92e9cf',
                    cursor: 'pointer',
                    '&:hover': { color: '#468270' },
                  }}
                >
                  {page}
                </Typography>
              ))}
            </Box>
          ))}
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default FooterBar;
