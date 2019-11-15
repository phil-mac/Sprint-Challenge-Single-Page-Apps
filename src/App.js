import React, {useState} from "react";
import {Route} from 'react-router-dom';
import {Container} from '@material-ui/core';

import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';


export default function App(p) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log('open dialog');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <main>
      <Navigation />
      <Container maxWidth='md'>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' render={(props) => <CharacterList {...props} handleOpen={handleOpen}/>} />
        <Route path='/characters/details' render={props => <CharacterDetails {...props} open={open} handleClose={handleClose}/>} />
      </Container>
    </main>
  );
}
