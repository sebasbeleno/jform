import React from 'react';

interface StringField {
    type: 'string';
    default?: string;
    title: string;
}

interface NumberField {
    type: 'number';
    default?: number;
    title: string;
}

type Field  = (StringField | NumberField);

export interface FormSchema {
  title: string;
  fields: {
    [key: string]: Field;
  };
}

export interface FormProps {
  schema: FormSchema;
}

interface FieldProps {
  field: Field;
}

const Form = (props: FormProps) => {
  const Field = (props: FieldProps) => {
    const type = props.field.type === 'string' ? 'text' : 'number';
    return (
      <div>
        <p>{props.field.title}</p>
        <input type={type}/>
      </div>
    );
  };

  const RenderFields = () => {
    const fields = props.schema.fields;

    return (
      <div>
        {Object.keys(fields).map((keyName) => {
          return <Field field={fields[keyName]} key={keyName} />;
        })}
      </div>
    );
  };

  return (
    <form>
      <h1>{props.schema.title}</h1>
      <RenderFields />
    </form>
  );
};

export { Form };
