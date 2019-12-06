import { FormControl } from '@angular/forms';

export function requiredFileType(type: string) {
  return function (control: FormControl) {
    const file = control.value;
    const arrType = type.split(',');
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      arrType.forEach(function (v) {
        if (type.trim().toLowerCase() == extension.toLowerCase()) {
          return null
        } 
      });
        
      return {
        requiredFileType: true
      };
    }

    return null;
  };
}
