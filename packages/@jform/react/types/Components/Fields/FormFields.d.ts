import React from 'react';
import { FieldType } from '../../types';
interface FormFieldsProps {
    fields: FieldType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const FormFields: (props: FormFieldsProps) => JSX.Element;
export default FormFields;
