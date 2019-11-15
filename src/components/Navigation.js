import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import {AppBar, Container, Toolbar, Typography, Button} from '@material-ui/core';
import styled from 'styled-components';

export default () => {
    const AppBarFanPage = styled(AppBar)`&&{
        a{
            color: white;
            text-decoration: none;
        }

        .active{
            color: #CBD5E0;
        }
    }`

    return(
        <AppBarFanPage position='sticky' style={{marginBottom: '20px'}}>
            <Container maxWidth='md'>
                <Toolbar disableGutters>
                    <Typography variant='h6' style={{flexGrow:'1'}}>Rick and Morty API Project</Typography>
                    <NavLink exact to='/'>
                        <Button color='inherit'>Home</Button>
                    </NavLink>
                    <NavLink exact to='/characters'>
                        <Button color='inherit'>Characters</Button>
                    </NavLink>
                </Toolbar>
            </Container>
        </AppBarFanPage>
    )
}