import React from 'react'
import Form from './Index'
import { withKnobs, object } from '@storybook/addon-knobs'
import { FormSchema } from '../../types';
export default { title: 'Form', decorators: [withKnobs]}

const formSchema: FormSchema = {
  title: 'Formulario',
  fields: {
    name: {
      title: 'Nombre',
      type: 'text',
      placeholder: 'Pon tu nombre aquí asqueroso',
      default: 'Isabella'
    },
    lastName: {
      title: 'Last Name',
      type: 'text',
      placeholder: 'Please type your last name'
    },
    age: { title: 'Age', type: 'number', default: 19 },
    tipoDocumento: {
      title: 'Tipo de documento',
      type: 'select',
      options: ['Cedula', 'Pasaporte', 'Otro']
    },
    cedula: { title: 'Cedula', type: 'number' }
  }
};

export const form = () => {
  const schema = object('schema', formSchema);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleChange = (values: any) => {
    console.log(values);
  };

  return <Form schema={schema} onChange={handleChange} onSubmit={handleSubmit}/>
}