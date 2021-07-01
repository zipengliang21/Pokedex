import React, { useState,useRef} from 'react';
import styled from "styled-components";
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";
import SearchBar from "../components/Common/SearchBar";
import { useForm } from "react-hook-form";
import SelectType from "../components/SelectType";


const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
width: 850px;
      margin: 0 auto;
      background: inherit;
      text-align: center;
      .loadMore{
        margin: 50px auto;
      }
      @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 230px;
      }
`;

const PokemonWrapper = styled.div`
width: 750px;
min-height: 500px;
margin: 50px auto;
display: flex;
flex-direction: column;
text-align: center;
background: linear-gradient(63.06deg, #e2748b 0%, rgb(237.00,206.00, 213.00) 78.62%);
border: 2px solid #e9cee9;
@media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  form{
    display: inline-block;
    max-width:100%;
    min-width:80%;
    flex-direction:column;
    text-align:center;
    width:auto;
    margin-top: 3vh;
    fontFamily: inherit;
    color: black;
}
`;

const FormEntry = styled.div`
justify-item:center;
display:flex;
flex-direction:column;
text-align:center;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(140,140,140,0.8)
    // text-align: center;
`

const AdminAddPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => alert(JSON.stringify(data));
  
        return(
            <Background>
            <LogoutHeader /> 
            <NavBar/>
            <Wrapper>
                <SearchBar />
                <PokemonWrapper>
                <FormWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormEntry>
                    <label>Pokemon Name:</label>
                    <input type="text" placeholder="Test Name" style={{minWidth:"20vw",margin:"10px auto" }} {...register("Pokemon name", {required: true, maxLength: 30})} />
                    </FormEntry>
                    <FormEntry>
                    <label>Pokemon Picture:</label>
                    <input type="url" placeholder="Grass" style={{minWidth:"30vw",margin:"10px auto" }} {...register("Picture", {required: true})} />
                    </FormEntry>
                    <FormEntry>
                    <label>Pokemon Abilities:</label>
                    <input type="text" placeholder="Fire" style={{minWidth:"20vw",margin:"10px auto" }} {...register("Abilities", {required: true})} />
                    </FormEntry>
                    <FormEntry>
                    <label>Pokemon Type:</label>
                    <FilterWrapper>
                    <SelectType />
                    </FilterWrapper>
                    </FormEntry>
                    {/*<input type="submit" />*/}
                </form>
                </FormWrapper>
                </PokemonWrapper>
            </Wrapper>
            </Background>
        )

}

export default AdminAddPage;