import React from "react";
import HomeCardNode from "./HomeCardNode";
import styled from "styled-components";

const DefaultPoke = [{
    _id: {"$oid": "60bd83082ae4121e30eb1a84"},
    Pokemon: "Bulbasaur",
    Artwork: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    Pokedex_Data: {
        National_No: {"$numberInt": "1"},
        "Type": ["Grass", "Poison"],
        "Species": "Seed Pokemon",
    }
},
    {
        _id: {"$oid": "60bd83082ae4121e30eb1a85"},
        Pokemon: "Ivysaur",
        Artwork: "http://img.pokemondb.net/artwork/ivysaur.jpg",
        Pokedex_Data: {
            National_No: {"$numberInt": "2"},
            Type: "Grass and Poison",
            Species: "Seed Pokemon",
        }
    },
    {
        _id: {"$oid": "60bd83082ae4121e30eb1a86"},
        Pokemon: "Venusaur",
        Artwork: "http://img.pokemondb.net/artwork/venusaur.jpg",
        Pokedex_Data: {
            National_No: {"$numberInt": "3"},
            Type: ["Grass", "Poison"],
            Species: "Seed Pokemon"
        }
    },
    {
        _id: {"$oid": "60bd83082ae4121e30eb1a87"},
        Pokemon: "Charmander",
        Artwork: "http://img.pokemondb.net/artwork/charmander.jpg",
        Pokedex_Data: {National_No: {"$numberInt": "4"}, Type: ["Fire"], Species: "Lizard Pokemon"}
    },
    {
        _id: {"$oid": "60bd83082ae4121e30eb1a88"},
        Pokemon: "Charmeleon",
        Artwork: "http://img.pokemondb.net/artwork/charmeleon.jpg",
        Pokedex_Data: {National_No: {"$numberInt": "5"}, Type: ["Fire"], Species: "Flame Pokemon"}
    },
    {
        _id: {"$oid": "60bd83082ae4121e30eb1a89"},
        Pokemon: "Charizard",
        Artwork: "http://img.pokemondb.net/artwork/charmeleon.jpg",
        Pokedex_Data: {National_No: {"$numberInt": "6"}, Type: ["Fire", "Flying"], Species: "Flame Pokemon"}
    },
]


const HomeListPokemon = () => {
    // const [Key, setKey] = useState("");
    return (
        <div>
            {        DefaultPoke.map((card, index) => {
                    return (
                        <div className='cards'>
                            <HomeCardNode
                                key={index}
                                name={card.Pokemon}
                                Type={card.Pokedex_Data.Type}
                                Species={card.Pokedex_Data.Species}
                                Artwork={card.Artwork}
                            />
                        </div>

                    )
                }
            )}
        </div>
    )

};
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

export default HomeListPokemon;
