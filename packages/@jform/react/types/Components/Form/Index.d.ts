import React, { Component } from 'react';
import { FormProps, FormState } from '../../types';
import './Form.css';
export default class Form extends Component<FormProps, FormState> {
    constructor(props: FormProps);
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: any) => void;
    render(): React.ReactNode;
}
