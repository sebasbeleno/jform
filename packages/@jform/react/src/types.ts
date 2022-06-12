export interface StringField {
  type: 'text';
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

export interface SelectField {
  type: 'select';
  default?: string;
  title: string;
  options: string[];
}

export type FieldProp = StringField | NumberField | SelectField;

export interface FieldType {
  [key: string]: FieldProp;
}
export interface FormSchema {
  title: string;
  fields: FieldType;
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

export interface FormState {
  values: FormValue;
  fields: FieldType;
  title: string;
  onChange: any;
  onSubmit: any;
}

export interface FormValue {
  [key: string]: any;
}
