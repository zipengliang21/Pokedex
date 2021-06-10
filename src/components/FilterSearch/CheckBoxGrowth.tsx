import React from 'react';
import styled from "styled-components";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {orange} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(6),
        },
    }),
);

function CheckBoxGrowth(props:any) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        allGR: true,
        fast: false,
        medium_fast: false,
        medium_slow: false,
        slow: false,
        fluctuating: false,
        erratic: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSubmit = () =>{
        // props.grfilter(state.allGR,state.fast,state.medium_fast,state.medium_slow, state.slow, state.fluctuating, state.erratic);
    }

    const { allGR, fast, medium_fast, medium_slow, slow, fluctuating, erratic } = state;
    // const error = [fast, medium_fast, medium_slow].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Growth Rate!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={allGR} onChange={handleChange} name="allGR" />}
                        label="All"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fast} onChange={handleChange} name="fast" />}
                        label="Fast"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={medium_fast} onChange={handleChange} name="medium_fast" />}
                        label="Medium Fast"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={medium_slow} onChange={handleChange} name="medium_slow" />}
                        label="Medium Slow"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={slow} onChange={handleChange} name="slow" />}
                        label="Slow"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fluctuating} onChange={handleChange} name="fluctuating" />}
                        label="Fluctuating"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={erratic} onChange={handleChange} name="erratic" />}
                        label="Erratic"
                    />
                </FormGroup>
                <button type="button" onClick={handleSubmit}>Submit Growth Rate Filter</button>
                {/*<FormHelperText>Be careful</FormHelperText>*/}
            </FormControl>
        </div>
    );
}



export default CheckBoxGrowth;
