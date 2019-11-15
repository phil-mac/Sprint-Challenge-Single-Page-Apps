import React, { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import {Grid} from '@material-ui/core';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';

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


  //---

  function openDetails(id) {
    props.history.push(`/characters/${id}`);
    handleOpen();
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log('open dialog');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <section className="character-list">
      <h1>Characters</h1>
      <SearchForm applySearch={applySearch}/>
      <Grid container spacing={3}>
        {searchResults.map((character, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <CharacterCard info={character} index={index} openDetails={() => openDetails(character.id)}/>
          </Grid>
        ))}
      </Grid>

      <Route path='/characters/:id' render={props => <CharacterDetails {...props} open={open} handleClose={handleClose} characterList={characterList}/>} />

    </section>
  );
}
