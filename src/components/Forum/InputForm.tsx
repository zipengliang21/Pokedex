import React from "react";
import styled from "styled-components";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

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
       background-color: #1890FF;
       border-color: #1890ff;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
       margin-right: 10px;
   }
   
    #deleteButton{
       background-color: #FF4D4F;
       border-color: #FF4D4F;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
   }
    @media(max-width: 576px) {
      width: 90%;
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
      color: #F0F2F5;
    }
`;

const InputForm = (props: any) => {
   const onChangeName = (e: any) => {
      props.onChangeName(e.target.value);
   };
   const onChangeDescription = (e: any) => {
      props.onChangeDescription(e.target.value);
   };
   return (
       <InputFormWrapper>
          <header>New Post</header>
          <div>
             <FormWrapper id="formInput">
                <FormTop>
                   <LabelWrapper>
                      <label htmlFor="Name">Title:</label>
                      <label htmlFor="description">Description:</label>
                   </LabelWrapper>
                   <InputWrapper>
                      <input type="text" id="nameInput" name="nameInput" placeholder="Title"
                             value={props.title} onChange={onChangeName} ref={props.titleRef}/><br/>
                      <input type="text" id="descriptionInput" name="descriptionInput" placeholder="Description"
                             value={props.description} onChange={onChangeDescription} ref={props.descriptionRef}/><br/>
                   </InputWrapper>
                </FormTop>
                <SimpleMDE/>
             </FormWrapper>


             <div className="buttons">
                <button id="submitButton" onClick={() => props.onAdd()}>Submit</button>
                <button id="deleteButton" onClick={() => {
                   props.onClear();
                }}>Discard
                </button>
             </div>
          </div>
       </InputFormWrapper>
   );
};

export default InputForm;