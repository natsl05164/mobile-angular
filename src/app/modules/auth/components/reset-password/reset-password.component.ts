import { Component, OnInit,Input} from '@angular/core';

 


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  @Input() isTokenValid: boolean;
  @Input() invalidTokenMessage: string;
  
  constructor(  ) {

   
  }

  ngOnInit() {

  }


}
