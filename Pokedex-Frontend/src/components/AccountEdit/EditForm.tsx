import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "easymde/dist/easymde.min.css";
import Axios from "axios";
import {FormattedMessage, useIntl} from "react-intl";
import cookieChecker from "js-cookie";
import swal from "sweetalert";

const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  form{
    display: inline-block;
    flex-direction:column;
    text-align:center;
    margin-top: 30px;
    color: black;
  }

  @media(max-width: 576px){
    min-width: 2vw;
  }
`;

const FormEntry = styled.div`
display:flex;
flex-direction:column;
text-align:center;
`;

const EditForm = (props: any) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const intl = useIntl();

    const getProfile = async (_id: string) => {
        const response = await Axios.get(`/api/profile/${_id}`);
        return response.data.profile[0];
    };

    useEffect(() => {
        async function initialSet() {
            const initProfile = await getProfile(props._id);
            setEmail(initProfile.email);
            setName(initProfile.userName);
            setDescription(initProfile.description);
            setLocation(initProfile.location);
        }

        initialSet();
    }, [props._id]);


    const validateForm = (reqBody: any) => {
        if (reqBody.password !== cPassword) {
            clearPwdField();
            return false;
        } else {
            return true;
        }

    };

    const clearPwdField = () => {
        setPassword("");
        setCPassword("");
    };

    const handleSubmit = async () => {
        const reqBody = {
            userId: props._id,
            email: email,
            userName: name,
            description: description,
            location: location,
            password: password,
        };
        if (validateForm(reqBody)) {
            swal(`${intl.formatMessage({id: "Update_Successfully"})}`, "", "success");
            await Axios.post("/api/profile/edit", reqBody);
        }

        const response = await props.getCurrentUser();
        if (response) {
            props.setCurrentUser(response);
            if (response.userName !== props.currentUser.userName) {
                await props.updateUserPost(props.currentUser._id, response.userName, response.avatar);
                await props.updateUserComment(props.currentUser._id, response.userName, response.avatar);
            }
        } else {
            cookieChecker.remove("jwt");
        }
        clearPwdField();
    };

    return (
        <FormWrapper>
            <form>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Email'/>:</label>
                    <input type="email" disabled placeholder={props.currentUser.email} style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "30px",
                        margin: "10px 0",
                        marginTop: "0px"
                    }}
                           onChange={(event => {
                               setEmail(event.target.value);
                           })} value={email}/>
                </FormEntry>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Name'/>:</label>
                    <input type="text" placeholder={props.currentUser.userName} style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "30px",
                        margin: "10px 0",
                        marginTop: "0px"
                    }}
                           onChange={(event => {
                               setName(event.target.value);
                           })} value={name}/>
                </FormEntry>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Location'/>:</label>
                    <input type="text" placeholder={props.currentUser.location} style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "30px",
                        margin: "10px 0",
                        marginTop: "0px"
                    }}
                           onChange={(event => {
                               setLocation(event.target.value);
                           })} value={location}/>
                </FormEntry>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Description'/>:</label>
                    <textarea style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "100px",
                        margin: "10px 0",
                        marginTop: "0px",
                        overflow: "hidden"
                    }}
                              placeholder={props.currentUser.description}
                              onChange={(event => {
                                  setDescription(event.target.value);
                              })} value={description}/>
                </FormEntry>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Password'/>:</label>
                    <input type="password" placeholder="" style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "30px",
                        margin: "10px 0",
                        marginTop: "0px"
                    }}
                           onChange={(event => {
                               setPassword(event.target.value);
                           })} value={password}/>
                </FormEntry>
                <FormEntry>
                    <label style={{textAlign: "left"}}><FormattedMessage id='Confirm_Password'/>:</label>
                    <input type="password" placeholder="" style={{
                        width: "50vw",
                        maxWidth: "400px",
                        minHeight: "30px",
                        margin: "10px 0",
                        marginTop: "0px"
                    }}
                           onChange={(event => {
                               setCPassword(event.target.value);
                           })} value={cPassword}/>
                </FormEntry>
            </form>
            <button type="submit" style={{
                display: "block",
                margin: "10px auto",
                width: "106px",
                height: "34px",
                font: "inherit",
                backgroundColor: "#3F51B5",
                color: "white",
                borderRadius: "5px",
                border: 0,
                cursor: "pointer",
            }} onClick={() => handleSubmit()}>
                <FontAwesomeIcon icon={faEdit} className="edit"/> <FormattedMessage id='Update'/></button>

        </FormWrapper>

    );
};

export default EditForm;