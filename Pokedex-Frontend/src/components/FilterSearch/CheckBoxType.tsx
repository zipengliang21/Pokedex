import React, {useState, useEffect} from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Weight1 from "./weight1.png";
import Weight2 from "./weight2.png";
import Weight3 from "./weight3.png";
import Hei1 from "./height1.png";
import Hei2 from "./height2.png";
import Hei3 from "./height3.png";
import styled from "styled-components";



const Base = styled.div`
    display: flex;
    flex-direction: column;
    width: 850px;
    .spanSelect{
       display: inline-block;
       color: white;
       padding: 4px;
       font-size: 9px;
       font-family: Arial;
       width: 90px;
       height: 25px;
       box-shadow: 2px 4px 4px #888888;
       }
    .select-img{
     width: 90px;
     height: auto;
     margin-right: 5px;
     box-shadow: 2px 4px 4px #888888;
    }
    @media(max-width: 875px){
      width: 418px;
    }
    @media(max-width: 576px){
       width: 230px;
    }
`;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
       root: {
           flexGrow: 1,

       },
       formControl: {
           margin: theme.spacing(5, 'auto'),
          size: "medium",

       },
       submitButton: {
          marginLeft: "30px",
       },

    }),
);


function CheckBoxType(props: any) {
   const classes = useStyles();
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
      HeightTall: false,
      WeightLight: false,
      WeightMedium: false,
      WeightHeavy: false,

   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTypes({...types, [event.target.name]: event.target.checked});
   };

   const {
      normal, fire, water, grass, flying, fighting, poison, electric,
      ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy,
      HeightLittle, HeightMedium, HeightTall,
      WeightLight, WeightMedium, WeightHeavy,
   } = types;

   // const [{}] = filteredPokes;

   const handleSubmit = () => {
      props.handleTypes(types.normal, types.fire, types.water, types.grass, types.flying,
          types.fighting, types.poison, types.electric, types.ground, types.rock,
          types.psychic, types.ice, types.bug, types.ghost, types.steel,
          types.dragon, types.dark, types.fairy,
          types.HeightLittle, types.HeightMedium, types.HeightTall,
          types.WeightLight, types.WeightMedium, types.WeightHeavy);
   };

   return (
       <Base>
          <div className={classes.root}>
             <FormControl component="fieldset" className={classes.formControl}>
                <h2>Must Select a Type!</h2>
                <FormGroup>
                   <FormControlLabel
                       control={<Checkbox color="primary"  checked={normal} onChange={handleChange} name="normal"/>}
                       label={
                           <span className="spanSelect" style={{background:"#808080"}}> Normal </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={fire} onChange={handleChange} name="fire"/>}
                       label={
                           <span className="spanSelect" style={{background:"orange"}}> Fire </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={water} onChange={handleChange} name="water"/>}
                       label={
                           <span className="spanSelect" style={{background:"#33ccff"}}> Water </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={grass} onChange={handleChange} name="grass"/>}
                       label={
                           <span className="spanSelect" style={{background:"#00cc44"}}> Grass </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={flying} onChange={handleChange} name="flying"/>}
                       label={
                           <span className="spanSelect" style={{background: "linear-gradient(#33ccff, #808080)"}}> Flying </span>

                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={fighting} onChange={handleChange} name="fighting"/>}
                       label={
                           <span className="spanSelect" style={{background: " #cc5200"}}> Fighting </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={poison} onChange={handleChange} name="poison"/>}
                       label={
                           <span className="spanSelect" style={{background: "#800080"}}> Poison </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={electric} onChange={handleChange} name="electric"/>}
                       label={
                           <span className="spanSelect" style={{background: "#ffd11a", color:"black"}}> Electric </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={ground} onChange={handleChange} name="ground"/>}
                       label={
                           <span className="spanSelect" style={{background: "linear-gradient(#ffd11a, #808080)"}}> Ground </span>
                       }
                   />
                </FormGroup>
             </FormControl>
             <FormControl component="fieldset" className={classes.formControl}>
                <h2>Must Select a Type!</h2>
                <FormGroup>
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={rock} onChange={handleChange} name="rock"/>}
                       label={
                           <span className="spanSelect" style={{background: "#77773c"}}> Rock </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={psychic} onChange={handleChange} name="psychic"/>}
                       label={
                           <span className="spanSelect" style={{background: "#cc0066"}}> Phychic </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={ice} onChange={handleChange} name="ice"/>}
                       label={
                           <span className="spanSelect" style={{background: "#00ffff", color:"black"}}> Ice </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={bug} onChange={handleChange} name="bug"/>}
                       label={
                           <span className="spanSelect" style={{background: "#408000"}}> Bug </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={ghost} onChange={handleChange} name="ghost"/>}
                       label={
                           <span className="spanSelect" style={{background: "#b366ff"}}> Ghost </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={steel} onChange={handleChange} name="steel"/>}
                       label={
                           <span className="spanSelect" style={{background: "#808080"}}> Steel </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={dragon} onChange={handleChange} name="dragon"/>}
                       label={
                           <span className="spanSelect" style={{background: "linear-gradient(#e66465, #9198e5)"}}> Dragon </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={dark} onChange={handleChange} name="dark"/>}
                       label={
                           <span className="spanSelect" style={{background: "#3d3d5c"}}> Dark </span>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={fairy} onChange={handleChange} name="fairy"/>}
                       label={
                           <span className="spanSelect" style={{background: "#ff80ff"}}> Fairy </span>
                       }
                   />
                </FormGroup>
             </FormControl>


             <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Height!</h2>
                <FormGroup>
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={HeightLittle} onChange={handleChange} name="HeightLittle"/>}
                       label={
                          <img src={Hei1} className="select-img" alt="no"/>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={HeightMedium} onChange={handleChange} name="HeightMedium"/>}
                       label={
                          <img src={Hei2} className="select-img" alt="no"/>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={HeightTall} onChange={handleChange} name="HeightTall"/>}
                       label={
                          <img src={Hei3} className="select-img" alt="no"/>
                       }
                   />
                </FormGroup>
             </FormControl>

             <FormControl component="fieldset" className={classes.formControl}>
                <h2>Select Weight!</h2>
                <FormGroup>
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={WeightLight} onChange={handleChange} name="WeightLight"/>}
                       label={
                          <img src={Weight1} className="select-img" alt="no"/>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={WeightMedium} onChange={handleChange} name="WeightMedium"/>}
                       label={
                          <img src={Weight2} className="select-img" alt="no"/>
                       }
                   />
                   <FormControlLabel
                       control={<Checkbox color="primary" checked={WeightHeavy} onChange={handleChange} name="WeightHeavy"/>}
                       label={
                          <img src={Weight3} className="select-img" alt="no"/>
                       }
                   />
                </FormGroup>

             </FormControl>


          </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
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
