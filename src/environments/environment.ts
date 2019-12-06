// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  apiUrl: '/api' ,// 'http://apis.starwin365.org/' ,//'http://seamless.testbet123.com/api',//,  /*https://5d4bf93200dbb1001487a3bc.mockapi.io/api  http://127.0.0.1:8000/api  https://5d4bf93200dbb1001487a3bc.mockapi.io*/
  //currency:'MYR',
  depositAmounts:[50,100,500,1000]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
