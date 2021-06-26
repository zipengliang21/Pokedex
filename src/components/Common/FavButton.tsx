import React from "react";
import styled from "styled-components";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

interface FavProps{
    pId:number,
    pName:string,
}

const ButtonWrapper = styled.div`
`;

// const FavButton = styled.button`
//    display: inline-block;
//    font: inherit;
//    padding: 0px 5px;
//    cursor: pointer;
// `;

class FavButton extends React.Component<FavProps>{
    constructor(props:FavProps){
        super(props);
    }

    checkProps = (props: FavProps)=>{
        if(props.pId!==0&&props.pName!==""){
            return true;
        }
        return false;
    }

    render(){
        if(this.checkProps(this.props)){
            return(
                <ButtonWrapper>
                    <StarBorderIcon />
                </ButtonWrapper>
                
            )
        }
    };
}

export default FavButton;
