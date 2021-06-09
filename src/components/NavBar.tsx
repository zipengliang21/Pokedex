import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const NavBarWrapper = styled.header`
    width: 236px;
    //position: fixed;
    //left: 0;
    height: 100vh;
    background: #212D3B;
    border: solid 1px #212D3B;
    top: var(--ytd-masthead-height, 0px);
    //bottom: 0;
    -webkit-animation: slideIn 1s forwards;
    -moz-animation: slideIn 1s forwards;
    animation: slideIn 1s forwards;
`;

const NavBarMenu = styled.ul`
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

const HideSidebarButton = styled.button`
    background-color: #80B2EC;
    color: #ffffff;
    border: none;
    height: 40px;
    margin-bottom: 40px;
`;

const MenuText = styled.li`
    //font-weight: 600;
    font-size: 17px;
    color: #80B2EC;
    padding-top: 18px;
    margin: 0 0 0 50px;
    .selected{
      color: #5758BB!important;
      padding-bottom: 3px;
      border-bottom: 3px solid #5758BB;
    }
    svg{
      margin-right: 5px;
    }
    .arrow{
      margin-left: 25px
    }
    
`;

const NavBar = (props: any) => (
    <NavBarWrapper>
       <NavBarMenu>
          <HideSidebarButton id='hidebutton' onClick={props.HideSideBarButton}><span>☰</span></HideSidebarButton>
          <div className="account">
             <NavLink exact to="/">Account</NavLink>
          </div>
          <MenuText>
             <NavLink exact activeClassName="selected" to="/">
                <FontAwesomeIcon icon="home"/>
                <span>home</span>
                <FontAwesomeIcon icon="angle-up" className="arrow"/>
             </NavLink >
          </MenuText>
          <MenuText>
             <NavLink exact activeClassName="selected" to="/profile">
                <FontAwesomeIcon icon="address-card"  />
                <span>Profile</span>
                <FontAwesomeIcon icon="angle-up" className="arrow"/>
             </NavLink >
          </MenuText>
          <MenuText>
             <NavLink exact activeClassName="selected" to="/filterSearch">
                <FontAwesomeIcon icon="search"  />
                <span>Filter Search</span>
                <FontAwesomeIcon icon="angle-up" className="arrow"/>
             </NavLink >
          </MenuText>
          <MenuText>
             <NavLink exact activeClassName="selected" to="/pokemonComments">
                <FontAwesomeIcon icon="comment"/>
                <span>
                   <span>Pokemon</span>
                   <div>Comments <FontAwesomeIcon icon="angle-up" className="arrow"/></div>
                </span>
             </NavLink >
          </MenuText>
       </NavBarMenu>
    </NavBarWrapper>
);

export default NavBar;

