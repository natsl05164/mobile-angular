import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { WebsiteData } from '../../../../app-settings/types/website-data';
@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterSuccessComponent implements OnInit {

  @Input() websiteData: WebsiteData;
  constructor() { }

  ngOnInit() {
  }

}
