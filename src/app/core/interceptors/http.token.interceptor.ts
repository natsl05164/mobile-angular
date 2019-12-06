import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'; 
//import { AuthenticationService } from '../authentication/authentication.service';
import { ApplicationStateService } from './../app-state/application-state.service';
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private appState: ApplicationStateService ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //let headers = new HttpHeaders();
        //headers.append('Content-Type', 'application/json');
        //headers.append('Accept', 'application/json');
        //headers.append('Country-Code', this.appState.countryCode);
        //headers.append('Lang-Code', this.appState.langCode);
        //headers.append('Is-Mobile', this.appState.isMobile() ? 'true' :'false');
    //const headersConfig = {
    //  'Content-Type': 'application/json',
    //    'Accept': 'application/json',
    //    'Country-Code': this.appState.countryCode,
    //    'Lang-Code': this.appState.langCode,
    //    'Is-Mobile': this.appState.isMobile()
       
    //};
      //'Country-code':
    //const token = this.authenticationService.getToken();
    //if (token) {
    //  headersConfig['Authorization'] = `${token}`;
    //}
      
        //const request = req.clone({ setHeaders: headersConfig });
        const request = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
                .set('Accept', 'application/json') 
                .set('Country-Code', this.appState.countryCode || 'my')
                .set('Lang-Code', this.appState.langCode||'en')
                .set('Is-Mobile', this.appState.isMobile() ? 'true' : 'false')
        });
    return next.handle(request);
  }
}
