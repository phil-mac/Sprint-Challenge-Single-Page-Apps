import React, { useState } from "react";
import {TextField, Input} from '@material-ui/core';

export default function SearchForm(props) {
  
  const handleChange = e => {
    console.log(e.target.value);
    props.applySearch(e.target.value)
  }

  return (
    <section style={{marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
      <TextField
        id="filled-basic"
        label="Search"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
    </section>
  );
}
