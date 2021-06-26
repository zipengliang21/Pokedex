import React, {useState, useEffect} from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import BugType from './BugType.png';
import Dragon from './Dragon.png';
import Ghost from './ghost.png';
import FlyingType from './FlyingType.png';
import WaterType from './WaterType.png';
import DarkType from './DarkType.png';
import EleType from'./EleType.png';
import FightingType from './FightingType.png';
import FireType from './FireType.png';
import FairyType from './FairyType.png';
import PhyType from "./PhyType.png";
import PoisonType from './PoisonType.png';
import NormalType from './NormalType.png';
import GroundType from './GroundType.png';
import IceType from './IceType.png';
import RockType from './RockType.png';
import SteelType from './SteelType.png';
import GrassType from './GrassType.png';
// import PokemonData from "../../pokedexData.json";
import Weight1 from './weight1.png';
import Weight2 from './weight2.png';
import Weight3 from './weight3.png';
import Hei1 from './height1.png';
import Hei2 from './height2.png';
import Hei3 from './height3.png';
import Fade from "react-reveal/Fade";
import Pokemon from "../DetailedView/Pokemon";
import styled from "styled-components";

// const PokemonWrapper = styled.div`
//     flex: 1;
//     width: 700px;
//     max-width: 100%;
//     margin: 0 auto;
//     @media(max-width: 875px){
//       width: 418px;
//       padding: 0 30px;
//     }
// `;

const Base = styled.div`
    display: flex;
    flex-direction: column;
    width: 850px;
    @media(max-width: 850px){
      width: 418px;
      padding: 0 30px;
    }
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(5),
            size: 'medium',
        },
        submitButton:{
            marginLeft:"30px",
        }

    }),
);


function CheckBoxType(props:any) {
    const classes = useStyles();
    // const [filteredPokes, setFilteredPokes] = useState([{id: "",
    //     name: "",
    //     img: "",
    //     type: [
    //         ""
    //     ]}]);
    const [types, setTypes] = useState({
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
        HeightLittle: false,
        HeightMedium: false,
        HeightTall:false,
        WeightLight: false,
        WeightMedium: false,
        WeightHeavy: false,

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypes({ ...types, [event.target.name]: event.target.checked });
    };

    const { normal, fire, water, grass, flying, fighting, poison, electric,
        ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy,
        HeightLittle, HeightMedium, HeightTall,
        WeightLight, WeightMedium, WeightHeavy,
    } = types;

    // const [{}] = filteredPokes;

    const handleSubmit = () =>{
        props.handleTypes (types.normal, types.fire, types.water, types.grass, types.flying,
            types.fighting, types.poison, types.electric, types.ground, types.rock,
            types.psychic, types.ice, types.bug, types.ghost, types.steel,
            types.dragon, types.dark, types.fairy,
            types.HeightLittle, types.HeightMedium, types.HeightTall,
            types.WeightLight, types.WeightMedium, types.WeightHeavy);
    }

    return (
        <Base>
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Must Select a Type!</h2>
                <FormGroup>
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox checked={all} onChange={handleChange} name="all" />}*/}
                    {/*    label="All"*/}
                    {/*/>*/}
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
                <h2>Select a Type!</h2>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={rock} onChange={handleChange} name="rock" />}
                        label={
                            <img src={RockType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={psychic} onChange={handleChange} name="psychic" />}
                        label={
                            <img src={PhyType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ice} onChange={handleChange} name="ice" />}
                        label={
                            <img src={IceType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={bug} onChange={handleChange} name="bug" />}
                        label={
                            <img src={BugType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ghost} onChange={handleChange} name="ghost" />}
                        label={
                            <img src={Ghost} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={steel} onChange={handleChange} name="steel" />}
                        label={
                            <img src={SteelType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dragon} onChange={handleChange} name="dragon" />}
                        label={
                            <img src={Dragon} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dark} onChange={handleChange} name="dark" />}
                        label={
                            <img src={DarkType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={fairy} onChange={handleChange} name="fairy" />}
                        label={
                            <img src={FairyType} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                </FormGroup>
            </FormControl>


            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Height!</h2>
                <FormGroup>
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox checked={HeightAll} onChange={handleChange} name="HeightAll" />}*/}
                    {/*    label="All"*/}
                    {/*/>*/}
                    <FormControlLabel
                        control={<Checkbox checked={HeightLittle} onChange={handleChange} name="HeightLittle" />}
                        label={
                            <img src={Hei1} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={HeightMedium} onChange={handleChange} name="HeightMedium" />}
                        label={
                            <img src={Hei2} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={HeightTall} onChange={handleChange} name="HeightTall" />}
                        label={
                            <img src={Hei3} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                </FormGroup>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Weight!</h2>
                <FormGroup>
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox checked={WeightAll} onChange={handleChange} name="WeightAll" />}*/}
                    {/*    label="All"*/}
                    {/*/>*/}
                    <FormControlLabel
                        control={<Checkbox checked={WeightLight} onChange={handleChange}  name="WeightLight" />}
                        label={
                            <img src={Weight1} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={WeightMedium} onChange={handleChange} name="WeightMedium" />}
                        label={
                            <img src={Weight2} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                    <FormControlLabel
                        control={<Checkbox checked={WeightHeavy} onChange={handleChange} name="WeightHeavy" />}
                        label={
                            <img src={Weight3} className="profile-img" width="90px" height="auto" alt = "no" style={{ marginRight: "5px" }} />
                        }
                    />
                </FormGroup>

            </FormControl>


        </div>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
                Submit
            </Button>
        </Base>
    // <PokemonWrapper>
    //     {filteredPokes.map((pokemon, index) => {
    //         return  <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
    //     })}
    // </PokemonWrapper>
    );

}
export default CheckBoxType;
