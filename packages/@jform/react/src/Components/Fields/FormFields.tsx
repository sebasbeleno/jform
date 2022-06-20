import React from 'react';
import { FieldProp, FieldType } from '../../types';
import Input from './Input';
import Select from './Select';

interface FormFieldsProps {
  fields: FieldType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFields = (props: FormFieldsProps) => {
  const RenderField = (field: FieldProp, keyName: string) => {
    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <Input
            placeholder={field.placeholder}
            onChange={props.onChange}
            field={field}
            key={keyName}
            name={keyName}
            defualtValue={field.default}
          />
        );

      case 'select':
        return (
          <Select
            name={field.title}
            field={field}
            onChange={props.onChange}
            keyName={keyName}
            defualtValue={field.default}
          />
        );
      default:
        break;
    }
  };
  return (
    <div>
      {Object.keys(props.fields).map((keyName) => {
        return RenderField(props.fields[keyName], keyName);
      })}
    </div>
  );
};

export default FormFields;
