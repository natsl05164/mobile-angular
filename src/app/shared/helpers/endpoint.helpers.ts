import {StoreRequestStateUpdater} from '../types/store-request-state-updater';

export function getUrlWithParams(
    url: string,
    params: {[key: string]: any}
): string {
    Object.keys(params).forEach(key => {
        const value = params[key];
        url = url.replace(`:${key}`, value);
    });
    return url;
}

export function getStoreRequestStateUpdater(
    store: any,
): StoreRequestStateUpdater {
    return (requestName, requestState) => {
        store.setState({
            ...store.state,
            requests: {
                ...store.state.requests,
                [requestName]: requestState,
            },
        });
    };
}


export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}

//export function uploadProgress<T>(cb: (progress: number) => void) {
//  return tap((event: HttpEvent<T>) => {
//    if (event.type === HttpEventType.UploadProgress) {
//      cb(Math.round((100 * event.loaded) / event.total));
//    }
//  });
//}

//export function toResponseBody<T>() {
//  return pipe(
//    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
//    map((res: HttpResponse<T>) => res.body)
//  );
//}


//directDeposit(d: DirectDeposit) {
//  const href = '/api/directDeposit';
//  return this.http.post(href, toFormData(d), { reportProgress: true, observe: 'events' });
//}
