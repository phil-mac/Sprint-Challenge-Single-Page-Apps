import React, { useEffect, useState } from "react";
import {Grid, Zoom} from '@material-ui/core';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setCharacterList(data.results);
    })
  }, []);

  return (
    <section className="character-list">
      <h1>Characters</h1>
      <Grid container spacing={3}>
        {characterList.map((character, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Zoom in={true} style={{transitionDelay: true ? `${index * 100}ms` : '0ms'}}>
              <CharacterCard info={character} />
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
