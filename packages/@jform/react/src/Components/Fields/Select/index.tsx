import React from 'react';
import { SelectField } from '../../../types';

import './Select.css';

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
    <div className='selectInput'>
      <label className='inputLabel'>{props.name}</label> <br></br>
      <select name={props.keyName} onChange={props.onChange}>
        {props.field.options.map((option, index) => {
          return (
            <option key={props.keyName + index} value={option}>
              {option}
            </option>
          );
        })}
      </select>

      <svg>
        <use xlinkHref="#select-arrow-down"></use>
      </svg>
      <svg className="sprites">
        <symbol id="select-arrow-down" viewBox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default Select;
