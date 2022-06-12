import React from 'react';
import { SelectField } from 'types';

interface SelectProps {
  field: SelectField;
  onChange: (value: any) => void;
  name: string;
  defualtValue: any;
  placeholder?: string;
  keyName: string;
}

const Select = (props: SelectProps) => {
  return (
    <div>
      <label>{props.name}</label> <br></br>
      <select name={props.keyName} onChange={props.onChange}>
        {props.field.options.map((option, index) => {
          return (
            <option key={props.keyName + index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
