import React, { Component } from 'react';
import { FormProps, FieldType, FormState, FormValue } from 'types';
import FormFields from './FormFields';
import { getValueFromField, guessDefaultValues } from '../utils';
export default class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      title: props.schema.title,
      fields: props.schema.fields,
      values: this.getValuesFromFields(props.schema.fields),
      onChange: props.onChange,
      onSubmit: props.onSubmit
    };
  }

  getValuesFromFields = (fields: FieldType): FormValue => {
    let values: FormValue = {};
    Object.keys(fields).forEach((keyName) => {
      values[keyName] =
        fields[keyName].default ?? guessDefaultValues(fields[keyName].type);
    });
    return values;
  };

  onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber, type } = e.target;

    this.setState(
      (prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [name]: getValueFromField(value, type, valueAsNumber)
        }
      }),
      () => {
        this.props.onChange(this.state.values);
      }
    );
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  };

  render(): React.ReactNode {
    return (
      <form>
        <h1>{this.props.schema.title}</h1>
        <FormFields
          onChange={this.onFieldChange}
          fields={this.props.schema.fields}
        />
        <input type="button" value="Enviar" onClick={this.onSubmit} />
      </form>
    );
  }
}
