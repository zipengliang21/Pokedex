import React, {useState, useEffect} from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import BugType from './FilterSearch/BugType.png';
import Dragon from './FilterSearch/Dragon.png';
import Ghost from './FilterSearch/ghost.png';
import FlyingType from './FilterSearch/FlyingType.png';
import WaterType from './FilterSearch/WaterType.png';
import DarkType from './FilterSearch/DarkType.png';
import EleType from'./FilterSearch/EleType.png';
import FightingType from './FilterSearch/FightingType.png';
import FireType from './FilterSearch/FireType.png';
import FairyType from './FilterSearch/FireType.png';
import PhyType from "./FilterSearch/PhyType.png";
import PoisonType from './FilterSearch/PoisonType.png';
import NormalType from './FilterSearch/NormalType.png';
import GroundType from './FilterSearch/GroundType.png';
import IceType from './FilterSearch/IceType.png';
import RockType from './FilterSearch/RockType.png';
import SteelType from './FilterSearch/SteelType.png';
import GrassType from './FilterSearch/GrassType.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(5),
            size: 'medium',
        },

    }),
);

function SelectType(props:any) {
    const classes = useStyles();
    const [type, setType] = useState({
        // all: true,
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
        setType({ ...type, [event.target.name]: event.target.checked });
    };

    const { normal, fire, water, grass, flying, fighting, poison, electric,
        ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy,
    } = type;

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
                        control={<Checkbox checked={normal} onChange={handleChange} name="normal" />}
                        label={
                            <img src={NormalType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fire} onChange={handleChange} name="fire" />}
                        label={
                            <img src={FireType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={water} onChange={handleChange} name="water" />}
                        label={
                            <img src={WaterType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={grass} onChange={handleChange} name="grass" />}
                        label={
                            <img src={GrassType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={flying} onChange={handleChange} name="flying" />}
                        label={
                            <img src={FlyingType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fighting} onChange={handleChange} name="fighting" />}
                        label={
                            <img src={FightingType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={poison} onChange={handleChange} name="poison" />}
                        label={
                            <img src={PoisonType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={electric} onChange={handleChange} name="electric" />}
                        label={
                            <img src={EleType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ground} onChange={handleChange} name="ground" />}
                        label={
                            <img src={GroundType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Type!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={rock} onChange={handleChange} name="rock" />}
                        label={
                            <img src={RockType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={psychic} onChange={handleChange} name="psychic" />}
                        label={
                            <img src={PhyType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ice} onChange={handleChange} name="ice" />}
                        label={
                            <img src={IceType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={bug} onChange={handleChange} name="bug" />}
                        label={
                            <img src={BugType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ghost} onChange={handleChange} name="ghost" />}
                        label={
                            <img src={Ghost} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={steel} onChange={handleChange} name="steel" />}
                        label={
                            <img src={SteelType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dragon} onChange={handleChange} name="dragon" />}
                        label={
                            <img src={Dragon} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dark} onChange={handleChange} name="dark" />}
                        label={
                            <img src={DarkType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fairy} onChange={handleChange} name="fairy" />}
                        label={
                            <img src={FairyType} className="profile-img" width="90px" height="auto" style={{ marginRight: "5px" }} />
                        }
                    />
                </FormGroup>
            </FormControl>
            </div>
    )
}

export default SelectType;