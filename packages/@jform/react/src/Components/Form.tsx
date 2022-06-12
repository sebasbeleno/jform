import React, { useState, useEffect, Component } from "react";
import { FormProps } from "types";
import FormFields from "./FormFields";

export default class Form extends Component<FormProps, {title: string, fields: any, values: any, onChange: any, onSubmit: any}> {
    constructor(props: FormProps) {
        super(props);

        this.state = {
            title: props.schema.title,
            fields: props.schema.fields,
            values: {},
            onChange: props.onChange,
            onSubmit: props.onSubmit,
        }

    }

    onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        this.setState(prev => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value
            }
        }), () => {
            this.props.onChange(this.state.values)
        })
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.onSubmit(this.state.values);
    }

    render(): React.ReactNode {
        return (
            <form>
                <h1>{this.props.schema.title}</h1>
                <FormFields onChange={this.onFieldChange} fields={this.props.schema.fields} />
                <input type="button" value="Enviar" onClick={this.onSubmit} />
            </form>
        )
    }
}
