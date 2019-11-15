import React, { useState } from "react";
import {Input} from '@material-ui/core';
import { flexbox } from "@material-ui/system";
import styled from 'styled-components';

export default function SearchForm(props) {
  
  const handleChange = e => {
    props.applySearch(e.target.value)
  }

  const SearchSection = styled.section`
    margin: 20px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
  `

  return (
    <SearchSection>
      <Input 
        type='search' 
        placeholder='Search...' 
        inputProps={{ 'aria-label': 'search' }} 
        onChange={handleChange}
      />
    </SearchSection>
  );
}
