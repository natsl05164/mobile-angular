import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WebsiteData } from '../../../app-settings/types/website-data';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
    //@Input() facebookUrl: string;
    //@Input() twitterUrl: string;
    //@Input() instagramUrl: string;
    //@Input() youtubeUrl: string; 
    @Input() websiteData: WebsiteData;
    constructor() { }

    ngOnInit() {

    }

}
