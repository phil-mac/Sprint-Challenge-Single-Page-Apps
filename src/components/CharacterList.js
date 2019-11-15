import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {Grid, Zoom} from '@material-ui/core';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const [characterList, setCharacterList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(characterList);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setCharacterList(data.results);
    })
  }, []);

  const applySearch = (text) => {
    setSearchText(text);
  }

  useEffect(() => {
    const results = characterList.filter(character => 
      character.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setSearchResults(results)
  }, [searchText, characterList])

  function openDetails() {
    props.history.push('/characters/details');
  }

  return (
    <section className="character-list">
      <h1>Characters</h1>
      <SearchForm applySearch={applySearch}/>
      <Grid container spacing={3}>
        {searchResults.map((character, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Zoom in={true} style={{ transitionDelay: true ? `${index * 100}ms` : '0ms' }}>
              <CharacterCard info={character} handleOpen={props.handleOpen} openDetails={openDetails}/>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
