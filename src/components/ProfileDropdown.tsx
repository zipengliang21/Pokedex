import React from 'react';
import styled from "styled-components";


//TODO: fix re-render after re-selection
//TODO: styling for selected items

const opList = ["Profile","Overview","Collection","Comments"];

const StyledHtmlSelect = styled.select`
        font-size: 17px;
        color: #80B2EC;
        padding-top: 18px;
        background: #212D3B;
        appearance: none;       
        margin: 0;
        overflow: visible !important;
        . option{
            color: #5758BB!important;
            padding-bottom: 3px;
            border-bottom: 3px solid #5758BB;
          }
        `;

class ProfileDropdown extends React.Component<{}, { entry: string }> {
    constructor(props:any){
        super(props);
        this.state = {
            entry:"",
        }
    }
    
    handleSelect(event:any){
        event.preventDefault();
        this.setState({ entry: event.target.value });
        window.location.href=event.target.value;
    }


    render() {
        return (
            <StyledHtmlSelect
              defaultValue={this.state.entry}
              onChange={event => this.handleSelect(event)}
            //   onClick={event => this.routeTaker(event)}
            >
              <option className="selected" value="/Pokemon/profile" >Profile</option>
              <option className="selected" value="/Pokemon/profile/Overview">Overview</option>
              <option className="selected" value="/Pokemon/profile/Collection">Collection</option>
              <option className="selected" value="Comments">Comments</option>
            </StyledHtmlSelect>
            )
    }

}
export default ProfileDropdown;