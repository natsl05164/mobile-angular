import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-host]',
})
export class DynamicOutletRefDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
