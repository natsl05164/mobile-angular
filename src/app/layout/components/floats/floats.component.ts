import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-floats',
  templateUrl: './floats.component.html',
  styleUrls: ['./floats.component.scss']
})
export class FloatsComponent implements OnInit {
  changeImg: boolean;

  floatsTop:HTMLCollection;
  iniTopWidth: number;

  constructor() {
  }

  ngOnInit() {
    this.floatsTop = document.getElementsByClassName('floats');
    //this.iniTopWidth = this.floatsTop.item(0). ;
    //desktop floats
    window.onscroll = () => {

      if (window.pageYOffset > 200) {
    
        for (let i = 0; i < this.floatsTop.length; i++) {
          this.floatsTop[i].classList.add('fixed-top-2');
        }
      }
      else {
        for (let i = 0; i < this.floatsTop.length; i++) {
          this.floatsTop[i].classList.remove('fixed-top-2');
        }
      }
    }
     
  
  }

}
