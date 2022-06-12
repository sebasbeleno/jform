import React from 'react';
import { FormProps } from './types';
import { RenderForm } from './Components';

const App = (props: FormProps) => {
  return (
    <RenderForm onChange={props.onChange} schema={props.schema} onSubmit={props.onSubmit}/>
  );
};

export default App;