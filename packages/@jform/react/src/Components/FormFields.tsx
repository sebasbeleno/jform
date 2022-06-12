import React from "react"
import { FieldType } from "types";
import Field from "./Field";

interface FormFieldsProps {
    fields: FieldType,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormFields = (props: FormFieldsProps) => {
    return (
        <div>
            <div>
                {Object.keys(props.fields).map((keyName) => {
                return <Field placeholder={props.fields[keyName].placeholder} onChange={props.onChange} field={props.fields[keyName]} key={keyName} name={keyName} defualtValue={props.fields[keyName].default} />;
                })}
            </div>
        </div>
    )
}

export default FormFields;