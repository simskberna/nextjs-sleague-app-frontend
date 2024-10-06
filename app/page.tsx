'use client'
import { Container } from "@mui/material";
import Landing from "./components/Landing";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{height:'auto'}}>  
      <Landing/> 
    </Container>
    </ThemeProvider>
  );
}
