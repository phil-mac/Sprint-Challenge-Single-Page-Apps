import React from "react";
import {Card, CardActionArea, CardMedia, CardContent, Typography, Zoom} from '@material-ui/core';

export default function CharacterCard(props) {
  return(
    <Card>
      <CardActionArea>
        <CardMedia 
        image={props.info.image} 
        title='character from rick and morty'
        style={{minHeight:'240px', maxWidth: '100%'}} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.info.name}
          </Typography>
          <Typography variant='body1' color='textSecondary' component='p'>
            {props.info.species} - {props.info.gender}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            origin: {props.info.origin.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            status: {props.info.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // <p> hello </p>
  )
}
