import { Component, OnInit, AfterViewInit, Input, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Observable, Subscription, Subject, timer, of, interval } from 'rxjs';
import { takeWhile, startWith, switchMap, takeUntil, map } from 'rxjs/operators';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { slidingIn,slidingOut } from '../../../animations';

import { trigger, state, animate, query, transition, style, stagger, group, animateChild, animation, keyframes, AnimationBuilder, AnimationFactory } from
  '@angular/animations';
@Component({
  selector: 'app-content-pagination',
  templateUrl: './content-pagination.component.html',
  styleUrls: ['./content-pagination.component.scss'],
  animations: [slidingIn,slidingOut, trigger('leftContentAnimation', [
    transition(':enter', [
      // we set the width of the outer container to 0, and hide the
      // overflow (so the inner container won't be visible)
      //style({ width: '0px', overflow: 'hidden' }),
      style({ transform: 'translateX(280px)' }),
      animate('15000ms ease-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [

      group([animate('15000ms ease-out', style({ transform: 'translateX(-280px)' }))]),
    ]),
  ]),
  trigger('rightContentAnimation', [
    transition(':enter', [
      // we set the width of the outer container to 0, and hide the
      // overflow (so the inner container won't be visible)
      //style({ width: '0px', overflow: 'hidden' }),

      animate('15000ms ease-out', style({ transform: 'translateX(-280px)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(-280px)' }),
      group([animate('15000ms ease-out', style({ transform: 'translateX(-560px)' }))]),
    ]),
  ])
  ]
})
export class ContentPaginationComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() contentArray;
  @Input() arrayItemsPerPage: number;
  @Input() isSetTimer: boolean;
  @Input() interval: number;
  @Input() contentClass: string;
  @Input() timing = '250ms ease-in';
  //contentArray = new Array(90).fill('');
  returnedArray: string[] = [];
  returnedArray2: string[] = [];
  currentPage: number = 0;
  timerClass: string = 'c_1';
  isPageChange: boolean = false;
  //Add Observable for reset timer
  private reset$ = new Subject();
  timer$: Observable<any>;
  subscription: Subscription;
  boxWidth: number=200;  
  @ViewChildren("contentBox", { read: ElementRef }) private boxElements: QueryList<ElementRef>;
  constructor( ) {


  }

  ngOnInit() {

    this.returnedArray = this.contentArray.slice(0, this.arrayItemsPerPage);

    //Set default
    //if (!this.arrayItemsPerPage)
    //  this.arrayItemsPerPage = 10;

    //if (!this.interval)
    //  this.interval = 1000;

    this.timer$ = this.reset$.pipe(
      takeWhile(() => this.isSetTimer),
      startWith(0),
      switchMap(() => timer(0, this.interval))
    );

    let clock$ = interval(this.interval / 32).pipe(startWith(0), map((d) => { d = d + 1; }));

    this.subscription = this.timer$.subscribe((i) => {
      // console.log('timer: ', i);//check if refresh works
      if (this.currentPage >= Math.ceil(this.contentArray.length / this.arrayItemsPerPage)) {
        this.currentPage = 1;
      }
      else {
        this.currentPage++;
      }
      //console.log(this.currentPage);
    });

    let clockSubscription = clock$.subscribe((d) => {
      //console.log(d);
      this.timerClass = 'c_' + d;
      //console.log(this.timerClass );

    })

    //If just use timer , no reset timer
    //timer(this.interval, this.interval)
    //  .pipe(takeWhile(() => this.isSetTimer))
    //  .subscribe(() => {
    //    if (this.currentPage >= Math.ceil(this.contentArray.length / this.arrayItemsPerPage)) {
    //      this.currentPage = 1;
    //    }
    //    else {
    //      this.currentPage++;
    //    }
    //    //console.log(this.currentPage);
    //  });



  }


  ngAfterViewInit() {
    this.boxWidth = this.boxElements.first.nativeElement.getBoundingClientRect().width;
  }

  refreshTimer(): void {
    this.reset$.next(void 0);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    if (this.returnedArray.length > 0) { this.returnedArray = []; this.returnedArray2 = this.contentArray.slice(startItem, endItem);  }
    else if (this.returnedArray2.length > 0) { this.returnedArray2 = []; this.returnedArray = this.contentArray.slice(startItem, endItem);  }
    //this.returnedArray = this.contentArray.slice(startItem, endItem);
    this.refreshTimer();
  }

  ngOnDestroy() {
    this.isSetTimer = false; // switches your IntervalObservable off
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get slide1EnterState(): any {
    return {
      value: ':enter',
      params: {
        initInTransX: this.boxWidth + 'px'
        , inTransX: '0px', timing: this.timing
      }
    };
  }

  get slide1LeaveState(): any {
    return {
      value: ':leave',
      params: {
        initOutTransX: '0px'
        , outTransX: '-' + this.boxWidth+'px', timing: this.timing
      }
    };
     
  }

  get slide2EnterState(): any {
    return {
      value: ':enter',
      params: {
        initInTransX: '0px'
        , inTransX: '-' + this.boxWidth + 'px', timing: this.timing
      }
    }; 
  }


  get slide2LeaveState(): any {
    return {
      value: ':leave',
      params: {
        initOutTransX: '-' + this.boxWidth + 'px'
        , outTransX: '-' + this.boxWidth*2 + 'px', timing: this.timing
      }
    }; 
  }
}
