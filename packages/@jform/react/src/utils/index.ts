import { FieldProp, FieldType, FormValue } from '../types';

/**
 * get the value of a field in a form
 * @param value target value
 * @param type target type
 * @param valueAsNumber target value as number
 * @returns field value
 */
export function getValueFromField(
  value: string,
  type: string,
  valueAsNumber: number
) {
  switch (type) {
    case 'text':
      return value ?? guessDefaultValuesFromTypeInput(type);
    case 'number':
      return valueAsNumber ?? guessDefaultValuesFromTypeInput(type);
    case 'select-one':
      return value;
    default:
      return value;
  }
}

function guessDefaultValuesFromTypeInput(type: string) {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    case 'select':
      return '';
    default:
      break;
  }
}
/**
 * Guess default values for a field
 * @param type input type
 * @returns default value
 */
function guessDefaultValuesFromField(field: FieldProp) {
  switch (field.type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    case 'select':
      return field.options[0];
    default:
      break;
  }
}

export function getValuesFromFieldsObject(fields: FieldType) {
  let values: FormValue = {};
  Object.keys(fields).forEach((keyName) => {
    values[keyName] =
      fields[keyName].default ?? guessDefaultValuesFromField(fields[keyName]);
  });
  return values;
}
