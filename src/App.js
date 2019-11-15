import React from "react";
import {Route, NavLink} from 'react-router-dom';

import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <CharacterList />
    </main>
  );
}
