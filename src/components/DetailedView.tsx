import React from "react";
import styled from "styled-components";


const Popup =  styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

`
const Popup_inner =  styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background-image: url("https://img.52lishi.com/m00/41/3c/b3f03cde344966fb51a843d66ddc42d3.jpg");
  background-size: cover;

`

const DetailImag =  styled.img`
   width: 20%;
  height: 20%;
  border: 3px solid orange;

`



function DetailedView  (props: any) {


        return (
            <Popup>
                <Popup_inner>
                    <h2>{props.name}</h2>
                    <DetailImag src={props.Artwork} alt='Not Available'/>
                    <p>{props.Type}</p>
                    <p>{props.Species}</p>
                    <button onClick={props.close}>close</button>
                </Popup_inner>
            </Popup>
        );

}
export default DetailedView;