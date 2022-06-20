/// <reference types="react" />
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
declare const Select: (props: SelectProps) => JSX.Element;
export default Select;
