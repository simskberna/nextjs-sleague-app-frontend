"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'; 
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button'; 
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'; 
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,Link } from '@mui/material'; 
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    color:'black',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0), 
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function HeaderBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [pages] = useState([
      {name:'Home',path:'/'}, 
      {name:'LeagueStats',path:'/league-stats'},
      {name:'PlayerFocus',path:'/player-focus'}
    ]
  )  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }; 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" style={{boxShadow:'unset',background:'transparent',borderBottom:'1px solid #d9d9d9'}}>
      <Container maxWidth="xl" sx={{bgcolor:'white'}}>
        <Toolbar disableGutters sx={{display:'grid',gridTemplateColumns:{xs:'auto auto', md:'auto auto auto'}}}> 
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} 
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
             {pages.map((page) => (
              <Link key={page.name} underline="none" href={page.name.toLowerCase() === 'home' ? '/' : page.path}>
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}

            </Menu>
          </Box> 
        
          <Box sx={{px:4,py:2, display: { xs: 'none', md: 'flex',} }}>
          {pages.map((page) => (
            <Link key={page.name} underline="none" href={page.name.toLowerCase() === 'home' ? '/' : page.path}>
              <Button 
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    backgroundColor: 'white', 
                    color: '#0009'
                  },
                  cursor: 'pointer',
                  padding: 1,
                  borderRadius: 100,
                  my: 0,
                  color: 'black',
                  display: 'block',
                  marginBottom: '0px',
                  mx: 2
                }}
              >
                {page.name}
              </Button>
            </Link>
          ))} 
          </Box> 
          <Box sx={{ml:2}}>
            <Link href={'/'} underline="none" sx={{display:'flex',justifyContent:{xs:'end',md:'center'},alignItems:'center'}}>
            <Image src='/assets/logo.png' className='scale-up-on-hover' alt="Logo" width={40} height={40}/>
            </Link>
          </Box>
          <Container sx={{display:'flex',justifyContent:'center'}}>
          <Search sx={{display: { xs: 'none', md: 'flex'}}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> 
          <Box sx={{height:'auto',ml:2,display: { xs: 'none', md: 'flex'}}}>
            <Link href={'/'}  underline="none" className='p-2 group rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all hover:bg-black/5'>
              <Typography variant="body1" sx={{color:'black'}}>Join us</Typography>
              <EastIcon 
                  sx={{ color: 'black', width:'20px',transition: 'transform 0.3s' }} 
                  className='group-hover:translate-x-1'
                />
            </Link>
          </Box>
          <Box sx={{height:'auto',display: { xs: 'none', md: 'flex'}}}>
            <Link href={'/'} underline="none" className='p-2 group bg-[#4caf50] rounded-full flex items-center justify-center px-4 gap-2 hover:duration-300 hover:transition-all hover:bg-[#369b3d]'>
              <Typography variant="body1" sx={{color:'white'}}>Contact us</Typography>
              <EastIcon 
                  sx={{ color: 'white', transition: 'transform 0.3s' }} 
                  className='group-hover:translate-x-1'
                />
            </Link>
          </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default HeaderBar;