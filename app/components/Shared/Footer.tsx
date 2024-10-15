import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Link from 'next/link'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { X as XIcon } from '@mui/icons-material';


const links = [
  { href: '#', label: 'About KickOff Central' },
  { href: '#', label: 'Our Soccer Services' },
  { href: '#', label: 'League Highlights' },
  { href: '#', label: 'Support & FAQs' },
  { href: '#', label: 'Contact Us' },
];
const socialMediaIcons = [
  {name:'X',url:'#',component:<XIcon />},
  {name:'Facebook',url:'#',component:<FacebookIcon />},
  {name:'Instagram',url:'#',component:<InstagramIcon />},
  {name:'Github',url:'#',component:<GitHubIcon />}
]

const Footer: React.FC = () => {
 
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        py: 3,
        position: 'relative',
        bottom: 0,
        width: '100%', 
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column',mt:{xs:2,sm:10},mb:{xs:2,md:10} }}>
        <Box sx={{ display: {xs:'grid',sm:'flex'},gridTemplateColumns:{xs:'auto auto',sm:'none'}, alignItems: {xs:'start',md:'center'}, justifyContent: 'center',gap:5,flexDirection:'row',flexWrap:{xs:'wrap',sm:'no-wrap'} }}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <Typography
                className="font-semibold"
                sx={{
                  mx: 2,
                  color: '#454d60',
                  '&:hover': { color: '#65bf65' },
                }}
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,mt:6,mb:"10px"}}> 
        {socialMediaIcons.map((item,index) => (
          <Link href={item.url} key={index} passHref>
          <IconButton
            className="group rounded-full"
            sx={{
              color:'black',
              p: 2,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#65bf65',
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            {item.component}
          </IconButton>
        </Link>

        ))}
        
         

        </Box>
        <Typography variant="body1" align="center" sx={{ color: '#475569', mt: 2 }}>
          © {new Date().getFullYear()} KickOff Central. All Rights Reserved. Your go-to hub for soccer insights and excitement.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
