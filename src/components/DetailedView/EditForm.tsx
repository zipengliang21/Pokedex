import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import Axios from 'axios';

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

    const getProfile = async (_id: string) => {
        const response = await Axios.get(`http://localhost:5000/profile/${_id}`);
        return response.data.profile[0];
    }

    useEffect( () => {
        async function initialSet() {
           const initProfile = await getProfile("0002");
           setEmail(initProfile.email);
           setName(initProfile.userName);
           setDescription(initProfile.userDescription);
           setLocation(initProfile.location);
        }
        initialSet();
     }, []);


    const validateForm = (reqBody:any) =>{
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // if(reqBody.length===0){
        //    const initProfile = await getProfile("0002");
        //    setEmail(initProfile.email);
        //    setName(initProfile.userName);
        //    setDescription(initProfile.userDescription);
        //    setLocation(initProfile.location);
        // }    
        //     if(!regexp.test(reqBody.userEmail)){
        //     }
        //     if(reqBody.userName.length===0){
        //     }
        //     if(reqBody.password.length===0){
        //     } 
        if(reqBody.password!==cPassword){
            clearPwdField();
            return false;
        }else{
            return true;
        }

    }

    const clearPwdField=()=>{
        setPassword("");
        setCPassword("");
    };

    const handleSubmit=async ()=>{
        const reqBody = {
            userId:"0002",
            userEmail:email,
            userName:name,
            description:description,
            location:location,
            password:password,
        }
        if(validateForm(reqBody)){
            await Axios.post('http://localhost:5000/profile/edit',reqBody);
        }
        clearPwdField();
    };

    return (
        <FormWrapper>
            <form>
                <FormEntry>
                <label style={{textAlign: "left"}}>Email:</label>
                <input type="email" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px"}} 
                onChange={ (event => {setEmail(event.target.value)})} value={email}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Name:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }} 
                onChange={ (event => {setName(event.target.value)}) } value={name}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Location:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setLocation(event.target.value)})} value={location}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Description:</label>
                <textarea style={{minWidth:"32vw",minHeight:"15vh",margin:"10px auto",marginTop:"0px", overflow:"hidden"}} 
                onChange={ (event => {setDescription(event.target.value)})} value={description}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Password:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setPassword(event.target.value)})} value={password}/>
                </FormEntry>
                <FormEntry>
                <label style={{textAlign: "left"}}>Confirm Password:</label>
                <input type="text" placeholder="" style={{minWidth:"32vw",minHeight:"4.5vh",margin:"10px auto",marginTop:"0px" }}
                onChange={ (event => {setCPassword(event.target.value)})} value={cPassword}/>
                </FormEntry>
                <button type="submit" style={{margin:"10px auto",width:"106px",height:"34px",font:"inherit",backgroundColor:"#3F51B5",color:"white",borderRadius:"5px",border:0}} 
                onClick = {()=>handleSubmit()}>
                <FontAwesomeIcon icon={faEdit} className="edit"/> Update</button>
            </form>
        </FormWrapper>

    )
}

export default EditForm;