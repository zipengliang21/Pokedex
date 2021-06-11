import React from 'react';
import styled from "styled-components";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(6),
            size: 'medium',
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
        HeightAll:true,
        HeightLittle: false,
        HeightMedium: false,
        HeightTall:false,
        WeightAll: true,
        WeightLight: false,
        WeightMedium: false,
        WeightHeavy: false,
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

    const { all, normal, fire, water, grass, flying, fighting, poison, electric,
        ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy,
        HeightAll, HeightLittle, HeightMedium, HeightTall,
        WeightAll, WeightLight, WeightMedium, WeightHeavy,
        allGR, fast, medium_fast, medium_slow, slow, fluctuating, erratic} = state;

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
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Height!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={HeightAll} onChange={handleChange} name="HeightAll" />}
                        label="All"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={HeightLittle} onChange={handleChange} name="HeightLittle" />}
                        label="Little"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={HeightMedium} onChange={handleChange} name="HeightMedium" />}
                        label="Medium"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={HeightTall} onChange={handleChange} name="HeightTall" />}
                        label="Tall"
                    />
                </FormGroup>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Weight!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={WeightAll} onChange={handleChange} name="WeightAll" />}
                        label="All"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={WeightLight} onChange={handleChange} name="WeightLight" />}
                        label="Light"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={WeightMedium} onChange={handleChange} name="WeightMedium" />}
                        label="Medium"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={WeightHeavy} onChange={handleChange} name="WeightHeavy" />}
                        label="Heavy"
                    />
                </FormGroup>
                {/*<SubmitButton type="button" onClick={handleSubmit}>Submit Filter</SubmitButton>*/}
            </FormControl>

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
                <Button variant="contained" color="secondary" onClick={handleSubmit}>
                    Submit
                </Button>
            </FormControl>

        </div>
    );
}
export default CheckBoxType;