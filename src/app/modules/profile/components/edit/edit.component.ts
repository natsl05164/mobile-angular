import { Component, OnInit,ChangeDetectionStrategy, Input,Output,EventEmitter } from '@angular/core';
import { User } from '../../../../core/user/types/user';
import { UserAction } from '../../profile.constants';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  //editProfileForm: FormGroup; 
  @Input() domain: string;
  @Input() userInfo: User;
  @Output() onUserAction  = new EventEmitter<{ action: UserAction, data: any }>();
  constructor() { }

  ngOnInit() {

    //this.userInfo$ = this.userStore.user;
  
     console.log(this.domain);

  }
 

  //createForm() {
  //  this.editProfileForm = new FormGroup({ 
  //  });

  //}

  copyText() {
    this.onUserAction.emit({ action: UserAction.copyRefferalCode, data: {} })
  }
  
}
