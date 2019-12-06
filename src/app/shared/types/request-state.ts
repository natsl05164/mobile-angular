import {FieldErrors} from './field-errors';

export interface RequestState {
    inProgress?: boolean;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
    fieldErrors?: FieldErrors;
}
