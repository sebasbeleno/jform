import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormSchema } from 'types';
import App from './index';

const formSchema: FormSchema = {
    title: 'Prueba',
    fields: {
        "name": { title: "Nombre", type: 'string', placeholder: 'Pon tu nombre aquí asqueroso', default: 'Isabella' },
        "lastName": { title: "Last Name", type: 'string', placeholder: 'Please type your last name' },
        "age": { title: "Age", type: 'number', default: 19 },
        "cedula": { title: "Cedula", type: 'number'},
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

    const RenderFields = () => {
        return Object.keys(values).map((keyName) => {
            return (
                <div>
                    <h4>{keyName}</h4>
                </div>
            )
        })
    }

    return (
        <div>
            <App schema={formSchema} onChange={handleChange} onSubmit={handleSubmit}/>
        </div>
    )
}
ReactDOM.render(<DevApp />, document.getElementById('root'));
