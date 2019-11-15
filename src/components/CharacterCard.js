import React from "react";
import {Card, CardActionArea, CardMedia, CardContent, Typography, Zoom} from '@material-ui/core';
import styled from 'styled-components';

export default function CharacterCard(props) {

  const CustomCard = styled(Card)`&&{

    ${props.details && `width:400px;`}
    ${props.details && `height:600px;`}

    .cardMedia{
      min-height:240px;
      max-width:100%;

      ${props.details && `min-height:400px;`}
      /* ${props.details && `height:600px;`} */
    }
  }`

  return(
    <Zoom in={true} style={{ transitionDelay: true ? `${props.index * 100}ms` : '0ms' }}>
    <CustomCard onClick={props.openDetails}>
    {/* <Zoom in={true}> */}
        <CardActionArea>
          <CardMedia 
          image={props.info.image} 
          title='character from rick and morty'
          className='cardMedia' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.info.name}
            </Typography>
            {props.details &&
            <>
              <Typography variant='body1' color='textSecondary' component='p'>
                {props.info.species} - {props.info.gender}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                origin: {props.info.origin.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                location: {props.info.location.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                status: {props.info.status}
              </Typography>
            </>}
            
          </CardContent>
        </CardActionArea>
        {/* </Zoom> */}
      </CustomCard>
    </Zoom>
    
    // <p> hello </p>
  )
}
