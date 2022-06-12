import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormSchema } from 'types';
import { Form } from './index';

const formSchema: FormSchema = {
    title: 'Prueba',
    fields: {
        "name": { title: "Nombre", type: 'string', placeholder: 'Pon tu nombre aquí asqueroso', default: 'Isabella' },
        "lastName": { title: "Last Name", type: 'string', placeholder: 'Please type your last name' },
        "age": { title: "Age", type: 'number', default: 19 },
        "cedula": { title: "Cedula", type: 'number'},
    }
};


const App = () => {
    const [values, setValues] = useState({ name: '', lastName: '', age: '' });

    const handleSubmit = (values: any) => {
        console.log(values)
    }

    const handleChange = (values: any) => {
        setValues(values)
    }

    const RenderFields = () => {
        return Object.keys(values).map((keyName) => {
            return (
                <div>
                    <h4>{keyName}</h4>
                    <p>{values[keyName]}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <Form schema={formSchema} onChange={handleChange} onSubmit={handleSubmit}/>

            {RenderFields()}

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
