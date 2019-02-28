// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Initialize Firebase
    apiKey: "AIzaSyBaElBxPYfpnF2Bs8plosJQYS1Dx8yZY2Y",
    authDomain: "realtime-chat-e2a72.firebaseapp.com",
    databaseURL: "https://realtime-chat-e2a72.firebaseio.com",
    projectId: "realtime-chat-e2a72",
    storageBucket: "",
    messagingSenderId: "670692288916"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
