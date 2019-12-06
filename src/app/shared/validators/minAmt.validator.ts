import { AbstractControl } from '@angular/forms';
 

export function minAmtValidator(control: AbstractControl) {
  if (control.value && parseFloat(control.value ) < 50) {  
    return { minAmt: true }; //key-value pair
  }
  return null; //validation does not fail, it returns null.
}
