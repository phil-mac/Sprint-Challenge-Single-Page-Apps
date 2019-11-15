import React, {useState} from "react";
import {Route} from 'react-router-dom';
import {Container} from '@material-ui/core';

import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App() {
  
  
  return (
    <main>
      <Navigation />
      <Container maxWidth='md'>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' render={(props) => <CharacterList {...props}/>} />
      </Container>
    </main>
  );
}
