import React, {useState} from 'react';
import {Typography, Paper, Button, Dialog} from '@material-ui/core';

export default (props) => {
    const handleClose = () => {
        props.handleClose();
      };

    console.log('props open' + props.open);

    const [dOpen, setDOpen] = useState(true);


    return(
        <Dialog onClose={props.handleClose} open={dOpen}>
            <Paper style={{padding:'20px'}}>
                <Typography variant='h4'>Details</Typography>
                <Button onClick={() => setDOpen(false)}>X</Button>
            </Paper>
        </Dialog>
    )
}