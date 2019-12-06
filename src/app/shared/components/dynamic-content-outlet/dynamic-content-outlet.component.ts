 


import { Component,  OnInit, ViewChild, ComponentFactoryResolver, OnDestroy ,ChangeDetectionStrategy} from '@angular/core';

import { DynamicOutletRefDirective } from './directives/dynamic-outlet-ref.directive';
import { DynamicContent } from './types/dynamic-content';
import { DynamicContentItem } from './types/dynamic-content-item';

@Component({
  selector: 'app-dynamic-content',
  template: `
              <div class="dynamic-content"> 
                <ng-template dynamic-host></ng-template>
              </div>
            `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicContentOutletComponent implements OnInit, OnDestroy {
  //@Input() dynamicContentItem: DynamicContentItem ; 
  @ViewChild(DynamicOutletRefDirective, { static: true }) adHost: DynamicOutletRefDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

 
  }

  ngOnDestroy() {
    //clearInterval(this.interval);
  }

  loadComponent(dynItem: DynamicContentItem) {
 
    //const dynItem: DynamicContentItem = this.dynamicContentItem;
 
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicContent>componentRef.instance).data = dynItem.data;
  }

  //getAds() {
  //  this.interval = setInterval(() => {
  //    this.loadComponent();
  //  }, 3000);
  //}
}


