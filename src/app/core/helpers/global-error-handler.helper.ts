import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerHelper } from './logger.helper';
import { AlertService } from '../../shared/components/alert/services/alert.service';
 
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector, private alertSvc: AlertService ) { }
    handleError(error) {

        const loggerHelper = this.injector.get(LoggerHelper);
        
 
        const message = error.message ? error.message : error.toString();
        loggerHelper.logError(error);
        
        this.alertSvc.create(
            "Failed!", //title
            "danger", //type
            5000, // time
            message,
            ""
        );
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        //throw error;
    }

}
