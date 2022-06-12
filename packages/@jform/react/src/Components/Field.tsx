import React from 'react';
import { FieldProps } from 'types';

const Field = (props: FieldProps) => {
  const RenderInput = () => {
    switch (props.field.type) {
      case 'string':
        return (
          <input
            placeholder={props.placeholder}
            onChange={props.onChange}
            type="text"
            name={props.name}
            defaultValue={props.defualtValue}
          />
        );
      case 'number':
        return (
          <input
            placeholder={props.placeholder}
            onChange={props.onChange}
            type="number"
            name={props.name}
            defaultValue={props.defualtValue}
          />
        );
    }
  };

  return (
    <div>
      <p>{props.field.title}</p>
      {RenderInput()}
    </div>
  );
};

export default Field;
