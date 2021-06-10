import React from 'react';
import styled from "styled-components";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

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

function CheckBoxType(props:any) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        all: true,
        normal: false,
        fire: false,
        water: false,
        grass: false,
        flying: false,
        fighting: false,
        poison: false,
        electric: false,
        ground: false,
        rock: false,
        psychic: false,
        ice: false,
        bug: false,
        ghost: false,
        steel: false,
        dragon: false,
        dark: false,
        fairy: false,

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { all, normal, fire, water, grass, flying, fighting, poison, electric,
        ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy} = state;

    const handleSubmit = () =>{
        // props.tyfilter(state.all,state.normal,state.fire, state.water, state.grass, state.flying, state.fighting,
        //     state.poison, state.electric, state.ground, state.rock, state.psychic, state.ice, state.bug, state.ghost,
        //     state.dark, state.fairy);
    }

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Type!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={all} onChange={handleChange} name="all" />}
                        label="All"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={normal} onChange={handleChange} name="normal" />}
                        label="Normal"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fire} onChange={handleChange} name="fire" />}
                        label="Fire"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={water} onChange={handleChange} name="water" />}
                        label="Water"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={grass} onChange={handleChange} name="grass" />}
                        label="Grass"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={flying} onChange={handleChange} name="flying" />}
                        label="Flying"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fighting} onChange={handleChange} name="fighting" />}
                        label="Fighting"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={poison} onChange={handleChange} name="poison" />}
                        label="Poison"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={electric} onChange={handleChange} name="electric" />}
                        label="Electric"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ground} onChange={handleChange} name="ground" />}
                        label="Ground"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={rock} onChange={handleChange} name="rock" />}
                        label="Rock"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={psychic} onChange={handleChange} name="psychic" />}
                        label="Psychic"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ice} onChange={handleChange} name="ice" />}
                        label="Ice"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={bug} onChange={handleChange} name="bug" />}
                        label="Bug"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ghost} onChange={handleChange} name="ghost" />}
                        label="Ghost"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={steel} onChange={handleChange} name="steel" />}
                        label="Steel"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dragon} onChange={handleChange} name="dragon" />}
                        label="Dragon"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dark} onChange={handleChange} name="dark" />}
                        label="Dark"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fairy} onChange={handleChange} name="fairy" />}
                        label="Fairy"
                    />
                </FormGroup>
                <button type="button" onClick={handleSubmit}>Submit Type Filter</button>
            </FormControl>
        </div>
    );
}
export default CheckBoxType;