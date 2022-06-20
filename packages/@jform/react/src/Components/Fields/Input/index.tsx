import React from 'react';
import { FieldProps } from '../../../types';
import "./Input.css";

const Input = (props: FieldProps) => {
  const RenderInput = () => {
    return (
      <input
        className="inputText"
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        defaultValue={props.defualtValue}
        type={props.field.type}
        id={props.name}
      />
    );
  };

  return (
    <div className='fieldContainter'>
      <label className='inputLabel' htmlFor={props.name}>{props.field.title}</label> <br></br>
      {RenderInput()}
    </div>
  );
};

export default Input;
