import { Type } from '@angular/core';

export class DynamicContentItem {
  constructor(public component: Type<any>, public data: any) { }
}

