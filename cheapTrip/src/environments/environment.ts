// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  mainServer: 'tomcat', // "tomcat "or "spring"
  url68: 'http://3.18.167.68:8080/',
  url104: 'http://3.18.167.68:8080/',
  // urlTomCat: 'https://test2.lowcoststrip.com:8443/'
  // urlTomCat: 'http://3.64.201.17:8080/',
  // urlTomCat: 'https://test3.lowcoststrip.com:8443/',
  urlTomCat: 'https://cheaptrip.guru:8443/',
  urlGoogleFormEng:
    'https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/viewform',
  urlGoogleFormRus:
    'https://docs.google.com/forms/d/1ypZL2BFqHmlgPrzsbg3BbOK1Ns_FBYuMrsvYoUOskJM/viewForm',

  // urlTomCat: 'http://ec2-3-65-40-85.eu-central-1.compute.amazonaws.com:8080/'
  // urlTomCat: 'http://ec2-3-134-113-37.us-east-2.compute.amazonaws.com:8080/'
  //  url104:  'http://18.158.89.230:8080/'  //working server
  // url104: 'http://localhost:8080/',
  // url104: 'http://35.238.107.151:8080/',
  // url104: 'http://ec2-3-134-113-37.us-east-2.compute.amazonaws.com:8080/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
