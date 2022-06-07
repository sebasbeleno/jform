import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormSchema } from './index';

const formSchema: FormSchema = {
    title: 'Formulario de prueba',
    fields: {
        "name": { title: "Name", type: 'string', default: 'dfgjdfo' },
        "age": { title: "Age", type: 'number', default: 1 },
    }
};

ReactDOM.render(<Form schema={formSchema} />, document.getElementById('root'));
