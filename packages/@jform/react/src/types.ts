
export interface StringField {
    type: 'string';
    default?: string;
    title: string;
    placeholder?: string;
}

export interface NumberField {
    type: 'number';
    default?: number;
    title: string;
    placeholder?: string;
}

export type FieldProp  = (StringField | NumberField);

export interface FieldType {
  [key: string]: FieldProp;
}
export interface FormSchema {
  title: string;
  fields: FieldType
}

export interface FormProps {
  schema: FormSchema;
  onSubmit: ({}) => void;
  onChange: ({}) => any;
}

export interface FieldProps {
  field: FieldProp;
  onChange: (value: any) => void;
  name: string;
  defualtValue: any;
  placeholder?: string;
}
