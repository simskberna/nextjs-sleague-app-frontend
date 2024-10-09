'use client'
import { Container } from "@mui/material"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from "./(routes)/home/page";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{height:'auto',p:0}}>  
      <HomePage/>
    </Container>
    </ThemeProvider>
  );
}
