// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  reports:[
    {
      type:1,
      title:'Online Upload Log (Online & Member Rate Upload Log)',
      url:''
    },
    {
      type:2,
      title:'GRDB User Report',
      url:''
    },
    {
      type:3,
      title:'Locking Rates Log',
      url:''
    }
],
pdfconfigure:{
  page:'p',
  metrics:'mm',
  size:'a0'
},
sidebarwidth:50
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
