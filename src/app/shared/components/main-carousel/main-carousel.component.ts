import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Slide } from './types/slide';
@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCarouselComponent implements OnInit {
  activeIndex: number = 0;
  @Input() slides: Slide[];
  private currActiveSlide: number =0;
  constructor() { }

  ngOnInit() {
  //  console.log('main-carousel');
  }

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  swipe(e: TouchEvent, when: string ): void {

    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        // Do whatever you want with swipe
        
        this.activeIndex = this.currActiveSlide + 1;
        if (this.activeIndex > 2) //TODO
          this.activeIndex = 0; 
        console.log('swiped');
        console.log(this.activeIndex);

      }
    }
  }

  getCurrentActiveSlide(event: number) {
    this.currActiveSlide = event;
  }
}
