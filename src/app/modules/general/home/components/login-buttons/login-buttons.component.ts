import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLoginSideBar() {
    this.router.navigate([{ outlets: { rightSideBar: ['login'] } }]);
  }
}
