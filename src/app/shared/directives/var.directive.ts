import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[var]',
  exportAs: 'var'
})
 export class VarDirective {
  //@Input() var: any;


  @Input("var") set var(struct: any) {
    if (typeof struct === "object") {
      for (var variableName in struct) {
        this[variableName] = struct[variableName];
      }
    }
     
  }
  constructor() {
  }
 
}
