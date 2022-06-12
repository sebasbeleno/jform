import React from 'react';
import { FieldProps } from 'types';

const Input = (props: FieldProps) => {
  const RenderInput = () => {
    return (
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        defaultValue={props.defualtValue}
        type={props.field.type}
        id={props.name}
      />
    )
  };

  return (
    <div>
      <label htmlFor={props.name}>{props.field.title}</label> <br></br>
      {RenderInput()}
    </div>
  );
};

export default Input;
