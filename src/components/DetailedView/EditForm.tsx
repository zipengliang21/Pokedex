import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import SimpleMDE from "react-simplemde-editor";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import Axios from 'axios';

const localhostURL = "http://localhost:5000";

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

const EditForm = (props: any) =>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    // const validateForm = (reqBody:any) =>{
    //     let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //     if(reqBody.length===0){
    //         return 'not inputing anything yet';       
    //     } else{
    //         if(!regexp.test(reqBody.userEmail)){
    //           return 'wrong format in email'
    //         }
    //         if(reqBody.userName.length===0){
    //             return 'empty user name'
    //         }
    //         if(reqBody.password.length===0){
    //             return 'empty string'
    //         } 
    //     }
    // }

    const handleSubmit=async ()=>{
        const reqBody = {
            userEmail:email,
            userName:name,
            userDescription:description,
            location:location,
            password:password,
        }
        await Axios.post('http://localhost:5000/profile/edit',reqBody);
        // if(validateForm(reqBody)){
        //     console.log("wrong")
        // }else{
        //     console.log(reqBody)
        // }
    };

    return (
        <FormWrapper>
            <form>
                <FormEntry>
                <label style={{textAlign: "left"}}>Email:</label>
                <input type="email" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px"}} 
                onChange={ (event => {setEmail(event.target.value)})}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Name:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }} 
                onChange={ (event => {setName(event.target.value)}) }/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Location:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setLocation(event.target.value)}) }/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Description:</label>
                <textarea style={{minWidth:"32vw",minHeight:"15vh",margin:"10px auto",marginTop:"0px", overflow:"hidden"}} 
                onChange={ (event => {setDescription(event.target.value)}) }/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Password:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setPassword(event.target.value)}) }/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Confirm Password:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setCPassword(event.target.value)}) }/>
                </FormEntry>
                <button type="submit" style={{margin:"10px auto",width:"106px",height:"34px",font:"inherit",backgroundColor:"#3F51B5",color:"white",borderRadius:"5px",border:0}} 
                onClick = {()=>handleSubmit()}>
                <FontAwesomeIcon icon={faEdit} className="edit"/> Update</button>
            </form>
        </FormWrapper>

    )
}

export default EditForm;