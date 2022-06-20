import { FieldType, FormValue } from '../types';
/**
 * get the value of a field in a form
 * @param value target value
 * @param type target type
 * @param valueAsNumber target value as number
 * @returns field value
 */
export declare function getValueFromField(value: string, type: string, valueAsNumber: number): string | number;
export declare function getValuesFromFieldsObject(fields: FieldType): FormValue;
