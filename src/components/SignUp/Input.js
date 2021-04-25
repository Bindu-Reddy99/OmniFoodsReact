import React from 'react';

const Input=(props)=>{
  let inputElement=null;

  switch(props.inputType){
    case "input" :
    inputElement=
    <input
    type={props.type} 
    name={props.name} 
    id={props.id} 
    placeholder={props.placeholder} required={props.required} 
    value={props.value} 
    />;
    break;
    case ('textarea'):
      inputElement = 
          <textarea 
              name={props.name} 
              placeholder={props.placeholder} 
              required={props.required} 
      
              id={props.id} 
              
              value={props.value}
          />;
          break;
          case ('select'):
            let optionList = [];
            for(let option in props.options) {
                optionList.push((
                    <option 
                        key={option} 
                        value={props.options[option].value}
                        >
                        {props.options[option].description}
                    </option>
                ));
            }
            
            inputElement = 
                <select 
                    name={props.label} 
                    value={props.value} 
                   >
                    {optionList} 
                </select>;
            
                break;
        default:
            inputElement = null;
    
  }

  return (
    <div className="row">
      <div className="col span1-of-3">
      <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="col span-2-of-3">
                {inputElement}
               
            </div>
    </div>
  )
}

export default Input;