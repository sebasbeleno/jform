import React, { useState, useEffect, Component } from "react";
import { FormProps, FieldType, FormState, FormValue, FieldProp } from "types";
import FormFields from "./FormFields";

export default class Form extends Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);

        this.state = {
            title: props.schema.title,
            fields: props.schema.fields,
            values: this.getValuesFromFields(props.schema.fields),
            onChange: props.onChange,
            onSubmit: props.onSubmit,
        }

    }


    getValuesFromFields = (fields: FieldType): FormValue => {
        let values: FormValue = {};
        Object.keys(fields).forEach((keyName) => {
            values[keyName] = fields[keyName].default ?? this.guessDefaultValues(fields[keyName].type);
        })
        return values
    }

    guessDefaultValues = (type: string) => {
        switch (type) {
            case 'string':
                return ''
            case 'number':
                return 0

            default:
                break;
        }
    }

    getValueFromField = (value: string, type: string, valueAsNumber: number): any => {
        switch (type) {
            case 'text':
                return value ?? this.guessDefaultValues(type)
            case 'number':
                return valueAsNumber ?? this.guessDefaultValues(type)

            default:
                return value;
        }
    }

    onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, valueAsNumber, type } = e.target;

        this.setState(prev => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: this.getValueFromField(value, type, valueAsNumber)
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
