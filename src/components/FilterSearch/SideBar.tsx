import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const NavBarWrapper = styled.header`
    width: 256px;
    min-width: 256px;
    max-width: 256px;
     height: 100vh;
    background: #212D3B;
    border: solid 1px #212D3B;
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

const SideBar = (props: any) => (
    <NavBarWrapper>
       <NavBarMenu>
          <HideSidebarButton id='hideButton' onClick={props.HideSideBarButton}><span>☰</span></HideSidebarButton>
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
                   <span>Forum</span><FontAwesomeIcon icon="angle-up" className="arrow"/>
                </span>
             </NavLink >
          </MenuText>
       </NavBarMenu>
    </NavBarWrapper>
);

export default SideBar;

