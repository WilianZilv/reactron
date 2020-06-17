import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Nothing = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{padding: 16}} container direction='column' justify='center' alignContent='center' alignItems='center'>
            NOTHING ROUTE
            <Button style={{margin: 16}} size='small' variant='contained' color='primary' component={Link}
                    to='/'>Counter</Button>
        </Grid>
    );
};

export default Nothing;
