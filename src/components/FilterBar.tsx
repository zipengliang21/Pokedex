import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FilterBarDiv = styled.div`
  color: blue;
  position: fixed;
  left: 80%;
  top: 25px;

`
// inspired from https://stackoverflow.com/questions/59890203/filtering-select-drop-down-menu-to-filter-in-react


const FilterBar = () => {
    const [Type, setType] = useState("");

    // useEffect(() => {
    //     console.log('effect');
    //     // axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
    //     //     console.log(response);
    //     //     setCountries(response.data);
    //     // });
    // }, []);

    const handleSelect = (event:any) => {
        setType(event.target.value);
    };
    // const handleSelect = (event:any) => {
    //     setRegion(event.target.value);
    // };

    // Filter function

    // const filteredRegion = countries.filter((country) =>
    //     country.region.toLowerCase().includes(region.toLocaleLowerCase())
    // );
    //
    return (
        <FilterBarDiv>
            <FontAwesomeIcon icon = "filter" className="fas fa-filter"/>
            <select value={Type} onChange={handleSelect}>
                <option value='All'>All Types</option>
                <option value='Normal'>Normal</option>
                <option value='Fire'>Fire</option>
                <option value='Water'>Water</option>
                <option value='Grass'>Grass</option>
                <option value='Flying'>Flying</option>
                <option value='Fighting'>Fighting</option>
                <option value='Poison'>Poison</option>
                <option value='Electric'>Electric</option>
                <option value='Ground'>Ground</option>
                <option value='Rock'>Rock</option>
                <option value='Psychic'>Psychic</option>
                <option value='Ice'>Ice</option>
                <option value='Bug'>Bug</option>
                <option value='Ghost'>Ghost</option>
                <option value='Steel'>Steel</option>
                <option value='Dragon'>Dragon</option>
                <option value='Steel'>Steel</option>
                <option value='Dark'>Dark</option>
                <option value='Fairy'>Fairy</option>

            </select>
            
        </FilterBarDiv>
    );
};


export default FilterBar;

