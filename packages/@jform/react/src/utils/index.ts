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
      return value ?? guessDefaultValues(type);
    case 'number':
      return valueAsNumber ?? guessDefaultValues(type);
    case 'select-one':
      return value;
    default:
      return value;
  }
}

/**
 * Guess default values for a field
 * @param type input type
 * @returns default value
 */
export function guessDefaultValues(type: string) {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;

    default:
      break;
  }
}
