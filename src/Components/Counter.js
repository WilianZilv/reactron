import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const styles = {
    all: {
        margin: 8,
    }
}

const Counter = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
            <Typography variant='h3' style={styles.all}>{state.counter}</Typography>
            <Button size='small' onClick={() => {
                actions.increase(1)
            }} style={styles.all} variant='contained' color='primary'>+</Button>
            <Button size='small' onClick={() => {
                actions.increase(-1)
            }} style={styles.all} variant='contained' color='primary'>-</Button>

            <Button size='small' variant='contained' color='primary' component={Link} to='/nothing/'>Nothing</Button>
        </Grid>
    );
};

export default Counter;
