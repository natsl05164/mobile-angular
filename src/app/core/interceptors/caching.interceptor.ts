import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { startWith, tap  } from 'rxjs/operators';

import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { RequestCache } from './services/request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: any) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.method !== 'GET') {
            const cachedResponse = this.cache.get(req);
            return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
        }

        const key: StateKey<string> = makeStateKey<string>(req.url);
        if (isPlatformServer(this.platformId)) {
            return next.handle(req).pipe(tap((event) => {
                this.transferState.set(key, (<HttpResponse<any>>event).body);
            }));
        } else {
            const storedResponse = this.transferState.get<any>(key, null);
            if (storedResponse) {
                const response = new HttpResponse({ body: storedResponse, status: 200 });
                this.transferState.remove(key);
                return of(response);
            } else {
                const cachedResponse = this.cache.get(req);
                return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
            }
        }
      
    }

    sendRequest(
        req: HttpRequest<any>,
        next: HttpHandler,
        cache: RequestCache): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    cache.put(req, event);
                }
            })
        );
    }
}
