import React from 'react'
import Input from './Input'



 
  const  signUpForm ={
      name: {
        inputType: "input",
        label: "Name",
        type: "text",
        name: "name",
        id: "name",
       
        placeholder: "Your Name",
        required: true,
      },
      email: {
        inputType: "input",
        label: "Email",
        type: "email",
        name: "email",
        id: "email",
       
        placeholder: "Your Email",
        required: true,
      },
      findUs: {
        inputType: "select",
        label: "How did you find us?",
        name: "find-us",
        id: "find-us",
       
        options: {
          option1: {
            value: "friends",
            description: "Friends",
          },
          option2: {
            value: "search-engine",
            description: "Search Engine",
          },
          option3: {
            value: "ad",
            description: "Advertisement",
          },
          option4: {
            value: "other",
            description: "Other",
          },
        },
      },
      newsletter: {
        inputType: "input",
        label: "Newsletter?",
        type: "checkbox",
        name: "newsletter",
        textAfter: "Yes  please",
        value: "true",
      },
      message: {
        inputType: "textarea",
        label: "Drop us a line",
        name: "message",
        id: "message",
     
        required: true,
        placeholder: "Your Message",
       
      },
      submit: {
        inputType: "input",
        type: "submit",
   
        value: "Send it!",
      
      },
    },


  formDisplay=()=>{
    // return 123;
let inputList=[];
for(let element in signUpForm){
    inputList.push((
        <Input 
            key={element}
            inputType={signUpForm[element].inputType} 
            type={signUpForm[element].type} 
            name={signUpForm[element].name} 
            id={signUpForm[element].id} 
            placeholder={signUpForm[element].placeholder} 
            required={signUpForm[element].required} 
            label={signUpForm[element].label} 
            options={signUpForm[element].options} 
            textAfter={signUpForm[element].textAfter} 
            value={signUpForm[element].value} 
          
            clicked={(event) => onSubmitEvent(event)}
            checked={signUpForm[element].value}
          
        />
    ));
}
return inputList
}
 const onSubmitEvent=(event)=>{
  event.preventDefault();
}

const SignUp=props=>{
    return(
      <section className="section-form">
      <div className="form-box">
      <div className="row">
          <h2>We're happy to hear from you</h2>
      </div>
      <div className="row">
          {formDisplay()}
      </div>
  </div>
  </section>
    )
}

export default SignUp;