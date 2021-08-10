import React, {useState} from "react";
import styled from "styled-components";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {FormattedMessage} from "react-intl";
import {useHistory} from "react-router";

const InputFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 100%;
    padding: 20px 50px;
    font-size: 14px;
    header{
      font-weight: 600;
      font-size: 24px;
      color: #04266D;
      margin-bottom: 10px;
    }
    .buttons{
       margin-top: 10px;
       text-align: left;
    }

    #submitButton{
       background-color: #3F51B5;
       border-color: #3F51B5;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
       margin-right: 10px;
   }

    #deleteButton{
       background-color: #DC004E;
       border-color: #DC004E;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
   }
    @media(max-width: 576px) {
      width: 100%;
    };

`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormTop = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputWrapper = styled.div`
    flex-direction: column;
    margin: 0 auto 0 50px;
    width: 50%;
    text-align: center;
    input{
      width: 100%;
      text-align: center;
      color: black;
    }
`;

const InputForm = (props: any) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const history = useHistory();
    const handleContentChange = (value: string) => {
        setContent(value);
    };
    const addPost = async () => {
        await props.add(title, description, content, props.currentUser.userName,
            props.currentUser._id, props.currentUser.avatar);
        history.push("/forum");
    };
    return (
        <InputFormWrapper>
            <header><FormattedMessage id='NewPost'/></header>
            <div>
                <FormWrapper id="formInput">
                    <FormTop>
                        <LabelWrapper>
                            <label htmlFor="Name"><FormattedMessage id='NewPostTitle'/>:</label>
                            <label htmlFor="description"><FormattedMessage id='NewPostDescription'/>:</label>
                        </LabelWrapper>
                        <InputWrapper>
                            <input type="text" id="nameInput" name="nameInput"
                                   placeholder="Title"
                                   onChange={(event => {
                                       setTitle(event.target.value);
                                   })}
                            />
                            <br/>
                            <input type="text" id="descriptionInput" name="descriptionInput"
                                   placeholder="Description"
                                   onChange={(event => {
                                       setDescription(event.target.value);
                                   })}
                            /><br/>
                        </InputWrapper>
                    </FormTop>
                    <SimpleMDE value={content} onChange={handleContentChange}/>
                </FormWrapper>
                <div className="buttons">
                    <button id="submitButton"
                            onClick={() => addPost()}><FormattedMessage id='Submit'/>
                    </button>
                </div>
            </div>
        </InputFormWrapper>
    );
};

export default InputForm;