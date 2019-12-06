import { AbstractControl } from '@angular/forms';
//import { GeneralService } from '../http/general.service';


export function validNewEmailValidator(control: AbstractControl) {
  if (control.value &&(!control.value.startsWith('https') || !control.value.includes('.io'))) { //TODO ajax call server
    return { validNewEmail: true }; //key-value pair
  }
  return null; //validation does not fail, it returns null.
}
