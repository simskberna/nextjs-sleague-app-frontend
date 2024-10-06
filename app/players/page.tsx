import React from 'react'
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'; 

const PlayersPage = () => {
  const players = [
    {name:'Alex Morgan',image:'../public/assets/alex-morgan.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Forward'},
    {name:'Tobin Heath',image:'../public/assets/tobin-heath.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Midfielder'},
    {name:'Alex Morgan',image:'../public/assets/alex-morgan.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Forward'},
    {name:'Tobin Heath',image:'../public/assets/tobin-heath.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Midfielder'},
    {name:'Alex Morgan',image:'../public/assets/alex-morgan.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Forward'},
    {name:'Tobin Heath',image:'../public/assets/tobin-heath.webp',description:' Player\'s bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',pos:'Midfielder'},
  ]
  return (
    <Container maxWidth="xl" sx={{height:'90vh',display:'grid', gridTemplateColumns:{xs:'auto auto',md:'auto auto auto',lg:'auto auto auto auto'},gap:5,p:10}}>
      {players.map((player,index) => <Card key={index} sx={{ maxWidth: 345,height:'250px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={player.image}
          alt={player.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {player.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {player.pos}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {player.description}
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>)}
    </Container> 
  )
}

export default PlayersPage
