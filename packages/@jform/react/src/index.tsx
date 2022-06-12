import React from 'react';
import { FieldProps, FormProps } from 'types';
import { RenderForm } from './Components';

const Form = (props: FormProps) => {
  return (
    <RenderForm onChange={props.onChange} schema={props.schema} onSubmit={props.onSubmit}/>
  );
};

export { Form };
