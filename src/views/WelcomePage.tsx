import React, {useState} from "react";
import styled from "styled-components";
import SearchBar from "../components/Common/SearchBar";
import Pokemon from "../components/DetailedView/Pokemon";
import {Button} from "../components/Button";
import Fade from "react-reveal/Fade";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ReactPaginate from "react-paginate";
import Spinner from "components/Spinner";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
      width: 850px;
      min-height: 800px;
      margin: 0 auto;
      background: inherit;
      text-align: center;
      .loadMore{
        margin: 50px auto;
      }
      .pagination{
        margin: 50px auto;
        display: flex;
        outline: none;
      }
      .pagination > .active > a{
        background-color: #3F51B5 ;
        border-color: #EAEAEA ;
        color: #EAEAEA;
      }
      .pagination > li > a{
        margin: 1px;
        border-radius: 5px;
        color: #3F51B5;
        padding: 3px 12px;
        outline: none;
        cursor: pointer;
        font-weight: 600;
      } 
      .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
        background-color: #3F51B5 ;
        border:1px solid #3F51B5;
      }
      .previous{
        margin-right: 10px;
      }
      .next{
        margin-left: 10px;
      }
      @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 100%;
      }
`;

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const PokemonWrapper = styled.div`
    background: white;
    width: 750px;
    max-width: 100%;
    margin: 0 auto;
    padding: 15px;
    @media(max-width: 875px){
      width: 418px;
      //padding: 0 40px;
    }
`;

const GroupWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin: 10px auto;
    text-align: center;
    @media(max-width: 576px){
      width: 100%;
      margin: 0 auto;
    }     
    @media(max-width: 320px){
      justify-content: center;
      margin: 0 auto;
    }     
`;

const WelcomePage = ({pokemonList}: any) => {
   const [offset, setOffset] = useState(0);
   const handlePageClick = (e: any) => {
      const selectedPage = e.selected;
      console.log(selectedPage + 1);
      setOffset(selectedPage);
   };
   let data = <Spinner/>;
   if (pokemonList.length !== 0) {
      data = <div>
         <PokemonWrapper>
            <GroupWrapper>
               {pokemonList.slice(offset * 16, offset * 16 + 4).map((pokemon: any) => {
                  return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
               })}
            </GroupWrapper>
            <GroupWrapper>
               {pokemonList.slice(offset * 16 + 4, offset * 16 + 8).map((pokemon: any) => {
                  return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
               })}
            </GroupWrapper>
            <GroupWrapper>
               {pokemonList.slice(offset * 16 + 8, offset * 16 + 12).map((pokemon: any) => {
                  return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
               })}
            </GroupWrapper>
            <GroupWrapper>
               {pokemonList.slice(offset * 16 + 12, offset * 16 + 16).map((pokemon: any) => {
                  return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
               })}
            </GroupWrapper>
         </PokemonWrapper>
         <Fade bottom>
            {/*<Button className="loadMore">Load More Pokemon</Button>*/}
            <PaginationWrapper>
               <ReactPaginate containerClassName="pagination"
                              marginPagesDisplayed={2}
                              pageCount={Math.ceil(pokemonList.length/16)}
                              pageRangeDisplayed={2}
                              activeClassName={"active"}
                              previousLabel="Prev"
                              nextLabel="Next"
                              previousClassName="previous"
                              nextClassName="next"
                              onPageChange={handlePageClick}/>
            </PaginationWrapper>
         </Fade>
      </div>;
   }

   return (
       <Background>
          <Wrapper>
             <Header/>
             <NavBar/>
             <SearchBar pokemonList = {pokemonList}/>
             {data}
          </Wrapper>
       </Background>
   );
};

export default WelcomePage;