import React from "react";
import HomeListPokemon from "./HomeListPokemon";
import styled from "styled-components";

const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    .account{
       font-weight: 600;
       font-size: 20px;
       color: #80B2EC;
       text-align: center;
       margin-bottom: 20px;
    }
`;

const HomePokemon = () => {
    return (
        <HomeCard>
            <HomeListPokemon/>
        </HomeCard>
    )

}
export default HomePokemon;