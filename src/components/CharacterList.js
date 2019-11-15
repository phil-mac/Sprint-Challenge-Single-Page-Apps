import React, { useEffect, useState } from "react";
import {Grid} from '@material-ui/core';
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
      <h2>TODO: `array.map()` over your state here!</h2>
      <Grid container>
        {characterList.map((character, index) => (
          <Grid item xs={4} key={index}>
            <img src={character.image} style={{width:'100%'}}/>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
