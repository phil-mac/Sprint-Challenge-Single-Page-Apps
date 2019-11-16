import React from 'react';
import {Dialog} from '@material-ui/core';

import CharacterCard from './CharacterCard';

export default (props) => {
    const handleClose = () => {
        props.history.push(`/characters`);
        props.handleClose();
      };

    console.log('props open' + props.open);

    const id = parseInt(props.match.params.id);

    return(
        <Dialog onClose={handleClose} open={props.open}>
            <CharacterCard details={true} info={props.characterList[id-1]}/>
        </Dialog>
    )
}