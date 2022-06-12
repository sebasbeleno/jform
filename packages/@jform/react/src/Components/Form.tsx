import React, { useState, useEffect } from "react";
import { FormProps } from "types";
import FormFields from "./FormFields";

const Form = (props: FormProps) => {

    const [fieldsValue, setFieldsValue] = useState({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFieldsValue({ ...fieldsValue, [name]: value }); // Set state with new value
    }

    useEffect(() => {
        props.onChange(fieldsValue)
    }, [fieldsValue])

    const onClick = (e: any) => {
        e.preventDefault();
        props.onSubmit(fieldsValue);
    }

    return (
        <form>
            <h1>{props.schema.title}</h1>
            <FormFields onChange={onChange} fields={props.schema.fields} />
            <input type="button" value="Enviar" onClick={onClick} />
        </form>
    )
}

export default Form;