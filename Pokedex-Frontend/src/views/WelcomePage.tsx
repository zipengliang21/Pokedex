import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SearchBar from "../components/Common/SearchBar";
import Pokemon from "../components/DetailedView/Pokemon";
import Fade from "react-reveal/Fade";
import ReactPaginate from "react-paginate";
import Spinner from "components/Common/Spinner";
import {useIntl} from "react-intl";

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

const WelcomePage = (props: any) => {
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPageList, setCurrentPageList] = useState<any>([]);
    const intl = useIntl();

    const loading = async () => {
        setIsLoading(true);
        setCurrentPageList(await props.getCurrentPageList(offset));
        setIsLoading(false);
    };

    useEffect(() => {
        loading();
    }, [offset]);

    const handlePageClick = async (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage);
        console.log(offset);
    };
    let data = <Spinner/>;
    if (currentPageList.length !== 0 && props.pokemonList.length !== 0 && !isLoading) {
        data = <div>
            <PokemonWrapper>
                <GroupWrapper>
                    {currentPageList.slice(0, 4).map((pokemon: any) => {
                        return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
                    })}
                </GroupWrapper>
                <GroupWrapper>
                    {currentPageList.slice(4, 8).map((pokemon: any) => {
                        return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
                    })}
                </GroupWrapper>
                <GroupWrapper>
                    {currentPageList.slice(8, 12).map((pokemon: any) => {
                        return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
                    })}
                </GroupWrapper>
                <GroupWrapper>
                    {currentPageList.slice(12, 16).map((pokemon: any) => {
                        return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
                    })}
                </GroupWrapper>
            </PokemonWrapper>
            <Fade bottom>
                <PaginationWrapper>
                    <ReactPaginate containerClassName="pagination"
                                   marginPagesDisplayed={2}
                                   pageCount={Math.ceil(props.pokemonList.length / 16)}
                                   pageRangeDisplayed={2}
                                   activeClassName={"active"}
                                   previousLabel={intl.formatMessage({id: "PrevPage"})}
                                   nextLabel={intl.formatMessage({id: "NextPage"})}
                                   previousClassName="previous"
                                   nextClassName="next"
                                   onPageChange={handlePageClick}
                                   forcePage={offset}/>
                </PaginationWrapper>
            </Fade>
        </div>;
    }

    return (
        <Wrapper>
            <SearchBar pokemonList={props.pokemonList}/>
            {data}
        </Wrapper>
    );
};

export default WelcomePage;