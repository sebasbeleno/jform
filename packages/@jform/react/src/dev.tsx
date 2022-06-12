import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormSchema } from 'types';
import App from './index';

const formSchema: FormSchema = {
    title: 'Prueba',
    fields: {
        "name": { title: "Nombre", type: 'text', placeholder: 'Pon tu nombre aquí asqueroso', default: 'Isabella' },
        "lastName": { title: "Last Name", type: 'text', placeholder: 'Please type your last name' },
        "age": { title: "Age", type: 'number', default: 19 },
        "tipoDocumento": { title: 'Tipo de documento', type: 'select', options: ['Cedula', 'Pasaporte', 'Otro'] },
        "cedula": { title: "Cedula", type: 'number' },
    }
};


const DevApp = () => {
    const [values, setValues] = useState({ name: '', lastName: '', age: '' });

    const handleSubmit = (values: any) => {
        console.log(values)
    }

    const handleChange = (values: any) => {
        setValues(values)
        console.log(values)
    }

    return (
        <div>
            <App schema={formSchema} onChange={handleChange} onSubmit={handleSubmit}/>
        </div>
    )
}
ReactDOM.render(<DevApp />, document.getElementById('root'));
