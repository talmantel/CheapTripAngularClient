// import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { environment } from '../../environments/environment';
// import { Currency } from '../currency-selector/currency-selector.component';
// import { IPathPoint } from '../trip-direction/trip-direction.model';

// const URL = 'MY_URL';
// const PATHMAP = new Map();

// const SKYCODEMAP = new Map([
//   ["Tehran", "thra"],
//   ["Tashkent", "tas"],
//   ["Sanaa", "sah"],
//   ["Phnom Penh", "pnh"],
//   ["Naypyidaw", "nyt"],
//   ["Muscat", "mct"],
//   ["Manila", "mnlp"],
//   ["Male", "mle"],
//   ["Lhasa", "lxa"],
//   ["Kuwait City", "kwi"],
//   ["Kathmandu", "ktm"],
//   ["Kabul", "kbl"],
//   ["Islamabad", "isb"],
//   ["Dushanbe", "dyu"],
//   ["Doha", "doh"],
//   ["Dhaka", "dac"],
//   ["Colombo", "cmba"],
//   ["Bishkek", "fru"],
//   ["Beirut", "bey"],
//   ["Bandar Seri Begawan", "bwn"],
//   ["Baghdad", "bgw"],
//   ["Astana Nur-Sultan", "nqz"],
//   ["Ashgabat", "asb"],
//   ["Amman", "amma"],
//   ["Manama", "bah"],
//   ["Tbilisi", "tbs"],
//   ["Baku", "gyd"],
//   ["Yerevan", "evn"],
//   ["Honolulu", "hnl"],
//   ["San Francisco", "sfo"],
//   ["Orlando", "orlb"],
//   ["Las Vegas", "lasa"],
//   ["Los Angeles", "laxa"],
//   ["Miami", "mia"],
//   ["New York", "nyca"],
//   ["Johannesburg", "jnba"],
//   ["Dammam", "dmm"],
//   ["Riyadh", "ruh"],
//   ["Cancun", "cun"],
//   ["Fukuoka", "fuk"],
//   ["Chiba", ""],
//   ["Kyoto", ""],
//   ["Osaka", "osaa"],
//   ["Jerusalem", ""],
//   ["Batam", "bth"],
//   ["Kolkatta", "ccu"],
//   ["Jaipur", "jai"],
//   ["Chennai", "maa"],
//   ["Hurgada", "hrg"],
//   ["Beijing", "any"],
//   ["Zhuhai", "zuh"],
//   ["Guilin", "kwl"],
//   ["Vancouver", "yvra"],
//   ["Toronto", "ytoa"],
//   ["Rio de Janeiro", "rioa"],
//   ["Buenos Aires", "buea"],
//   ["Bangalore", "blr"],
//   ["Krabi", "kbv"],
//   ["Jeju", "cju"],
//   ["Abu Dhabi", "auha"],
//   ["Auckland", "akl"],
//   ["Cebu", "ceb"],
//   ["Sydney", "syd"],
//   ["Melbourne", "mela"],
//   ["Marrakech", "rak"],
//   ["Penang Island", "pen"],
//   ["Jakarta", "cgki"],
//   ["Ha Noi", "han"],
//   ["Cairo", "cai"],
//   ["Johor Bahru", "jhb"],
//   ["Denpasar", "dps"],
//   ["Ho Chi Minh", "sgn"],
//   ["Shanghai", "csha"],
//   ["Seoul", "sela"],
//   ["Medina", "med"],
//   ["Guangzhou", "can"],
//   ["Mecca", "jed"],
//   ["Taipei", "tpet"],
//   ["Pattaya", "utp"],
//   ["Tokyo", "tyoa"],
//   ["Phuket", "hkt"],
//   ["Mumbai", "bom"],
//   ["Shenzhen", "szx"],
//   ["Delhi", "del"],
//   ["Kuala Lumpur", "kulm"],
//   ["Dubai", "dzba"],
//   ["Singapore", "sins"],
//   ["Macau", "mfm"],
//   ["Bangkok", "bkkt"],
//   ["Hong Kong", "hkga"],
//   ["Antwerp", "anr"],
//   ["Aberdeen", "abz"],
//   ["Augsburg", "agb"],
//   ["Alexandroupolis", "axd"],
//   ["Athens", "ath"],
//   ["Alicante", "alc"],
//   ["Almeria", "lei"],
//   ["Aalborg", "aal"],
//   ["Aarhus", "aar"],
//   ["Ancona", "aoi"],
//   ["Aosta", ""],
//   ["Amsterdam", "ams"],
//   ["Alanya", "gzp"],
//   ["Ankara", "esb"],
//   ["Antalya", "ayt"],
//   ["Altenrhein", "ach"],
//   ["Brussels", "brus"],
//   ["Burgas", "boj"],
//   ["Banja Luka", "bnx"],
//   ["Belfast", "belf"],
//   ["Birmingham", "bhx"],
//   ["Bournemouth", "boh"],
//   ["Bristol", "brs"],
//   ["Budapest", "bud"],
//   ["Berlin", "ber"],
//   ["Bremen", "bre"],
//   ["Billund", "bll"],
//   ["Barcelona", "bcn"],
//   ["Bilbao", "bio"],
//   ["Bologna", "blq"],
//   ["Bergen", "bgo"],
//   ["Bodo", "boo"],
//   ["Bucharest", "otp"],
//   ["Belgrade", "beli"],
//   ["Bratislava", "bts"],
//   ["Bordeaux", "bod"],
//   ["Brno", "brq"],
//   ["Basel", "bsl"],
//   ["Bern", "brn"],
//   ["Cardiff", "cwl"],
//   ["Cambridge", ""],
//   ["Coventry", ""],
//   ["Cologne", "cgn"],
//   ["Corfu", "cfu"],
//   ["Copenhagen", "cope"],
//   ["Cork", "ork"],
//   ["Cagliari", "cag"],
//   ["Catania", "cta"],
//   ["Cluj-Napoca", "clj"],
//   ["Clermont-Ferrand", "cfe"],
//   ["Chambery-Savoie", "cmf"],
//   ["Cherbourg", "cfr"],
//   ["Doncaster", "dsa"],
//   ["Dortmund", "dtm"],
//   ["Dresden", "drs"],
//   ["Duesseldorf", "duss"],
//   ["Dublin", "dub"],
//   ["Dalaman", "dlm"],
//   ["Dubrovnik", "dbv"],
//   ["East Midlands", "ema"],
//   ["Edinburgh", "edi"],
//   ["Exeter", "ext"],
//   ["Esbjerg", "ebj"],
//   ["Eilat", "etm"],
//   ["Eindhoven", "ein"],
//   ["Frankfurt", "fran"],
//   ["Friedrichshafen", "fdh"],
//   ["Fuerteventura", "fue"],
//   ["Florence", "flr"],
//   ["Floro", "fro"],
//   ["Faro", "fao"],
//   ["Funchal", "fnc"],
//   ["Graz", "grz"],
//   ["Gorna Oryahovitsa", ""],
//   ["Guernsey", "gci"],
//   ["Glasgow", "glas"],
//   ["Gloucestershire", "glo"],
//   ["Granada", "grx"],
//   ["Girona", "gro"],
//   ["Galway", ""],
//   ["Genoa", "goa"],
//   ["Groningen", "grq"],
//   ["Gdansk", "gdn"],
//   ["Geneva", "gva"],
//   ["Gothenburg", "goth"],
//   ["Humberside", "huy"],
//   ["Hamburg", "hamb"],
//   ["Hannover", "haj"],
//   ["Heraklion", "her"],
//   ["Helsinki", "hel"],
//   ["Innsbruck", "inn"],
//   ["Inverness", "inv"],
//   ["Debrecen", "deb"],
//   ["Ibiza", "ibz"],
//   ["Izmir", "izmi"],
//   ["Istanbul", "ista"],
//   ["Jonkoping", "jkg"],
//   ["Klagenfurt", "klu"],
//   ["Karlsruhe Baden-Baden", "fkb"],
//   ["Kortrijk", "kjk"],
//   ["Kaunas", "kun"],
//   ["Katowice", "ktw"],
//   ["Krakow", "krk"],
//   ["Kosice", "ksc"],
//   ["Karlovy Vary", "klv"],
//   ["Karlstad", "ksd"],
//   ["Kuressaare", "ure"],
//   ["Linz", "lnz"],
//   ["Liege", "lgg"],
//   ["Land's End", "leq"],
//   ["Liverpool", "lpl"],
//   ["Lydd", ""],
//   ["Leeds", "lba"],
//   ["London", "lond"],
//   ["Luebeck", ""],
//   ["Lanzarote", "ace"],
//   ["Las Palmas de Gran Canaria", "lpa"],
//   ["Lamezia Terme", "suf"],
//   ["Larnaca", "lca"],
//   ["Liepaja", "lpx"],
//   ["Luxembourg", "lux"],
//   ["Lisbon", "lis"],
//   ["Ljubljana", "lju"],
//   ["Lappeenranta", "lpp"],
//   ["Le Touquet", ""],
//   ["Lille", "lil"],
//   ["Lyon", "lyon"],
//   ["Lugano", "lug"],
//   ["Lulea", "lla"],
//   ["Manchester", "man"],
//   ["Mannheim", "mhg"],
//   ["Memmingen", "fmm"],
//   ["Muenster", "fmo"],
//   ["Munich", "muc"],
//   ["Madrid", "mad"],
//   ["Malaga", "agp"],
//   ["Mahon", "mah"],
//   ["Murcia", "rmu"],
//   ["Milan", "mila"],
//   ["Malta", "mla"],
//   ["Monte Carlo", ""],
//   ["Maastricht", "mst"],
//   ["Milas", "bjv"],
//   ["Marseille", "mrs"],
//   ["Metz", "etz"],
//   ["Montpellier", "mpl"],
//   ["Malmo", "mmx"],
//   ["Norwich", "nwi"],
//   ["Newcastle", "ncl"],
//   ["Newquay", "nqy"],
//   ["Nuremberg", "nue"],
//   ["Naples", "nap"],
//   ["Constanta", "cnd"],
//   ["Nantes", "nte"],
//   ["Nice", "nce"],
//   ["Norrkoping", "nrk"],
//   ["Ostend", "ost"],
//   ["Alderney", "aci"],
//   ["Oviedo", "ovd"],
//   ["Olbia", "olb"],
//   ["Ohrid", "ohd"],
//   ["Oslo", "oslo"],
//   ["Ostrava", "osr"],
//   ["Plovdiv", "pdv"],
//   ["Plymouth", "plh"],
//   ["Paderborn", "pad"],
//   ["Rostock", "rlg"],
//   ["Palma Majorca", "pmi"],
//   ["Palermo", "pmo"],
//   ["Pescara", "psr"],
//   ["Pisa", "psa"],
//   ["Paphos", "pfo"],
//   ["Palanga", "plg"],
//   ["Ponta Delgada", "pdl"],
//   ["Porto", "opo"],
//   ["Poprad", "tat"],
//   ["Paris", "pari"],
//   ["Pula", "puy"],
//   ["Podgorica", "tgd"],
//   ["Pardubice", "ped"],
//   ["Prague", "prg"],
//   ["Parnu", ""],
//   ["Rhodes", "rho"],
//   ["Reykjavik", "reyk"],
//   ["Reus", "reu"],
//   ["Rijeka", "rjk"],
//   ["Rome", "rome"],
//   ["Rimini", "rmi"],
//   ["Riga", "rix"],
//   ["Rotterdam", "rtm"],
//   ["Ronneby", "rnb"],
//   ["Salzburg", "szg"],
//   ["Sofia", "sof"],
//   ["Sarajevo", "sjj"],
//   ["Southampton", "sou"],
//   ["Swansea", "sws"],
//   ["Shoreham", ""],
//   ["Poznan", "poz"],
//   ["Saarbruecken", "saar"],
//   ["Stuttgart", "str"],
//   ["Santorini", "jtr"],
//   ["Shannon", "snn"],
//   ["Salamanca", "slm"],
//   ["Santiago de Compostela", "scq"],
//   ["Sevilla", "svq"],
//   ["Siauliai", ""],
//   ["Skopje", "skp"],
//   ["Stavanger", "svg"],
//   ["Strasbourg", "sxb"],
//   ["Split", "spu"],
//   ["Sion", ""],
//   ["Stockholm", "stoc"],
//   ["Tirana", "tia"],
//   ["Thessaloniki", "skg"],
//   ["Tenerife", "tene"],
//   ["Treviso", ""],
//   ["Trieste", "trs"],
//   ["Turin", "trn"],
//   ["Tel-Aviv", "tlv"],
//   ["Terceira Island", "ter"],
//   ["Timisoara", "tsr"],
//   ["Trabzon", "tzx"],
//   ["Tampere", "tmp"],
//   ["Turku", "tku"],
//   ["Toulouse", "tls"],
//   ["Tivat", "tiv"],
//   ["Trollhattan", ""],
//   ["Tallinn", "tll"],
//   ["Tartu", "tay"],
//   ["Umea", "ume"],
//   ["Vienna", "vie"],
//   ["Varna", "var"],
//   ["Valencia", "vlc"],
//   ["Valladolid", "vll"],
//   ["Venice", "veni"],
//   ["Verona", "vero"],
//   ["Ventspils", ""],
//   ["Vilnius", "vno"],
//   ["Iasi", "ias"],
//   ["Vaxjo", "vxo"],
//   ["Visby", "vby"],
//   ["Weeze", "nrn"],
//   ["Westerland", "gwt"],
//   ["Wilhelmshaven", ""],
//   ["Warsaw", "waw"],
//   ["Wroclaw", "wro"],
//   ["Zweibruecken", "zqw"],
//   ["Zaragoza", "zaz"],
//   ["Zagreb", "zag"],
//   ["Zadar", "zad"],
//   ["Zurich", "zrh"],
//   ["Chisinau", "kiv"],
//   ["Minsk", "msqa"],
//   ["Gomel", "gme"],
//   ["Brest", "bqt"],
//   ["Vitebsk", "vtb"],
//   ["Hrodna", "gna"],
//   ["Kiev", "kiev"],
//   ["Kherson", "khe"],
//   ["Chernivtsi", "cwc"],
//   ["Odesa", "ods"],
//   ["Zaporizhia", "ozh"],
//   ["Vinnytsia", "vin"],
//   ["Lviv", "lwo"],
//   ["Dnipro", "dnk"],
//   ["Kharkiv", "hrk"],
//   ["Ivano-Frankivsk", "ifo"],
//   ["Moscow", "mosc"],
//   ["Saint Petersburg", "led"],
//   ["Sochi", "aer"],
//   ["Novosibirsk", "ovb"],
//   ["Ekaterinburg", "svx"],
//   ["Krasnodar", "krr"],
//   ["Anapa", "aaq"],
//   ["Kaliningrad", "kgd"],
//   ["Platov", ""],
//   ["Samara", "kuf"],
//   ["Irkutsk", "ikt"],
//   ["Krasnoyarsk", "kja"],
//   ["Ufa", "ufa"],
//   ["Kazan", "kzn"],
//   ["Mineralnye Vody", "mrv"],
//   ["Tyumen", "tjm"],
//   ["Khabarovsk", "khv"],
//   ["Surgut", "sgc"],
//   ["Vladivostok", "vvo"],
//   ["Yakutsk", "yaku"],
//   ["Perm", "pee"],
//   ["Chelyabinsk", "cek"],
//   ["Novy Urengoy", "nux"],
//   ["Murmansk", "mmk"],
//   ["Nizhniy Novgorod", "goj"],
//   ["Volgograd", "vog"],
//   ["Yuzhno-Sakhalinsk", "uus"],
//   ["Arkhangelsk", "arh"],
//   ["Omsk", "oms"],
//   ["Makhachkala", "mcx"],
//   ["Gelendzik", "gdz"],
//   ["Petropavlovsk-Kamchatsky", "pkc"],
//   ["Naberezhnye Chelny", "nbc"],
//   ["Tomsk", "tof"],
//   ["Nizhnevartovsk", "njc"],
//   ["Orenburg", "ren"],
//   ["Voronezh", "voz"],
//   ["Syktyvkar", "scw"],
//   ["Barnaul", "bax"],
//   ["Astrakhan", "asf"],
//   ["Norilsk", "nsk"],
//   ["Belgorod", "ego"],
//   ["Salehard", "sly"],
//   ["Chita", "hta"],
//   ["Izhevsk", "ijk"],
//   ["Khanty-Mansiysk", "hma"],
//   ["Saratov", "sarb"],
//   ["Stavropol", "stw"],
//   ["Kemerovo", "kej"],
//   ["Abakan", "aba"],
//   ["Grozny", "grv"],
//   ["Vladikavkaz", "ogz"],
//   ["Ulyanovsk", "ulya"],
//   ["Penza", "pez"],
//   ["Saransk", "skx"],
//   ["Nadym", "nym"],
//   ["Magnitogorsk", "mqf"],
//   ["Rostov on Don", "rov"],
//   ["Cheboksary", "scy"],
//   ["Nalchik", "nal"],
//   ["Cherepovets", "cee"],
//   ["Magas", "igt"],
//   ["Kirov", "kvx"],
//   ["Naryan-Mar", "nnm"],
//   ["Bratsk", "btk"],
//   ["Elista", "esl"],
//   ["Gorno-Altaysk", "rgk"],
//   ["Tambov", "tbw"],
//   ["Vorkuta", "vkt"],
//   ["Neryungri", "ner"],
//   ["Ivanovo", "iwa"],
//   ["Anadyr", "dyr"],
//   ["Kursk", "urs"],
//   ["Kogalym", "kgp"],
//   ["Kurgan", "kro"],
//   ["Petrozavodsk", "pes"],
//   ["Orsk", "osw"],
//   ["Kaluga", "klf"],
//   ["Okha", "ohh"],
//   ["Briansk", "bzk"],
//   ["Kyzyl", "kyz"],
//   ["Tiksi", "iks"],
//   ["Yaroslavl", "iar"],
//   ["Pevek", "pwe"],
//   ["Velikij Ustyug", "vus"],
//   ["Aldan", "adh"],
//   ["Beloyarsky", "eyk"],
//   ["Bodaybo", "odo"],
//   ["Ust-Kut", "ukx"],
//   ["Usinsk", "usk"],
//   ["Nyagan", "nya"],
//   ["Lensk", "ulk"],
//   ["Batagay", "bqj"],
//   ["Uraj", "urj"],
//   ["Nikolaevsk-na-Amure", "nli"],
//   ["Berezovo", "ezv"],
//   ["Bugulma", "uua"],
//   ["Belaya Gora", "bgn"],
//   ["Mendeleyevo", ""],
//   ["Lipetsk", "lpk"],
//   ["Nyurba", "nyr"],
//   ["Ust-Maya", "ums"],
//   ["Iturup", "itu"],
//   ["Keperveyem", "kpw"],
//   ["Deputatsky", "dpt"],
//   ["Ust-Nera", "usr"],
//   ["Terney", "nei"],
//   ["Olenyok", "onk"],
//   ["Cherskiy", "cyx"],
//   ["Kavalerovo", "kvr"],
//   ["Igarka", "iaa"],
//   ["Igrim", "irm"],
//   ["Ust-Kuyga", "ukg"],
//   ["Hatanga", "htg"],
//   ["Dalnegorsk", "dhg"],
//   ["Nogliki", "ngk"],
//   ["Chokurdah", "ckh"],
//   ["Tynda", "tyd"],
//   ["Podkamennaya Tunguska", "tgp"],
//   ["Zhigansk", "zix"],
//   ["Dikson", "dks"],
//   ["Verkhnevilyuysk", "vhv"],
//   ["Vilyuysk", "vyi"],
//   ["Dalnerechensk", "dlr"],
//   ["Svetlaya", "etl"],
//   ["Komsomolsk Na Amure", "kxk"],
//   ["Plastun", "tly"],
//   ["Kotlas", ""],
//   ["Gagra", ""],
//   ["New Athos", ""],
//   ["Sukhumi", ""],
//   ["Ukhta", "uct"],
//   ["Pristina", "prn"],
//   ["Thimphu", ""],
//   ["Ulaanbaatar", "uln"],
//   ["Agartala", "ixa"],
//   ["Agra", "agp"],
//   ["Ahmedabad", "amd"],
//   ["Aizawl", "ajl"],
//   ["Allahabad", "ixd"]
// ]);

// enum Icons {
//   FLIGHT = `<span class="material-icons">
//   flight
//   </span>`,
//   BUS = `<span class="material-icons">
//   directions_bus
//   </span>`,
//   TRAIN = `<span class="material-icons">
//   directions_railway
//   </span>`,
//   SUBWAY = `<span class="material-icons">
//   directions_subway
//   </span>`,
//   SHIP = `<span class="material-icons">
//   directions_boat
//   </span>`,
//   ONFOOT = `<span class="material-icons">
//   directions_walk
//   </span>`,
// }
// PATHMAP.set('mixed_routes', {
//   type: 'Mixed Trip',
//   icon: [Icons.BUS, Icons.FLIGHT],
// });
// PATHMAP.set('flying_routes', {
//   type: 'Air Trip',
//   icon: [Icons.FLIGHT],
// });
// PATHMAP.set('ground_routes', {
//   type: 'Ground Trip',
//   icon: [Icons.TRAIN, Icons.SUBWAY],
// });

// const PATHS = `{"mixed_routes":
// {"direct_paths":
// [
//   {
//     "transportation_type":"Bus",
//     "euro_price":19.3951,
//     "duration_minutes":3360,
//     "from":"Bournemouth",
//     "to":"Bucharest"},
//     {
//     "transportation_type":"Bus",
//     "euro_price":12.5216,
//     "duration_minutes":509,
//     "from":"Bucharest",
//     "to":"Budapest"}
// ],
// "euro_price":31.0,
// "duration_minutes":3869
// },

// "flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus","euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;

// interface IRout {
//   euro_price: string;
//   duration_minutes: string;
//   transportation_type: string;
//   from: IPathPoint;
//   to: IPathPoint;
// }

// interface IDetails {
//   euro_price: string;
//   duration_minutes: string;
//   direct_paths: IRout[];
// }

// export interface IPath {
//   pathType: { type: string; icon: SafeHtml[] };
//   details: IDetails;
// }
//  // url = http://3.23.159.104:3333
// @Injectable({
//   providedIn: 'root',
// })
// export class HttpService {
//   currentPaths: IPath[];
//   startPoint: string;
//   endPoint: string;
//   constructor(
//     private http: HttpClient,
//     private router: Router,
//     private sanitizer: DomSanitizer
//   ) {}

//   getUserCountry() {
//  let url ='https://api.ipgeolocation.io/ipgeo?apiKey=781c831b771b440f9adcf6a6b2e5bb23';
//     // let url="https://api.hostip.info/country.php";
//     // let url="http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
//     // let url="https://ipgeolocation.abstractapi.com/v1/?api_key=f75c54d6ee64403cbf9c58b1b4e5cdf0"
//     // let url="http://ip-api.com/json/";
//     // return this.http.get(url ,{responseType: 'text'});
//     return this.http.get(url);

//   }

//   getSkyScannerCode(locationName:string){
//     let code="";

//     if (SKYCODEMAP.has(locationName)){

//       return SKYCODEMAP.get(locationName);
//     }

//     return code;

//   }

//   getCurrencies():Observable<any> {
//     let url=  environment.urlTomCat +
//     'CheapTrip/GetCurrencyRate';
//     return this.http.get<Currency>(url, { observe: "response" });
//     // return

//   }

//   getAutoCompleteData(data: string, type: string): Observable<string[]> {
//     const address =
//       URL +
//       'getLocations?type=' +
//       type +
//       '&search_name=' +
//       encodeURIComponent(data);

//     const DIRECTIONS_FROM = [
//       'Moscow',
//       'Tel-Aviv',
//       'London',
//       'Viena',
//       'San-Paolo',
//       'Krakow',
//       'Bansko',
//     ];
//     return of(DIRECTIONS_FROM);
//   }

//   public getPaths(from: string, to: string): Observable<IPath[]> {
//     this.startPoint = from;
//     this.endPoint = to;
//     const newPath = JSON.parse(PATHS);
//     return this.transformObject(newPath);
//   }

//   private transformObject(obj: object): Observable<IPath[]> {
//     const objArr: IPath[] = [];
//     for (const i in obj) {
//       const transformedDetails = this.transformDetails(obj[i]);
//       const testObj = {
//         pathType: this.mapSanitazing().get(i),
//         details: transformedDetails,
//       };
//       const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
//       objArr.push(testObj);
//     }
//     this.currentPaths = objArr;
//     return of(objArr);
//   }

//   private transformDetails(obj: IDetails): IDetails {
//     const newPaths = obj.direct_paths.map((item) => {
//       return {
//         ...item,
//         duration_minutes: this.transformTime(+obj.duration_minutes),
//         euro_price: this.transformPrice(+obj.euro_price),
//       };
//     });
//     const newObj = {
//       direct_paths: newPaths,
//       euro_price: this.transformPrice(+obj.euro_price),
//       duration_minutes: this.transformTime(+obj.duration_minutes),
//     };
//     return newObj;
//   }

//   private transformTime(minutes: number): string {
//     const days = Math.floor(minutes / 60 / 24);
//     const dayStr = days == 0 ? '' : days == 1 ? days + ' day' : days + ' days';
//     const hours = Math.floor(minutes / 60 - days * 24);
//     const hourStr =
//       hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours';
//     const min = minutes - days * 24 * 60 - hours * 60;
//     const minStr =
//       min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes';
//     return dayStr + ' ' + hourStr + ' ' + minStr;
//   }

//   private transformPrice(price: number): string {
//     const euro = Math.floor(+price);
//     const cent = Math.floor(+price - euro) * 10;
//     const euroStr = euro == 0 ? '' : euro + ' euro';
//     const centStr = cent == 0 ? '' : cent + ' cent';
//     return euroStr + '' + centStr;
//   }

//   private mapSanitazing(): Map<string, { type: string; icon: SafeHtml[] }> {
//     const newMap = new Map<string, { type: string; icon: SafeHtml[] }>();
//     PATHMAP.forEach((value, key, map) => {
//       const sanitizedArr = value.icon.map((icon) =>
//         this.sanitizer.bypassSecurityTrustHtml(icon)
//       );
//       const val = {
//         ...value,
//         icon: sanitizedArr,
//       };

//       newMap.set(key, val);
//       return newMap;
//     });
//     return newMap;
//   }

//   public getAllEnLocationsTomcat():Observable<any> {
//     let url=  environment.urlTomCat +
//     'CheapTrip/getLocations?type=' +
//     '0' +
//     '&search_name=' +
//     '';
//     let locations;
//     this.http.get(url).subscribe( data =>{
//       locations= data;
//     }
//     );
//     return locations;

//   }
// public getAllRuLocationsTomcat():Observable<any> {
//     let url=  environment.urlTomCat +
//     'CheapTrip/getLocations?type=' +
//     '0' +
//     '&search_name=' +
//     ''+
//     '&language_name=ru';

//     return this.http.get(url, { observe: "response" });

//   }
// }

import {
  HttpClient,
  HttpClientModule,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Currency } from '../currency-selector/currency-selector.component';
import { IPathPoint } from '../trip-direction/trip-direction.model';

const URL = 'MY_URL';
const PATHMAP = new Map();

const SKYCODEMAP = new Map([
  ['Tehran', 'thra'],
  ['Tashkent', 'tas'],
  ['Sanaa', 'sah'],
  ['Phnom Penh', 'pnh'],
  ['Naypyidaw', 'nyt'],
  ['Muscat', 'mct'],
  ['Manila', 'mnlp'],
  ['Male', 'mle'],
  ['Lhasa', 'lxa'],
  ['Kuwait City', 'kwi'],
  ['Kathmandu', 'ktm'],
  ['Kabul', 'kbl'],
  ['Islamabad', 'isb'],
  ['Dushanbe', 'dyu'],
  ['Doha', 'doh'],
  ['Dhaka', 'dac'],
  ['Colombo', 'cmba'],
  ['Bishkek', 'fru'],
  ['Beirut', 'bey'],
  ['Bandar Seri Begawan', 'bwn'],
  ['Baghdad', 'bgw'],
  ['Astana Nur-Sultan', 'nqz'],
  ['Ashgabat', 'asb'],
  ['Amman', 'amma'],
  ['Manama', 'bah'],
  ['Tbilisi', 'tbs'],
  ['Baku', 'gyd'],
  ['Yerevan', 'evn'],
  ['Honolulu', 'hnl'],
  ['San Francisco', 'sfo'],
  ['Orlando', 'orlb'],
  ['Las Vegas', 'lasa'],
  ['Los Angeles', 'laxa'],
  ['Miami', 'mia'],
  ['New York', 'nyca'],
  ['Johannesburg', 'jnba'],
  ['Dammam', 'dmm'],
  ['Riyadh', 'ruh'],
  ['Cancun', 'cun'],
  ['Fukuoka', 'fuk'],
  ['Chiba', ''],
  ['Kyoto', ''],
  ['Osaka', 'osaa'],
  ['Jerusalem', ''],
  ['Batam', 'bth'],
  ['Kolkatta', 'ccu'],
  ['Jaipur', 'jai'],
  ['Chennai', 'maa'],
  ['Hurgada', 'hrg'],
  ['Beijing', 'any'],
  ['Zhuhai', 'zuh'],
  ['Guilin', 'kwl'],
  ['Vancouver', 'yvra'],
  ['Toronto', 'ytoa'],
  ['Rio de Janeiro', 'rioa'],
  ['Buenos Aires', 'buea'],
  ['Bangalore', 'blr'],
  ['Krabi', 'kbv'],
  ['Jeju', 'cju'],
  ['Abu Dhabi', 'auha'],
  ['Auckland', 'akl'],
  ['Cebu', 'ceb'],
  ['Sydney', 'syd'],
  ['Melbourne', 'mela'],
  ['Marrakech', 'rak'],
  ['Penang Island', 'pen'],
  ['Jakarta', 'cgki'],
  ['Ha Noi', 'han'],
  ['Cairo', 'cai'],
  ['Johor Bahru', 'jhb'],
  ['Denpasar', 'dps'],
  ['Ho Chi Minh', 'sgn'],
  ['Shanghai', 'csha'],
  ['Seoul', 'sela'],
  ['Medina', 'med'],
  ['Guangzhou', 'can'],
  ['Mecca', 'jed'],
  ['Taipei', 'tpet'],
  ['Pattaya', 'utp'],
  ['Tokyo', 'tyoa'],
  ['Phuket', 'hkt'],
  ['Mumbai', 'bom'],
  ['Shenzhen', 'szx'],
  ['Delhi', 'del'],
  ['Kuala Lumpur', 'kulm'],
  ['Dubai', 'dzba'],
  ['Singapore', 'sins'],
  ['Macau', 'mfm'],
  ['Bangkok', 'bkkt'],
  ['Hong Kong', 'hkga'],
  ['Antwerp', 'anr'],
  ['Aberdeen', 'abz'],
  ['Augsburg', 'agb'],
  ['Alexandroupolis', 'axd'],
  ['Athens', 'ath'],
  ['Alicante', 'alc'],
  ['Almeria', 'lei'],
  ['Aalborg', 'aal'],
  ['Aarhus', 'aar'],
  ['Ancona', 'aoi'],
  ['Aosta', ''],
  ['Amsterdam', 'ams'],
  ['Alanya', 'gzp'],
  ['Ankara', 'esb'],
  ['Antalya', 'ayt'],
  ['Altenrhein', 'ach'],
  ['Brussels', 'brus'],
  ['Burgas', 'boj'],
  ['Banja Luka', 'bnx'],
  ['Belfast', 'belf'],
  ['Birmingham', 'bhx'],
  ['Bournemouth', 'boh'],
  ['Bristol', 'brs'],
  ['Budapest', 'bud'],
  ['Berlin', 'ber'],
  ['Bremen', 'bre'],
  ['Billund', 'bll'],
  ['Barcelona', 'bcn'],
  ['Bilbao', 'bio'],
  ['Bologna', 'blq'],
  ['Bergen', 'bgo'],
  ['Bodo', 'boo'],
  ['Bucharest', 'otp'],
  ['Belgrade', 'beli'],
  ['Bratislava', 'bts'],
  ['Bordeaux', 'bod'],
  ['Brno', 'brq'],
  ['Basel', 'bsl'],
  ['Bern', 'brn'],
  ['Cardiff', 'cwl'],
  ['Cambridge', ''],
  ['Coventry', ''],
  ['Cologne', 'cgn'],
  ['Corfu', 'cfu'],
  ['Copenhagen', 'cope'],
  ['Cork', 'ork'],
  ['Cagliari', 'cag'],
  ['Catania', 'cta'],
  ['Cluj-Napoca', 'clj'],
  ['Clermont-Ferrand', 'cfe'],
  ['Chambery-Savoie', 'cmf'],
  ['Cherbourg', 'cfr'],
  ['Doncaster', 'dsa'],
  ['Dortmund', 'dtm'],
  ['Dresden', 'drs'],
  ['Duesseldorf', 'duss'],
  ['Dublin', 'dub'],
  ['Dalaman', 'dlm'],
  ['Dubrovnik', 'dbv'],
  ['East Midlands', 'ema'],
  ['Edinburgh', 'edi'],
  ['Exeter', 'ext'],
  ['Esbjerg', 'ebj'],
  ['Eilat', 'etm'],
  ['Eindhoven', 'ein'],
  ['Frankfurt', 'fran'],
  ['Friedrichshafen', 'fdh'],
  ['Fuerteventura', 'fue'],
  ['Florence', 'flr'],
  ['Floro', 'fro'],
  ['Faro', 'fao'],
  ['Funchal', 'fnc'],
  ['Graz', 'grz'],
  ['Gorna Oryahovitsa', ''],
  ['Guernsey', 'gci'],
  ['Glasgow', 'glas'],
  ['Gloucestershire', 'glo'],
  ['Granada', 'grx'],
  ['Girona', 'gro'],
  ['Galway', ''],
  ['Genoa', 'goa'],
  ['Groningen', 'grq'],
  ['Gdansk', 'gdn'],
  ['Geneva', 'gva'],
  ['Gothenburg', 'goth'],
  ['Humberside', 'huy'],
  ['Hamburg', 'hamb'],
  ['Hannover', 'haj'],
  ['Heraklion', 'her'],
  ['Helsinki', 'hel'],
  ['Innsbruck', 'inn'],
  ['Inverness', 'inv'],
  ['Debrecen', 'deb'],
  ['Ibiza', 'ibz'],
  ['Izmir', 'izmi'],
  ['Istanbul', 'ista'],
  ['Jonkoping', 'jkg'],
  ['Klagenfurt', 'klu'],
  ['Karlsruhe Baden-Baden', 'fkb'],
  ['Kortrijk', 'kjk'],
  ['Kaunas', 'kun'],
  ['Katowice', 'ktw'],
  ['Krakow', 'krk'],
  ['Kosice', 'ksc'],
  ['Karlovy Vary', 'klv'],
  ['Karlstad', 'ksd'],
  ['Kuressaare', 'ure'],
  ['Linz', 'lnz'],
  ['Liege', 'lgg'],
  ["Land's End", 'leq'],
  ['Liverpool', 'lpl'],
  ['Lydd', ''],
  ['Leeds', 'lba'],
  ['London', 'lond'],
  ['Luebeck', ''],
  ['Lanzarote', 'ace'],
  ['Las Palmas de Gran Canaria', 'lpa'],
  ['Lamezia Terme', 'suf'],
  ['Larnaca', 'lca'],
  ['Liepaja', 'lpx'],
  ['Luxembourg', 'lux'],
  ['Lisbon', 'lis'],
  ['Ljubljana', 'lju'],
  ['Lappeenranta', 'lpp'],
  ['Le Touquet', ''],
  ['Lille', 'lil'],
  ['Lyon', 'lyon'],
  ['Lugano', 'lug'],
  ['Lulea', 'lla'],
  ['Manchester', 'man'],
  ['Mannheim', 'mhg'],
  ['Memmingen', 'fmm'],
  ['Muenster', 'fmo'],
  ['Munich', 'muc'],
  ['Madrid', 'mad'],
  ['Malaga', 'agp'],
  ['Mahon', 'mah'],
  ['Murcia', 'rmu'],
  ['Milan', 'mila'],
  ['Malta', 'mla'],
  ['Monte Carlo', ''],
  ['Maastricht', 'mst'],
  ['Milas', 'bjv'],
  ['Marseille', 'mrs'],
  ['Metz', 'etz'],
  ['Montpellier', 'mpl'],
  ['Malmo', 'mmx'],
  ['Norwich', 'nwi'],
  ['Newcastle', 'ncl'],
  ['Newquay', 'nqy'],
  ['Nuremberg', 'nue'],
  ['Naples', 'nap'],
  ['Constanta', 'cnd'],
  ['Nantes', 'nte'],
  ['Nice', 'nce'],
  ['Norrkoping', 'nrk'],
  ['Ostend', 'ost'],
  ['Alderney', 'aci'],
  ['Oviedo', 'ovd'],
  ['Olbia', 'olb'],
  ['Ohrid', 'ohd'],
  ['Oslo', 'oslo'],
  ['Ostrava', 'osr'],
  ['Plovdiv', 'pdv'],
  ['Plymouth', 'plh'],
  ['Paderborn', 'pad'],
  ['Rostock', 'rlg'],
  ['Palma Majorca', 'pmi'],
  ['Palermo', 'pmo'],
  ['Pescara', 'psr'],
  ['Pisa', 'psa'],
  ['Paphos', 'pfo'],
  ['Palanga', 'plg'],
  ['Ponta Delgada', 'pdl'],
  ['Porto', 'opo'],
  ['Poprad', 'tat'],
  ['Paris', 'pari'],
  ['Pula', 'puy'],
  ['Podgorica', 'tgd'],
  ['Pardubice', 'ped'],
  ['Prague', 'prg'],
  ['Parnu', ''],
  ['Rhodes', 'rho'],
  ['Reykjavik', 'reyk'],
  ['Reus', 'reu'],
  ['Rijeka', 'rjk'],
  ['Rome', 'rome'],
  ['Rimini', 'rmi'],
  ['Riga', 'rix'],
  ['Rotterdam', 'rtm'],
  ['Ronneby', 'rnb'],
  ['Salzburg', 'szg'],
  ['Sofia', 'sof'],
  ['Sarajevo', 'sjj'],
  ['Southampton', 'sou'],
  ['Swansea', 'sws'],
  ['Shoreham', ''],
  ['Poznan', 'poz'],
  ['Saarbruecken', 'saar'],
  ['Stuttgart', 'str'],
  ['Santorini', 'jtr'],
  ['Shannon', 'snn'],
  ['Salamanca', 'slm'],
  ['Santiago de Compostela', 'scq'],
  ['Sevilla', 'svq'],
  ['Siauliai', ''],
  ['Skopje', 'skp'],
  ['Stavanger', 'svg'],
  ['Strasbourg', 'sxb'],
  ['Split', 'spu'],
  ['Sion', ''],
  ['Stockholm', 'stoc'],
  ['Tirana', 'tia'],
  ['Thessaloniki', 'skg'],
  ['Tenerife', 'tene'],
  ['Treviso', ''],
  ['Trieste', 'trs'],
  ['Turin', 'trn'],
  ['Tel-Aviv', 'tlv'],
  ['Terceira Island', 'ter'],
  ['Timisoara', 'tsr'],
  ['Trabzon', 'tzx'],
  ['Tampere', 'tmp'],
  ['Turku', 'tku'],
  ['Toulouse', 'tls'],
  ['Tivat', 'tiv'],
  ['Trollhattan', ''],
  ['Tallinn', 'tll'],
  ['Tartu', 'tay'],
  ['Umea', 'ume'],
  ['Vienna', 'vie'],
  ['Varna', 'var'],
  ['Valencia', 'vlc'],
  ['Valladolid', 'vll'],
  ['Venice', 'veni'],
  ['Verona', 'vero'],
  ['Ventspils', ''],
  ['Vilnius', 'vno'],
  ['Iasi', 'ias'],
  ['Vaxjo', 'vxo'],
  ['Visby', 'vby'],
  ['Weeze', 'nrn'],
  ['Westerland', 'gwt'],
  ['Wilhelmshaven', ''],
  ['Warsaw', 'waw'],
  ['Wroclaw', 'wro'],
  ['Zweibruecken', 'zqw'],
  ['Zaragoza', 'zaz'],
  ['Zagreb', 'zag'],
  ['Zadar', 'zad'],
  ['Zurich', 'zrh'],
  ['Chisinau', 'kiv'],
  ['Minsk', 'msqa'],
  ['Gomel', 'gme'],
  ['Brest', 'bqt'],
  ['Vitebsk', 'vtb'],
  ['Hrodna', 'gna'],
  ['Kiev', 'kiev'],
  ['Kherson', 'khe'],
  ['Chernivtsi', 'cwc'],
  ['Odesa', 'ods'],
  ['Zaporizhia', 'ozh'],
  ['Vinnytsia', 'vin'],
  ['Lviv', 'lwo'],
  ['Dnipro', 'dnk'],
  ['Kharkiv', 'hrk'],
  ['Ivano-Frankivsk', 'ifo'],
  ['Moscow', 'mosc'],
  ['Saint Petersburg', 'led'],
  ['Sochi', 'aer'],
  ['Novosibirsk', 'ovb'],
  ['Ekaterinburg', 'svx'],
  ['Krasnodar', 'krr'],
  ['Anapa', 'aaq'],
  ['Kaliningrad', 'kgd'],
  ['Platov', ''],
  ['Samara', 'kuf'],
  ['Irkutsk', 'ikt'],
  ['Krasnoyarsk', 'kja'],
  ['Ufa', 'ufa'],
  ['Kazan', 'kzn'],
  ['Mineralnye Vody', 'mrv'],
  ['Tyumen', 'tjm'],
  ['Khabarovsk', 'khv'],
  ['Surgut', 'sgc'],
  ['Vladivostok', 'vvo'],
  ['Yakutsk', 'yaku'],
  ['Perm', 'pee'],
  ['Chelyabinsk', 'cek'],
  ['Novy Urengoy', 'nux'],
  ['Murmansk', 'mmk'],
  ['Nizhniy Novgorod', 'goj'],
  ['Volgograd', 'vog'],
  ['Yuzhno-Sakhalinsk', 'uus'],
  ['Arkhangelsk', 'arh'],
  ['Omsk', 'oms'],
  ['Makhachkala', 'mcx'],
  ['Gelendzik', 'gdz'],
  ['Petropavlovsk-Kamchatsky', 'pkc'],
  ['Naberezhnye Chelny', 'nbc'],
  ['Tomsk', 'tof'],
  ['Nizhnevartovsk', 'njc'],
  ['Orenburg', 'ren'],
  ['Voronezh', 'voz'],
  ['Syktyvkar', 'scw'],
  ['Barnaul', 'bax'],
  ['Astrakhan', 'asf'],
  ['Norilsk', 'nsk'],
  ['Belgorod', 'ego'],
  ['Salehard', 'sly'],
  ['Chita', 'hta'],
  ['Izhevsk', 'ijk'],
  ['Khanty-Mansiysk', 'hma'],
  ['Saratov', 'sarb'],
  ['Stavropol', 'stw'],
  ['Kemerovo', 'kej'],
  ['Abakan', 'aba'],
  ['Grozny', 'grv'],
  ['Vladikavkaz', 'ogz'],
  ['Ulyanovsk', 'ulya'],
  ['Penza', 'pez'],
  ['Saransk', 'skx'],
  ['Nadym', 'nym'],
  ['Magnitogorsk', 'mqf'],
  ['Rostov on Don', 'rov'],
  ['Cheboksary', 'scy'],
  ['Nalchik', 'nal'],
  ['Cherepovets', 'cee'],
  ['Magas', 'igt'],
  ['Kirov', 'kvx'],
  ['Naryan-Mar', 'nnm'],
  ['Bratsk', 'btk'],
  ['Elista', 'esl'],
  ['Gorno-Altaysk', 'rgk'],
  ['Tambov', 'tbw'],
  ['Vorkuta', 'vkt'],
  ['Neryungri', 'ner'],
  ['Ivanovo', 'iwa'],
  ['Anadyr', 'dyr'],
  ['Kursk', 'urs'],
  ['Kogalym', 'kgp'],
  ['Kurgan', 'kro'],
  ['Petrozavodsk', 'pes'],
  ['Orsk', 'osw'],
  ['Kaluga', 'klf'],
  ['Okha', 'ohh'],
  ['Briansk', 'bzk'],
  ['Kyzyl', 'kyz'],
  ['Tiksi', 'iks'],
  ['Yaroslavl', 'iar'],
  ['Pevek', 'pwe'],
  ['Velikij Ustyug', 'vus'],
  ['Aldan', 'adh'],
  ['Beloyarsky', 'eyk'],
  ['Bodaybo', 'odo'],
  ['Ust-Kut', 'ukx'],
  ['Usinsk', 'usk'],
  ['Nyagan', 'nya'],
  ['Lensk', 'ulk'],
  ['Batagay', 'bqj'],
  ['Uraj', 'urj'],
  ['Nikolaevsk-na-Amure', 'nli'],
  ['Berezovo', 'ezv'],
  ['Bugulma', 'uua'],
  ['Belaya Gora', 'bgn'],
  ['Mendeleyevo', ''],
  ['Lipetsk', 'lpk'],
  ['Nyurba', 'nyr'],
  ['Ust-Maya', 'ums'],
  ['Iturup', 'itu'],
  ['Keperveyem', 'kpw'],
  ['Deputatsky', 'dpt'],
  ['Ust-Nera', 'usr'],
  ['Terney', 'nei'],
  ['Olenyok', 'onk'],
  ['Cherskiy', 'cyx'],
  ['Kavalerovo', 'kvr'],
  ['Igarka', 'iaa'],
  ['Igrim', 'irm'],
  ['Ust-Kuyga', 'ukg'],
  ['Hatanga', 'htg'],
  ['Dalnegorsk', 'dhg'],
  ['Nogliki', 'ngk'],
  ['Chokurdah', 'ckh'],
  ['Tynda', 'tyd'],
  ['Podkamennaya Tunguska', 'tgp'],
  ['Zhigansk', 'zix'],
  ['Dikson', 'dks'],
  ['Verkhnevilyuysk', 'vhv'],
  ['Vilyuysk', 'vyi'],
  ['Dalnerechensk', 'dlr'],
  ['Svetlaya', 'etl'],
  ['Komsomolsk Na Amure', 'kxk'],
  ['Plastun', 'tly'],
  ['Kotlas', ''],
  ['Gagra', ''],
  ['New Athos', ''],
  ['Sukhumi', ''],
  ['Ukhta', 'uct'],
  ['Pristina', 'prn'],
  ['Thimphu', ''],
  ['Ulaanbaatar', 'uln'],
  ['Agartala', 'ixa'],
  ['Agra', 'agp'],
  ['Ahmedabad', 'amd'],
  ['Aizawl', 'ajl'],
  ['Allahabad', 'ixd'],
]);

enum Icons {
  FLIGHT = `<span class="material-icons">
  flight
  </span>`,
  BUS = `<span class="material-icons">
  directions_bus
  </span>`,
  TRAIN = `<span class="material-icons">
  directions_railway
  </span>`,
  SUBWAY = `<span class="material-icons">
  directions_subway
  </span>`,
  SHIP = `<span class="material-icons">
  directions_boat
  </span>`,
  ONFOOT = `<span class="material-icons">
  directions_walk
  </span>`,
}
PATHMAP.set('mixed_routes', {
  type: 'Mixed Trip',
  icon: [Icons.BUS, Icons.FLIGHT],
});
PATHMAP.set('flying_routes', {
  type: 'Air Trip',
  icon: [Icons.FLIGHT],
});
PATHMAP.set('ground_routes', {
  type: 'Ground Trip',
  icon: [Icons.TRAIN, Icons.SUBWAY],
});

const PATHS = `{"mixed_routes":
{"direct_paths":
[
  {
    "transportation_type":"Bus",
    "euro_price":19.3951,
    "duration_minutes":3360,
    "from":"Bournemouth",
    "to":"Bucharest"},
    {
    "transportation_type":"Bus",
    "euro_price":12.5216,
    "duration_minutes":509,
    "from":"Bucharest",
    "to":"Budapest"}
],
"euro_price":31.0,
"duration_minutes":3869
},
"flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus","euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;

export const LOCATIONS = `{"1":{"id":8,"name":"Tehran","country_name":"Iran","latitude":35.70000076293945,"longitude":51.41669845581055},"2":{"id":9,"name":"Tashkent","country_name":"Uzbekistan","latitude":41.29999923706055,"longitude":69.2667007446289},"3":{"id":10,"name":"Sanaa","country_name":"Yemen","latitude":15.350000381469727,"longitude":44.20000076293945},"4":{"id":11,"name":"Phnom Penh","country_name":"Cambodia","latitude":11.569600105285645,"longitude":104.9209976196289},"5":{"id":12,"name":"Naypyidaw","country_name":"Myanmar","latitude":19.754005432128906,"longitude":96.1344985961914},"6":{"id":13,"name":"Muscat","country_name":"Oman","latitude":23.61389923095703,"longitude":58.592201232910156},"7":{"id":14,"name":"Manila","country_name":"Philippines","latitude":14.595800399780273,"longitude":120.97720336914062},"8":{"id":15,"name":"Male","country_name":"Maldives","latitude":4.175000190734863,"longitude":73.50830078125},"9":{"id":16,"name":"Lhasa","country_name":"China","latitude":29.649999618530273,"longitude":91.0999984741211},"10":{"id":17,"name":"Kuwait City","country_name":"Kuwait","latitude":29.375,"longitude":47.97999954223633},"11":{"id":18,"name":"Kathmandu","country_name":"Nepal","latitude":27.716699600219727,"longitude":85.36669921875},"12":{"id":20,"name":"Islamabad","country_name":"Pakistan","latitude":33.69889831542969,"longitude":73.03690338134766},"13":{"id":21,"name":"Dushanbe","country_name":"Tajikistan","latitude":38.57310104370117,"longitude":68.7863998413086},"14":{"id":22,"name":"Doha","country_name":"Qatar","latitude":25.299999237060547,"longitude":51.53329849243164},"15":{"id":23,"name":"Dhaka","country_name":"Bangladesh","latitude":23.716100692749023,"longitude":90.39610290527344},"16":{"id":24,"name":"Colombo","country_name":"Sri Lanka","latitude":6.9166998863220215,"longitude":79.83329772949219},"17":{"id":25,"name":"Bishkek","country_name":"Kyrgyzstan","latitude":42.86669921875,"longitude":74.56670379638672},"18":{"id":26,"name":"Beirut","country_name":"Lebanon","latitude":33.88690185546875,"longitude":35.513099670410156},"19":{"id":27,"name":"Bandar Seri Begawan","country_name":"Brunei","latitude":4.9166998863220215,"longitude":114.91670227050781},"20":{"id":28,"name":"Baghdad","country_name":"Iraq","latitude":33.349998474121094,"longitude":44.41669845581055},"21":{"id":29,"name":"Astana Nur-Sultan","country_name":"Kazakhstan","latitude":51.13330078125,"longitude":71.43329620361328},"22":{"id":30,"name":"Ashgabat","country_name":"Turkmenistan","latitude":37.95000076293945,"longitude":58.38330078125},"23":{"id":31,"name":"Amman","country_name":"Jordan","latitude":31.950000762939453,"longitude":35.93330001831055},"24":{"id":32,"name":"Manama","country_name":"Bahrain","latitude":26.216699600219727,"longitude":50.583099365234375},"25":{"id":33,"name":"Tbilisi","country_name":"Georgia","latitude":41.72249984741211,"longitude":44.79249954223633},"26":{"id":34,"name":"Baku","country_name":"Azerbaijan","latitude":40.36669921875,"longitude":49.835201263427734},"27":{"id":35,"name":"Yerevan","country_name":"Armenia","latitude":40.181400299072266,"longitude":44.514400482177734},"28":{"id":36,"name":"Honolulu","country_name":"USA","latitude":21.32939910888672,"longitude":-157.8459930419922},"29":{"id":37,"name":"San Francisco","country_name":"USA","latitude":37.75619888305664,"longitude":-122.44300079345703},"30":{"id":38,"name":"Orlando","country_name":"USA","latitude":28.47719955444336,"longitude":-81.33689880371094},"31":{"id":39,"name":"Las Vegas","country_name":"USA","latitude":36.233299255371094,"longitude":-115.2654037475586},"32":{"id":40,"name":"Los Angeles","country_name":"USA","latitude":34.11389923095703,"longitude":-118.40679931640625},"33":{"id":41,"name":"Miami","country_name":"USA","latitude":25.783899307250977,"longitude":-80.21019744873047},"34":{"id":42,"name":"New York","country_name":"USA","latitude":40.69430160522461,"longitude":-73.92489624023438},"35":{"id":43,"name":"Johannesburg","country_name":"South Africa","latitude":-26.20439910888672,"longitude":28.04159927368164},"36":{"id":44,"name":"Dammam","country_name":"Saudi Arabia","latitude":26.433300018310547,"longitude":50.099998474121094},"37":{"id":45,"name":"Riyadh","country_name":"Saudi Arabia","latitude":24.649999618530273,"longitude":46.709999084472656},"38":{"id":47,"name":"Cancun","country_name":"Mexico","latitude":21.161785125732422,"longitude":-86.85104370117188},"39":{"id":48,"name":"Fukuoka","country_name":"Japan","latitude":33.590301513671875,"longitude":130.4019012451172},"40":{"id":50,"name":"Kyoto","country_name":"Japan","latitude":35.01110076904297,"longitude":135.76690673828125},"41":{"id":51,"name":"Osaka","country_name":"Japan","latitude":34.693599700927734,"longitude":135.5019073486328},"42":{"id":52,"name":"Jerusalem","country_name":"Israel","latitude":31.783300399780273,"longitude":35.21670150756836},"43":{"id":53,"name":"Batam","country_name":"Indonesia","latitude":1.1061034202575684,"longitude":104.03782653808594},"44":{"id":55,"name":"Kolkatta","country_name":"India","latitude":22.541099548339844,"longitude":88.33779907226562},"45":{"id":56,"name":"Jaipur","country_name":"India","latitude":26.91670036315918,"longitude":75.86669921875},"46":{"id":57,"name":"Chennai","country_name":"India","latitude":13.082500457763672,"longitude":80.2750015258789},"47":{"id":58,"name":"Hurgada","country_name":"Egypt","latitude":27.22255516052246,"longitude":33.83070755004883},"48":{"id":59,"name":"Beijing","country_name":"China","latitude":39.904998779296875,"longitude":116.39140319824219},"49":{"id":60,"name":"Zhuhai","country_name":"China","latitude":22.276899337768555,"longitude":113.56780242919922},"50":{"id":61,"name":"Guilin","country_name":"China","latitude":25.266700744628906,"longitude":110.2833023071289},"51":{"id":62,"name":"Vancouver","country_name":"Canada","latitude":49.25,"longitude":-123.0999984741211},"52":{"id":63,"name":"Toronto","country_name":"Canada","latitude":43.74169921875,"longitude":-79.37329864501953},"53":{"id":64,"name":"Rio de Janeiro","country_name":"Brazil","latitude":-22.908300399780273,"longitude":-43.1963996887207},"54":{"id":65,"name":"Buenos Aires","country_name":"Argentina","latitude":-34.599700927734375,"longitude":-58.381900787353516},"55":{"id":66,"name":"Bangalore","country_name":"India","latitude":12.969900131225586,"longitude":77.5979995727539},"56":{"id":67,"name":"Krabi","country_name":"Thailand","latitude":8.059200286865234,"longitude":98.91889953613281},"57":{"id":68,"name":"Jeju","country_name":"South Korea","latitude":33.509700775146484,"longitude":126.52189636230469},"58":{"id":69,"name":"Abu Dhabi","country_name":"United Arab Emirates","latitude":24.478099822998047,"longitude":54.36859893798828},"59":{"id":70,"name":"Auckland","country_name":"New Zealand","latitude":-36.849998474121094,"longitude":174.78329467773438},"60":{"id":71,"name":"Cebu","country_name":"Philippines","latitude":10.300000190734863,"longitude":123.9000015258789},"61":{"id":72,"name":"Sydney","country_name":"Australia","latitude":-33.8650016784668,"longitude":151.2093963623047},"62":{"id":73,"name":"Melbourne","country_name":"Australia","latitude":-37.8135986328125,"longitude":144.96310424804688},"63":{"id":74,"name":"Marrakech","country_name":"Morocco","latitude":31.629499435424805,"longitude":-7.981100082397461},"64":{"id":75,"name":"Penang Island","country_name":"Malaysia","latitude":5.3787922859191895,"longitude":100.25017547607422},"65":{"id":76,"name":"Jakarta","country_name":"Indonesia","latitude":-6.214600086212158,"longitude":106.84510040283203},"66":{"id":77,"name":"Ha Noi","country_name":"Vietnam","latitude":21.029449462890625,"longitude":105.85444641113281},"67":{"id":78,"name":"Cairo","country_name":"Egypt","latitude":30.056100845336914,"longitude":31.23940086364746},"68":{"id":79,"name":"Johor Bahru","country_name":"Malaysia","latitude":1.4556000232696533,"longitude":103.76110076904297},"69":{"id":80,"name":"Denpasar","country_name":"Indonesia","latitude":-8.66670036315918,"longitude":115.2166976928711},"70":{"id":81,"name":"Ho Chi Minh","country_name":"Vietnam","latitude":10.775843620300293,"longitude":106.70175170898438},"71":{"id":82,"name":"Shanghai","country_name":"China","latitude":31.16670036315918,"longitude":121.4666976928711},"72":{"id":83,"name":"Seoul","country_name":"South Korea","latitude":37.58330154418945,"longitude":127.0},"73":{"id":84,"name":"Medina","country_name":"Saudi Arabia","latitude":24.466699600219727,"longitude":39.599998474121094},"74":{"id":85,"name":"Guangzhou","country_name":"China","latitude":23.128799438476562,"longitude":113.25900268554688},"75":{"id":86,"name":"Mecca","country_name":"Saudi Arabia","latitude":21.422500610351562,"longitude":39.82609939575195},"76":{"id":87,"name":"Taipei","country_name":"Taiwan","latitude":25.047800064086914,"longitude":121.53189849853516},"77":{"id":88,"name":"Pattaya","country_name":"Thailand","latitude":12.931941032409668,"longitude":100.90095520019531},"78":{"id":89,"name":"Tokyo","country_name":"Japan","latitude":35.689701080322266,"longitude":139.69219970703125},"79":{"id":90,"name":"Phuket","country_name":"Thailand","latitude":7.8881001472473145,"longitude":98.39749908447266},"80":{"id":91,"name":"Mumbai","country_name":"India","latitude":18.966699600219727,"longitude":72.83329772949219},"81":{"id":92,"name":"Shenzhen","country_name":"China","latitude":22.53499984741211,"longitude":114.05400085449219},"82":{"id":93,"name":"Delhi","country_name":"India","latitude":28.65999984741211,"longitude":77.2300033569336},"83":{"id":94,"name":"Kuala Lumpur","country_name":"Malaysia","latitude":3.1477999687194824,"longitude":101.69529724121094},"84":{"id":95,"name":"Dubai","country_name":"United Arab Emirates","latitude":25.269699096679688,"longitude":55.30939865112305},"85":{"id":96,"name":"Singapore","country_name":"Singapore","latitude":1.2999999523162842,"longitude":103.80000305175781},"86":{"id":97,"name":"Macau","country_name":"China","latitude":22.202999114990234,"longitude":113.54499816894531},"87":{"id":98,"name":"Bangkok","country_name":"Thailand","latitude":13.75,"longitude":100.5167007446289},"88":{"id":99,"name":"Hong Kong","country_name":"China","latitude":22.30500030517578,"longitude":114.18499755859375},"89":{"id":100,"name":"Antwerp","country_name":"Belgium","latitude":51.221099853515625,"longitude":4.399700164794922},"90":{"id":101,"name":"Aberdeen","country_name":"United Kingdom","latitude":57.150001525878906,"longitude":-2.109999895095825},"91":{"id":102,"name":"Augsburg","country_name":"Germany","latitude":48.371700286865234,"longitude":10.898300170898438},"92":{"id":103,"name":"Alexandroupolis","country_name":"Greece","latitude":40.849998474121094,"longitude":25.86669921875},"93":{"id":104,"name":"Athens","country_name":"Greece","latitude":37.979400634765625,"longitude":23.716100692749023},"94":{"id":105,"name":"Alicante","country_name":"Spain","latitude":38.345298767089844,"longitude":-0.4830999970436096},"95":{"id":106,"name":"Almeria","country_name":"Spain","latitude":36.8414192199707,"longitude":-2.46281361579895},"96":{"id":107,"name":"Aalborg","country_name":"Denmark","latitude":57.03369903564453,"longitude":9.916600227355957},"97":{"id":108,"name":"Aarhus","country_name":"Denmark","latitude":56.15719985961914,"longitude":10.210700035095215},"98":{"id":109,"name":"Ancona","country_name":"Italy","latitude":43.61669921875,"longitude":13.51669979095459},"99":{"id":111,"name":"Amsterdam","country_name":"Netherlands","latitude":52.349998474121094,"longitude":4.916600227355957},"100":{"id":112,"name":"Alanya","country_name":"Turkey","latitude":36.54359817504883,"longitude":31.99970054626465},"101":{"id":113,"name":"Ankara","country_name":"Turkey","latitude":39.93000030517578,"longitude":32.849998474121094},"102":{"id":114,"name":"Antalya","country_name":"Turkey","latitude":36.90810012817383,"longitude":30.695600509643555},"103":{"id":115,"name":"Altenrhein","country_name":"Switzerland","latitude":47.49038314819336,"longitude":9.554054260253906},"104":{"id":116,"name":"Brussels","country_name":"Belgium","latitude":50.84669876098633,"longitude":4.3516998291015625},"105":{"id":117,"name":"Burgas","country_name":"Bulgaria","latitude":42.5,"longitude":27.466699600219727},"106":{"id":118,"name":"Banja Luka","country_name":"Bosnia and Herzegovina","latitude":44.766700744628906,"longitude":17.183300018310547},"107":{"id":119,"name":"Belfast","country_name":"United Kingdom","latitude":54.59640121459961,"longitude":-5.929999828338623},"108":{"id":120,"name":"Birmingham","country_name":"United Kingdom","latitude":52.47999954223633,"longitude":-1.902500033378601},"109":{"id":121,"name":"Bournemouth","country_name":"United Kingdom","latitude":50.720001220703125,"longitude":-1.8799999952316284},"110":{"id":122,"name":"Bristol","country_name":"United Kingdom","latitude":51.45000076293945,"longitude":-2.5833001136779785},"111":{"id":123,"name":"Budapest","country_name":"Hungary","latitude":47.49829864501953,"longitude":19.040800094604492},"112":{"id":124,"name":"Berlin","country_name":"Germany","latitude":52.516700744628906,"longitude":13.383299827575684},"113":{"id":126,"name":"Bremen","country_name":"Germany","latitude":53.115299224853516,"longitude":8.797499656677246},"114":{"id":127,"name":"Billund","country_name":"Denmark","latitude":55.73094177246094,"longitude":9.115935325622559},"115":{"id":128,"name":"Barcelona","country_name":"Spain","latitude":41.38249969482422,"longitude":2.1768999099731445},"116":{"id":129,"name":"Bilbao","country_name":"Spain","latitude":43.26219940185547,"longitude":-2.9532999992370605},"117":{"id":130,"name":"Bologna","country_name":"Italy","latitude":44.493900299072266,"longitude":11.34280014038086},"118":{"id":131,"name":"Bergen","country_name":"Norway","latitude":60.39250183105469,"longitude":5.323299884796143},"119":{"id":132,"name":"Bodo","country_name":"Norway","latitude":67.28269958496094,"longitude":14.375100135803223},"120":{"id":134,"name":"Bucharest","country_name":"Romania","latitude":44.400001525878906,"longitude":26.08329963684082},"121":{"id":135,"name":"Belgrade","country_name":"Serbia","latitude":44.81669998168945,"longitude":20.466699600219727},"122":{"id":136,"name":"Bratislava","country_name":"Slovakia","latitude":48.14469909667969,"longitude":17.11280059814453},"123":{"id":137,"name":"Bordeaux","country_name":"France","latitude":44.84000015258789,"longitude":-0.5799999833106995},"124":{"id":139,"name":"Brno","country_name":"Czech Republic","latitude":49.1953010559082,"longitude":16.608299255371094},"125":{"id":140,"name":"Basel","country_name":"Switzerland","latitude":47.56060028076172,"longitude":7.59060001373291},"126":{"id":141,"name":"Bern","country_name":"Switzerland","latitude":46.948001861572266,"longitude":7.447400093078613},"127":{"id":142,"name":"Cardiff","country_name":"United Kingdom","latitude":51.48165512084961,"longitude":-3.1791934967041016},"128":{"id":145,"name":"Cologne","country_name":"Germany","latitude":50.94219970703125,"longitude":6.957799911499023},"129":{"id":146,"name":"Corfu","country_name":"Greece","latitude":39.59133529663086,"longitude":19.859619140625},"130":{"id":147,"name":"Copenhagen","country_name":"Denmark","latitude":55.6786003112793,"longitude":12.56350040435791},"131":{"id":150,"name":"Cork","country_name":"Ireland","latitude":51.900001525878906,"longitude":-8.473099708557129},"132":{"id":151,"name":"Cagliari","country_name":"Italy","latitude":39.2224006652832,"longitude":9.104000091552734},"133":{"id":152,"name":"Catania","country_name":"Italy","latitude":37.50270080566406,"longitude":15.087300300598145},"134":{"id":153,"name":"Cluj-Napoca","country_name":"Romania","latitude":46.779998779296875,"longitude":23.55940055847168},"135":{"id":154,"name":"Clermont-Ferrand","country_name":"France","latitude":45.78310012817383,"longitude":3.08240008354187},"136":{"id":155,"name":"Chambery-Savoie","country_name":"France","latitude":45.56999969482422,"longitude":5.911799907684326},"137":{"id":156,"name":"Cherbourg","country_name":"France","latitude":49.65039825439453,"longitude":-1.649999976158142},"138":{"id":158,"name":"Doncaster","country_name":"United Kingdom","latitude":53.51499938964844,"longitude":-1.1330000162124634},"139":{"id":159,"name":"Dortmund","country_name":"Germany","latitude":51.51390075683594,"longitude":7.4653000831604},"140":{"id":160,"name":"Dresden","country_name":"Germany","latitude":51.04930114746094,"longitude":13.73840045928955},"141":{"id":161,"name":"Duesseldorf","country_name":"Germany","latitude":51.22540283203125,"longitude":6.776313781738281},"142":{"id":162,"name":"Dublin","country_name":"Ireland","latitude":53.342498779296875,"longitude":-6.2657999992370605},"143":{"id":163,"name":"Dalaman","country_name":"Turkey","latitude":36.81257629394531,"longitude":28.883140563964844},"144":{"id":164,"name":"Dubrovnik","country_name":"Croatia","latitude":42.64030075073242,"longitude":18.108299255371094},"145":{"id":165,"name":"East Midlands","country_name":"United Kingdom","latitude":52.79656219482422,"longitude":-0.6717947721481323},"146":{"id":166,"name":"Edinburgh","country_name":"United Kingdom","latitude":55.952999114990234,"longitude":-3.188999891281128},"147":{"id":167,"name":"Exeter","country_name":"United Kingdom","latitude":50.71670150756836,"longitude":-3.5332999229431152},"148":{"id":169,"name":"Esbjerg","country_name":"Denmark","latitude":55.46699905395508,"longitude":8.449999809265137},"149":{"id":171,"name":"Eilat","country_name":"Israel","latitude":29.556934356689453,"longitude":34.94979476928711},"150":{"id":172,"name":"Eindhoven","country_name":"Netherlands","latitude":51.43000030517578,"longitude":5.5},"151":{"id":174,"name":"Frankfurt","country_name":"Germany","latitude":50.11360168457031,"longitude":8.679699897766113},"152":{"id":175,"name":"Friedrichshafen","country_name":"Germany","latitude":47.65420150756836,"longitude":9.47920036315918},"153":{"id":176,"name":"Fuerteventura","country_name":"Spain","latitude":28.40037727355957,"longitude":-14.00486946105957},"154":{"id":177,"name":"Florence","country_name":"Italy","latitude":43.771400451660156,"longitude":11.254199981689453},"155":{"id":178,"name":"Floro","country_name":"Norway","latitude":61.59859848022461,"longitude":5.017199993133545},"156":{"id":179,"name":"Faro","country_name":"Portugal","latitude":37.016700744628906,"longitude":-7.933300018310547},"157":{"id":180,"name":"Funchal","country_name":"Portugal","latitude":32.650001525878906,"longitude":-16.91670036315918},"158":{"id":181,"name":"Graz","country_name":"Austria","latitude":47.06669998168945,"longitude":15.433300018310547},"159":{"id":183,"name":"Guernsey","country_name":"United Kingdom","latitude":57.166996002197266,"longitude":-7.374732971191406},"160":{"id":184,"name":"Glasgow","country_name":"United Kingdom","latitude":55.86090087890625,"longitude":-4.251399993896484},"161":{"id":185,"name":"Gloucestershire","country_name":"United Kingdom","latitude":51.76437759399414,"longitude":-2.188066244125366},"162":{"id":186,"name":"Granada","country_name":"Spain","latitude":37.1781005859375,"longitude":-3.600800037384033},"163":{"id":187,"name":"Girona","country_name":"Spain","latitude":41.983299255371094,"longitude":2.816699981689453},"164":{"id":189,"name":"Genoa","country_name":"Italy","latitude":44.40719985961914,"longitude":8.934000015258789},"165":{"id":190,"name":"Groningen","country_name":"Netherlands","latitude":53.220401763916016,"longitude":6.579999923706055},"166":{"id":191,"name":"Gdansk","country_name":"Poland","latitude":54.36669921875,"longitude":18.63330078125},"167":{"id":192,"name":"Geneva","country_name":"Switzerland","latitude":46.20000076293945,"longitude":6.150000095367432},"168":{"id":193,"name":"Gothenburg","country_name":"Sweden","latitude":57.67169952392578,"longitude":11.980999946594238},"169":{"id":194,"name":"Humberside","country_name":"United Kingdom","latitude":53.57139587402344,"longitude":-0.3534606993198395},"170":{"id":196,"name":"Hamburg","country_name":"Germany","latitude":53.54999923706055,"longitude":10.0},"171":{"id":197,"name":"Hannover","country_name":"Germany","latitude":52.3744010925293,"longitude":9.73859977722168},"172":{"id":200,"name":"Heraklion","country_name":"Greece","latitude":35.34001159667969,"longitude":25.134347915649414},"173":{"id":201,"name":"Helsinki","country_name":"Finland","latitude":60.17559814453125,"longitude":24.934200286865234},"174":{"id":202,"name":"Innsbruck","country_name":"Austria","latitude":47.2682991027832,"longitude":11.39330005645752},"175":{"id":203,"name":"Inverness","country_name":"United Kingdom","latitude":57.47809982299805,"longitude":-4.223299980163574},"176":{"id":204,"name":"Debrecen","country_name":"Hungary","latitude":47.529998779296875,"longitude":21.63920021057129},"177":{"id":205,"name":"Ibiza","country_name":"Spain","latitude":38.90890121459961,"longitude":1.432800054550171},"178":{"id":206,"name":"Izmir","country_name":"Turkey","latitude":38.41473388671875,"longitude":27.14341163635254},"179":{"id":207,"name":"Istanbul","country_name":"Turkey","latitude":41.0099983215332,"longitude":28.96030044555664},"180":{"id":208,"name":"Jonkoping","country_name":"Sweden","latitude":57.782562255859375,"longitude":14.165719032287598},"181":{"id":209,"name":"Klagenfurt","country_name":"Austria","latitude":46.61669921875,"longitude":14.300000190734863},"182":{"id":210,"name":"Karlsruhe Baden-Baden","country_name":"Germany","latitude":49.016700744628906,"longitude":8.399999618530273},"183":{"id":211,"name":"Kortrijk","country_name":"Belgium","latitude":50.82764434814453,"longitude":3.265988349914551},"184":{"id":212,"name":"Kaunas","country_name":"Lithuania","latitude":54.900001525878906,"longitude":23.933300018310547},"185":{"id":213,"name":"Katowice","country_name":"Poland","latitude":50.25,"longitude":19.0},"186":{"id":214,"name":"Krakow","country_name":"Poland","latitude":50.0614013671875,"longitude":19.93720054626465},"187":{"id":215,"name":"Kosice","country_name":"Slovakia","latitude":48.717227935791016,"longitude":21.249677658081055},"188":{"id":216,"name":"Karlovy Vary","country_name":"Czech Republic","latitude":50.23059844970703,"longitude":12.8725004196167},"189":{"id":217,"name":"Karlstad","country_name":"Sweden","latitude":59.36709976196289,"longitude":13.499899864196777},"190":{"id":218,"name":"Kuressaare","country_name":"Estonia","latitude":58.253299713134766,"longitude":22.486099243164062},"191":{"id":219,"name":"Linz","country_name":"Austria","latitude":48.29999923706055,"longitude":14.283300399780273},"192":{"id":220,"name":"Liege","country_name":"Belgium","latitude":50.625,"longitude":5.590700149536133},"193":{"id":221,"name":"Lands End","country_name":"United Kingdom","latitude":50.06626510620117,"longitude":-5.714822292327881},"194":{"id":222,"name":"Liverpool","country_name":"United Kingdom","latitude":53.400001525878906,"longitude":-2.983299970626831},"195":{"id":224,"name":"Leeds","country_name":"United Kingdom","latitude":53.79970169067383,"longitude":-1.5492000579833984},"196":{"id":225,"name":"London","country_name":"United Kingdom","latitude":51.507198333740234,"longitude":-0.1274999976158142},"197":{"id":227,"name":"Lanzarote","country_name":"Spain","latitude":29.01300048828125,"longitude":-13.633999824523926},"198":{"id":228,"name":"Las Palmas de Gran Canaria","country_name":"Spain","latitude":28.099729537963867,"longitude":-15.413430213928223},"199":{"id":230,"name":"Lamezia Terme","country_name":"Italy","latitude":38.964508056640625,"longitude":16.30214500427246},"200":{"id":231,"name":"Larnaca","country_name":"Cyprus","latitude":34.923301696777344,"longitude":33.63050079345703},"201":{"id":232,"name":"Liepaja","country_name":"Latvia","latitude":56.50830078125,"longitude":21.01110076904297},"202":{"id":233,"name":"Luxembourg","country_name":"Luxembourg","latitude":49.610599517822266,"longitude":6.132800102233887},"203":{"id":235,"name":"Lisbon","country_name":"Portugal","latitude":38.745201110839844,"longitude":-9.160400390625},"204":{"id":236,"name":"Ljubljana","country_name":"Slovenia","latitude":46.04999923706055,"longitude":14.51669979095459},"205":{"id":237,"name":"Lappeenranta","country_name":"Finland","latitude":61.05830001831055,"longitude":28.186100006103516},"206":{"id":239,"name":"Lille","country_name":"France","latitude":50.62779998779297,"longitude":3.058300018310547},"207":{"id":240,"name":"Lyon","country_name":"France","latitude":45.7599983215332,"longitude":4.840000152587891},"208":{"id":241,"name":"Lugano","country_name":"Switzerland","latitude":46.01029968261719,"longitude":8.962499618530273},"209":{"id":242,"name":"Lulea","country_name":"Sweden","latitude":65.58312225341797,"longitude":22.145954132080078},"210":{"id":243,"name":"Manchester","country_name":"United Kingdom","latitude":53.479400634765625,"longitude":-2.245300054550171},"211":{"id":244,"name":"Mannheim","country_name":"Germany","latitude":49.48780059814453,"longitude":8.466099739074707},"212":{"id":245,"name":"Memmingen","country_name":"Germany","latitude":47.98780059814453,"longitude":10.181099891662598},"213":{"id":246,"name":"Muenster","country_name":"Germany","latitude":51.96250915527344,"longitude":7.625187873840332},"214":{"id":247,"name":"Munich","country_name":"Germany","latitude":48.13719940185547,"longitude":11.575499534606934},"215":{"id":248,"name":"Madrid","country_name":"Spain","latitude":40.41889953613281,"longitude":-3.6919000148773193},"216":{"id":249,"name":"Malaga","country_name":"Spain","latitude":36.7213020324707,"longitude":-4.421636581420898},"217":{"id":250,"name":"Mahon","country_name":"Ireland","latitude":51.89220428466797,"longitude":-8.404247283935547},"218":{"id":251,"name":"Murcia","country_name":"Spain","latitude":37.98659896850586,"longitude":-1.1414999961853027},"219":{"id":252,"name":"Milan","country_name":"Italy","latitude":45.46689987182617,"longitude":9.1899995803833},"220":{"id":253,"name":"Malta","country_name":"Malta","latitude":42.98529815673828,"longitude":-73.78790283203125},"221":{"id":255,"name":"Maastricht","country_name":"Netherlands","latitude":50.85300064086914,"longitude":5.677000045776367},"222":{"id":257,"name":"Milas","country_name":"Turkey","latitude":37.27455139160156,"longitude":27.808570861816406},"223":{"id":259,"name":"Marseille","country_name":"France","latitude":43.2963981628418,"longitude":5.369999885559082},"224":{"id":260,"name":"Metz","country_name":"France","latitude":49.12030029296875,"longitude":6.177800178527832},"225":{"id":261,"name":"Montpellier","country_name":"France","latitude":43.611900329589844,"longitude":3.87719988822937},"226":{"id":262,"name":"Malmo","country_name":"Sweden","latitude":55.60529327392578,"longitude":13.00015640258789},"227":{"id":263,"name":"Norwich","country_name":"United Kingdom","latitude":52.630001068115234,"longitude":1.2970000505447388},"228":{"id":264,"name":"Newcastle","country_name":"United Kingdom","latitude":55.0077018737793,"longitude":-1.6577999591827393},"229":{"id":265,"name":"Newquay","country_name":"United Kingdom","latitude":50.4119987487793,"longitude":-5.075699806213379},"230":{"id":266,"name":"Nuremberg","country_name":"Germany","latitude":49.45280075073242,"longitude":11.077799797058105},"231":{"id":267,"name":"Naples","country_name":"Italy","latitude":40.83330154418945,"longitude":14.25},"232":{"id":268,"name":"Constanta","country_name":"Romania","latitude":44.173301696777344,"longitude":28.6382999420166},"233":{"id":269,"name":"Nantes","country_name":"France","latitude":47.218101501464844,"longitude":-1.5528000593185425},"234":{"id":270,"name":"Nice","country_name":"France","latitude":43.703399658203125,"longitude":7.266300201416016},"235":{"id":271,"name":"Norrkoping","country_name":"Sweden","latitude":58.590911865234375,"longitude":16.190351486206055},"236":{"id":272,"name":"Ostend","country_name":"Belgium","latitude":51.22585678100586,"longitude":2.9194960594177246},"237":{"id":273,"name":"Alderney","country_name":"United Kingdom","latitude":49.728370666503906,"longitude":-2.2254276275634766},"238":{"id":274,"name":"Oviedo","country_name":"Spain","latitude":43.363399505615234,"longitude":-5.842299938201904},"239":{"id":275,"name":"Olbia","country_name":"Italy","latitude":40.91429901123047,"longitude":9.51509952545166},"240":{"id":276,"name":"Ohrid","country_name":"North Macedonia","latitude":41.11690139770508,"longitude":20.80190086364746},"241":{"id":277,"name":"Oslo","country_name":"Norway","latitude":59.91109848022461,"longitude":10.752799987792969},"242":{"id":279,"name":"Ostrava","country_name":"Czech Republic","latitude":49.835601806640625,"longitude":18.292499542236328},"243":{"id":280,"name":"Plovdiv","country_name":"Bulgaria","latitude":42.1432991027832,"longitude":24.748899459838867},"244":{"id":281,"name":"Plymouth","country_name":"United Kingdom","latitude":50.37139892578125,"longitude":-4.142199993133545},"245":{"id":282,"name":"Paderborn","country_name":"Germany","latitude":51.71670150756836,"longitude":8.76669979095459},"246":{"id":283,"name":"Rostock","country_name":"Germany","latitude":54.08330154418945,"longitude":12.133299827575684},"247":{"id":284,"name":"Palma Majorca","country_name":"Spain","latitude":39.56863021850586,"longitude":2.6482481956481934},"248":{"id":285,"name":"Palermo","country_name":"Italy","latitude":38.115699768066406,"longitude":13.361300468444824},"249":{"id":286,"name":"Pescara","country_name":"Italy","latitude":42.464298248291016,"longitude":14.214200019836426},"250":{"id":287,"name":"Pisa","country_name":"Italy","latitude":43.71670150756836,"longitude":10.399999618530273},"251":{"id":288,"name":"Paphos","country_name":"Cyprus","latitude":34.776100158691406,"longitude":32.42649841308594},"252":{"id":289,"name":"Palanga","country_name":"Lithuania","latitude":55.91669845581055,"longitude":21.063899993896484},"253":{"id":290,"name":"Ponta Delgada","country_name":"Portugal","latitude":37.7400016784668,"longitude":-25.670000076293945},"254":{"id":291,"name":"Porto","country_name":"Portugal","latitude":41.14950180053711,"longitude":-8.610799789428711},"255":{"id":292,"name":"Poprad","country_name":"Slovakia","latitude":49.04999923706055,"longitude":20.299999237060547},"256":{"id":293,"name":"Paris","country_name":"France","latitude":48.85660171508789,"longitude":2.3522000312805176},"257":{"id":294,"name":"Pula","country_name":"Croatia","latitude":44.86669921875,"longitude":13.83329963684082},"258":{"id":295,"name":"Podgorica","country_name":"Montenegro","latitude":42.439701080322266,"longitude":19.26609992980957},"259":{"id":296,"name":"Pardubice","country_name":"Czech Republic","latitude":50.03860092163086,"longitude":15.779199600219727},"260":{"id":297,"name":"Prague","country_name":"Czech Republic","latitude":50.08330154418945,"longitude":14.41670036315918},"261":{"id":299,"name":"Rhodes","country_name":"Greece","latitude":36.441200256347656,"longitude":28.22249984741211},"262":{"id":300,"name":"Reykjavik","country_name":"Iceland","latitude":64.14598083496094,"longitude":-21.942235946655273},"263":{"id":301,"name":"Reus","country_name":"Spain","latitude":41.155555725097656,"longitude":1.1076133251190186},"264":{"id":302,"name":"Rijeka","country_name":"Croatia","latitude":45.3297004699707,"longitude":14.43220043182373},"265":{"id":303,"name":"Rome","country_name":"Italy","latitude":41.89310073852539,"longitude":12.482799530029297},"266":{"id":304,"name":"Rimini","country_name":"Italy","latitude":44.05939865112305,"longitude":12.568300247192383},"267":{"id":305,"name":"Riga","country_name":"Latvia","latitude":56.9474983215332,"longitude":24.10689926147461},"268":{"id":306,"name":"Rotterdam","country_name":"Netherlands","latitude":51.91999816894531,"longitude":4.480000019073486},"269":{"id":307,"name":"Ronneby","country_name":"Sweden","latitude":56.29999923706055,"longitude":15.283332824707031},"270":{"id":308,"name":"Salzburg","country_name":"Austria","latitude":47.79719924926758,"longitude":13.047699928283691},"271":{"id":309,"name":"Sofia","country_name":"Bulgaria","latitude":42.6974983215332,"longitude":23.324100494384766},"272":{"id":310,"name":"Sarajevo","country_name":"Bosnia and Herzegovina","latitude":43.86669921875,"longitude":18.41670036315918},"273":{"id":311,"name":"Southampton","country_name":"United Kingdom","latitude":50.900001525878906,"longitude":-1.399999976158142},"274":{"id":312,"name":"Swansea","country_name":"United Kingdom","latitude":41.75709915161133,"longitude":-71.21199798583984},"275":{"id":314,"name":"Poznan","country_name":"Poland","latitude":52.400001525878906,"longitude":16.91670036315918},"276":{"id":315,"name":"Saarbruecken","country_name":"Germany","latitude":49.2343635559082,"longitude":6.9963788986206055},"277":{"id":316,"name":"Stuttgart","country_name":"Germany","latitude":48.776100158691406,"longitude":9.177499771118164},"278":{"id":317,"name":"Santorini","country_name":"Greece","latitude":36.40711212158203,"longitude":25.456663131713867},"279":{"id":318,"name":"Shannon","country_name":"Ireland","latitude":52.71369934082031,"longitude":-8.868599891662598},"280":{"id":319,"name":"Salamanca","country_name":"Spain","latitude":20.57029914855957,"longitude":-101.19719696044922},"281":{"id":320,"name":"Santiago de Compostela","country_name":"Spain","latitude":42.88050079345703,"longitude":-8.545700073242188},"282":{"id":321,"name":"Sevilla","country_name":"Spain","latitude":37.3828010559082,"longitude":-5.973100185394287},"283":{"id":323,"name":"Skopje","country_name":"North Macedonia","latitude":41.983299255371094,"longitude":21.433300018310547},"284":{"id":325,"name":"Stavanger","country_name":"Norway","latitude":58.97010040283203,"longitude":5.73330020904541},"285":{"id":326,"name":"Strasbourg","country_name":"France","latitude":48.58330154418945,"longitude":7.745800018310547},"286":{"id":327,"name":"Split","country_name":"Croatia","latitude":43.5099983215332,"longitude":16.450000762939453},"287":{"id":329,"name":"Stockholm","country_name":"Sweden","latitude":59.32939910888672,"longitude":18.068599700927734},"288":{"id":330,"name":"Tirana","country_name":"Albania","latitude":41.33000183105469,"longitude":19.81999969482422},"289":{"id":331,"name":"Thessaloniki","country_name":"Greece","latitude":40.63330078125,"longitude":22.950000762939453},"290":{"id":332,"name":"Tenerife","country_name":"Spain","latitude":28.216999053955078,"longitude":-16.589000701904297},"291":{"id":334,"name":"Trieste","country_name":"Italy","latitude":45.63610076904297,"longitude":13.804200172424316},"292":{"id":335,"name":"Turin","country_name":"Italy","latitude":45.06669998168945,"longitude":7.699999809265137},"293":{"id":336,"name":"Tel-Aviv","country_name":"Israel","latitude":32.08330154418945,"longitude":34.79999923706055},"294":{"id":337,"name":"Terceira Island","country_name":"Portugal","latitude":38.72116470336914,"longitude":-27.217639923095703},"295":{"id":338,"name":"Timisoara","country_name":"Romania","latitude":45.759700775146484,"longitude":21.229999542236328},"296":{"id":339,"name":"Trabzon","country_name":"Turkey","latitude":41.005001068115234,"longitude":39.72249984741211},"297":{"id":340,"name":"Tampere","country_name":"Finland","latitude":61.49810028076172,"longitude":23.760799407958984},"298":{"id":341,"name":"Turku","country_name":"Finland","latitude":60.451698303222656,"longitude":22.270000457763672},"299":{"id":342,"name":"Toulouse","country_name":"France","latitude":43.60449981689453,"longitude":1.444000005722046},"300":{"id":343,"name":"Tivat","country_name":"Montenegro","latitude":42.43000030517578,"longitude":18.700000762939453},"301":{"id":345,"name":"Tallinn","country_name":"Estonia","latitude":59.437198638916016,"longitude":24.7450008392334},"302":{"id":346,"name":"Tartu","country_name":"Estonia","latitude":58.380001068115234,"longitude":26.72249984741211},"303":{"id":347,"name":"Umea","country_name":"Sweden","latitude":63.82565689086914,"longitude":20.26307487487793},"304":{"id":348,"name":"Vienna","country_name":"Austria","latitude":48.20830154418945,"longitude":16.37310028076172},"305":{"id":349,"name":"Varna","country_name":"Bulgaria","latitude":43.207801818847656,"longitude":27.916900634765625},"306":{"id":351,"name":"Valencia","country_name":"Spain","latitude":10.16670036315918,"longitude":-68.0},"307":{"id":352,"name":"Valladolid","country_name":"Spain","latitude":41.652000427246094,"longitude":-4.728600025177002},"308":{"id":353,"name":"Venice","country_name":"Italy","latitude":45.439701080322266,"longitude":12.331899642944336},"309":{"id":354,"name":"Verona","country_name":"Italy","latitude":45.4385986328125,"longitude":10.992799758911133},"310":{"id":356,"name":"Vilnius","country_name":"Lithuania","latitude":54.68330001831055,"longitude":25.283300399780273},"311":{"id":357,"name":"Iasi","country_name":"Romania","latitude":47.162200927734375,"longitude":27.588899612426758},"312":{"id":358,"name":"Vaxjo","country_name":"Sweden","latitude":56.878719329833984,"longitude":14.809438705444336},"313":{"id":359,"name":"Visby","country_name":"Sweden","latitude":57.62900161743164,"longitude":18.307100296020508},"314":{"id":361,"name":"Weeze","country_name":"Germany","latitude":51.62672805786133,"longitude":6.201155662536621},"315":{"id":362,"name":"Westerland","country_name":"Germany","latitude":54.90999984741211,"longitude":8.307499885559082},"316":{"id":364,"name":"Warsaw","country_name":"Poland","latitude":52.21670150756836,"longitude":21.033300399780273},"317":{"id":365,"name":"Wroclaw","country_name":"Poland","latitude":51.10770034790039,"longitude":17.03529930114746},"318":{"id":366,"name":"Zweibruecken","country_name":"Germany","latitude":49.248653411865234,"longitude":7.364198207855225},"319":{"id":367,"name":"Zaragoza","country_name":"Spain","latitude":41.64830017089844,"longitude":-0.8830000162124634},"320":{"id":368,"name":"Zagreb","country_name":"Croatia","latitude":45.79999923706055,"longitude":15.949999809265137},"321":{"id":369,"name":"Zadar","country_name":"Croatia","latitude":44.11669921875,"longitude":15.216699600219727},"322":{"id":370,"name":"Zurich","country_name":"Switzerland","latitude":47.37445068359375,"longitude":8.54104232788086},"323":{"id":371,"name":"Chisinau","country_name":"Moldova","latitude":47.00559997558594,"longitude":28.857500076293945},"324":{"id":546,"name":"Pristina","country_name":"Kosovo","latitude":42.66669845581055,"longitude":21.16670036315918},"325":{"id":547,"name":"Thimphu","country_name":"Bhutan","latitude":27.483299255371094,"longitude":89.63330078125},"326":{"id":548,"name":"Ulaanbaatar","country_name":"Mongolia","latitude":47.9202995300293,"longitude":106.91719818115234},"327":{"id":550,"name":"Agartala","country_name":"India","latitude":23.83329963684082,"longitude":91.2667007446289},"328":{"id":551,"name":"Agra","country_name":"India","latitude":27.18000030517578,"longitude":78.0199966430664},"329":{"id":552,"name":"Ahmedabad","country_name":"India","latitude":23.030000686645508,"longitude":72.58000183105469},"330":{"id":553,"name":"Aizawl","country_name":"India","latitude":23.710399627685547,"longitude":92.72000122070312},"331":{"id":554,"name":"Allahabad","country_name":"India","latitude":25.454999923706055,"longitude":81.83999633789062},"332":{"id":626,"name":"Thiruvananthapuram","country_name":"India","latitude":8.5,"longitude":76.89969635009766},"333":{"id":663,"name":"Chicago","country_name":"USA","latitude":41.83729934692383,"longitude":-87.68620300292969}}`;

export const BOOKING_IDS = {
  '10': -3191442,
  '100': -1953257,
  '101': -2587757,
  '102': -1742412,
  '103': -813621,
  '104': -814876,
  '105': -370210,
  '106': -370374,
  '107': -2739166,
  '108': -2739400,
  '109': -110393,
  '11': -1033783,
  '111': -2140479,
  '112': -734728,
  '113': -735338,
  '114': -735347,
  '115': 900039774,
  '116': -1955538,
  '117': -832673,
  '118': -74381,
  '119': -2589607,
  '12': 900052139,
  '120': -2589989,
  '121': -2590498,
  '122': -2590919,
  '123': -850553,
  '124': -1746443,
  '126': -1752234,
  '127': -2739909,
  '128': -372490,
  '129': -373608,
  '13': -788003,
  '130': -111742,
  '131': -252873,
  '132': -253799,
  '134': -1153951,
  '135': -74897,
  '136': -840999,
  '137': -1413751,
  '139': -542184,
  '14': -2437894,
  '140': -2551183,
  '141': -2551235,
  '142': -2591777,
  '145': -1810561,
  '146': -820069,
  '147': -2745636,
  '15': 900052399,
  '150': -1501986,
  '151': -112463,
  '152': -114787,
  '153': -1156174,
  '154': -1420711,
  '155': -1417924,
  '156': -1419880,
  '158': -2594486,
  '159': -1761123,
  '16': -1914533,
  '160': -1761619,
  '161': -1762397,
  '162': -1502554,
  '163': 900039811,
  '164': -79996,
  '165': -2602872,
  '166': -2595386,
  '167': -2595805,
  '169': -2741608,
  '17': -789552,
  '171': -779626,
  '172': -2144027,
  '174': -1873064,
  '175': -1772098,
  '176': -405262,
  '177': -117543,
  '178': -258195,
  '179': -2165075,
  '18': -1022136,
  '180': -2166199,
  '181': -1978544,
  '183': -1176826,
  '184': -2597039,
  '186': -384328,
  '187': -383956,
  '189': -118400,
  '190': -2145032,
  '191': -501400,
  '192': -2552151,
  '193': -2482986,
  '194': -2601408,
  '196': -1785434,
  '197': -1785903,
  '20': -2762812,
  '200': -818172,
  '201': -1364995,
  '202': -1981445,
  '203': -2599537,
  '204': -851960,
  '205': -385722,
  '206': -755097,
  '207': -755070,
  '208': -2492129,
  '209': -1982354,
  '21': 900052907,
  '210': -1803994,
  '211': -1962372,
  '212': -2615427,
  '213': -507224,
  '214': -510625,
  '215': -843247,
  '216': -547025,
  '217': -2493635,
  '218': -2623022,
  '219': -1984321,
  '22': -785169,
  '220': -1964016,
  '222': -2601889,
  '224': -2600941,
  '225': -2601889,
  '227': 900039128,
  '228': -388528,
  '23': -2737683,
  '230': -123036,
  '231': -2738479,
  '232': -3210389,
  '233': -1736191,
  '235': -2167973,
  '236': -87271,
  '237': -1374408,
  '239': -1447079,
  '24': -2214877,
  '240': -1448468,
  '241': -2552969,
  '242': -2502432,
  '243': -2602512,
  '244': -1822951,
  '245': -1824854,
  '246': -1829320,
  '247': -1829149,
  '248': -390625,
  '249': -390787,
  '25': -2331392,
  '250': -1501986,
  '251': -393418,
  '252': -121726,
  '253': -19310,
  '255': -2149006,
  '257': -765320,
  '259': -1449947,
  '26': -801546,
  '260': -1451260,
  '261': -1453260,
  '262': -2503264,
  '263': -2604458,
  '264': -2603966,
  '265': -2604050,
  '266': -1835238,
  '267': -122902,
  '268': -1156502,
  '269': -1454460,
  '27': -1337176,
  '270': -1454990,
  '271': -2508303,
  '272': -1966651,
  '273': -2590498,
  '274': -394970,
  '275': -123255,
  '276': -90608,
  '277': -273837,
  '279': -552065,
  '28': -3103581,
  '280': -837298,
  '281': -2605448,
  '282': -1841161,
  '283': -1852370,
  '284': -395224,
  '285': -123798,
  '286': -124336,
  '287': -124918,
  '288': -2738671,
  '289': -2617520,
  '29': -2334218,
  '290': -2172835,
  '291': -2173088,
  '292': -845153,
  '293': -1456928,
  '294': -93462,
  '295': -92306,
  '296': -552283,
  '297': -553173,
  '299': 213835,
  '30': 900053908,
  '300': -2651804,
  '301': -398917,
  '302': -94414,
  '303': -126693,
  '304': -126373,
  '305': -3212216,
  '306': -2152403,
  '307': -2515591,
  '308': -1989985,
  '309': -838489,
  '31': -970362,
  '310': -94996,
  '311': -2608164,
  '312': -2609220,
  '314': -523642,
  '315': -1854320,
  '316': -1871728,
  '317': -829275,
  '318': -1501211,
  '319': -400105,
  '32': -784833,
  '320': -402059,
  '321': -402849,
  '323': -95841,
  '325': -280816,
  '326': -1471697,
  '327': -96492,
  '329': -2524279,
  '33': 900047975,
  '330': -108649,
  '331': -829252,
  '332': -375686,
  '334': -131346,
  '335': -130938,
  '336': -781545,
  '337': -2179574,
  '338': -1172411,
  '339': -773700,
  '34': -2705195,
  '340': -1388513,
  '341': -1389822,
  '342': -1473166,
  '343': -98296,
  '345': -2625660,
  '346': -2625737,
  '347': -2532255,
  '348': -1995499,
  '349': -839465,
  '35': -2325645,
  '351': -406131,
  '352': -406201,
  '353': -132007,
  '354': -132092,
  '356': -2620663,
  '357': -1161664,
  '358': -2535225,
  '359': -2536120,
  '36': 20030916,
  '362': -1886793,
  '364': -534433,
  '365': -537080,
  '366': -1893493,
  '367': -409149,
  '368': -101579,
  '369': -101499,
  '37': 20015732,
  '370': -2554935,
  '371': -2276223,
  '38': 20023488,
  '39': 20079110,
  '40': 20014181,
  '41': 20023181,
  '42': 20085207,
  '43': -1240261,
  '44': -3091069,
  '45': 900040280,
  '48': 900047908,
  '50': -235402,
  '51': -240905,
  '52': 900000000,
  '53': 900048183,
  '546': -93264,
  '547': -2211419,
  '548': -2353539,
  '55': -2092511,
  '550': -2088213,
  '551': -2088244,
  '552': -2088270,
  '553': -2088317,
  '554': -2088510,
  '56': -2098033,
  '57': -2103041,
  '58': -290029,
  '59': -1898541,
  '60': -1931786,
  '61': -1907565,
  '62': -575268,
  '626': -2113457,
  '63': -574890,
  '64': -666610,
  '65': -979186,
  '66': -2090174,
  '663': 20033173,
  '67': -3249904,
  '68': -714191,
  '69': -782066,
  '70': -1506909,
  '71': -2421883,
  '72': -1603135,
  '73': -1586844,
  '74': -38833,
  '75': -2403069,
  '76': -2679652,
  '77': -3708248,
  '78': -290692,
  '79': -2405456,
  '8': 234027,
  '80': 900040134,
  '81': -3730078,
  '82': -1924465,
  '83': -716583,
  '84': -3092186,
  '85': -1907161,
  '86': -3096949,
  '87': -2637882,
  '88': -3239247,
  '89': -246227,
  '9': -2579372,
  '90': -3253342,
  '91': -2092174,
  '92': -1925268,
  '93': -2106102,
  '94': -2403010,
  '95': -782831,
  '96': -73635,
  '97': -1204094,
  '98': -3234299,
  '99': -1353149,
};

interface IRout {
  euro_price: string;
  duration_minutes: string;
  transportation_type: string;
  from: IPathPoint;
  to: IPathPoint;
}

interface IDetails {
  euro_price: string;
  duration_minutes: string;
  direct_paths: IRout[];
}

export interface IPath {
  pathType: { type: string; icon: SafeHtml[] };
  details: IDetails;
}
// url = http://3.23.159.104:3333
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  currentPaths: IPath[];
  startPoint: string;
  endPoint: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  getUserCountry() {
    let url =
      'https://api.ipgeolocation.io/ipgeo?apiKey=781c831b771b440f9adcf6a6b2e5bb23';
    // let url="https://api.hostip.info/country.php";
    // let url="http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
    // let url="https://ipgeolocation.abstractapi.com/v1/?api_key=f75c54d6ee64403cbf9c58b1b4e5cdf0"
    // let url="http://ip-api.com/json/";
    // return this.http.get(url ,{responseType: 'text'});
    return this.http.get(url);
  }

  getSkyScannerCode(locationName: string) {
    let code = '';

    if (SKYCODEMAP.has(locationName)) {
      return SKYCODEMAP.get(locationName);
    }

    return code;
  }

  getCurrencies(): Observable<any> {
    let url = environment.urlTomCat + 'CheapTrip/GetCurrencyRate';
    return this.http.get<Currency>(url, { observe: 'response' });
    // return
  }

  getAutoCompleteData(data: string, type: string): Observable<string[]> {
    const address =
      URL +
      'getLocations?type=' +
      type +
      '&search_name=' +
      encodeURIComponent(data);

    const DIRECTIONS_FROM = [
      'Moscow',
      'Tel-Aviv',
      'London',
      'Viena',
      'San-Paolo',
      'Krakow',
      'Bansko',
    ];
    return of(DIRECTIONS_FROM);
  }

  public getPaths(from: string, to: string): Observable<IPath[]> {
    this.startPoint = from;
    this.endPoint = to;
    const newPath = JSON.parse(PATHS);
    return this.transformObject(newPath);
  }

  private transformObject(obj: object): Observable<IPath[]> {
    const objArr: IPath[] = [];
    for (const i in obj) {
      const transformedDetails = this.transformDetails(obj[i]);
      const testObj = {
        pathType: this.mapSanitazing().get(i),
        details: transformedDetails,
      };
      const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
      objArr.push(testObj);
    }
    this.currentPaths = objArr;
    return of(objArr);
  }

  private transformDetails(obj: IDetails): IDetails {
    const newPaths = obj.direct_paths.map(item => {
      return {
        ...item,
        duration_minutes: this.transformTime(+obj.duration_minutes),
        euro_price: this.transformPrice(+obj.euro_price),
      };
    });
    const newObj = {
      direct_paths: newPaths,
      euro_price: this.transformPrice(+obj.euro_price),
      duration_minutes: this.transformTime(+obj.duration_minutes),
    };
    return newObj;
  }

  private transformTime(minutes: number): string {
    const days = Math.floor(minutes / 60 / 24);
    const dayStr = days == 0 ? '' : days == 1 ? days + ' day' : days + ' days';
    const hours = Math.floor(minutes / 60 - days * 24);
    const hourStr =
      hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours';
    const min = minutes - days * 24 * 60 - hours * 60;
    const minStr =
      min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes';
    return dayStr + ' ' + hourStr + ' ' + minStr;
  }

  private transformPrice(price: number): string {
    const euro = Math.floor(+price);
    const cent = Math.floor(+price - euro) * 10;
    const euroStr = euro == 0 ? '' : euro + ' euro';
    const centStr = cent == 0 ? '' : cent + ' cent';
    return euroStr + '' + centStr;
  }

  private mapSanitazing(): Map<string, { type: string; icon: SafeHtml[] }> {
    const newMap = new Map<string, { type: string; icon: SafeHtml[] }>();
    PATHMAP.forEach((value, key, map) => {
      const sanitizedArr = value.icon.map(icon =>
        this.sanitizer.bypassSecurityTrustHtml(icon)
      );
      const val = {
        ...value,
        icon: sanitizedArr,
      };

      newMap.set(key, val);
      return newMap;
    });
    return newMap;
  }

  public getAllEnLocationsTomcat(): Observable<any> {
    let url =
      environment.urlTomCat +
      'CheapTrip/getLocations?type=' +
      '0' +
      '&search_name=' +
      '';
    let locations;
    this.http.get(url).subscribe(data => {
      locations = data;
    });
    return locations;
  }
  public getAllRuLocationsTomcat(): Observable<any> {
    let url =
      environment.urlTomCat +
      'CheapTrip/getLocations?type=' +
      '0' +
      '&search_name=' +
      '' +
      '&language_name=ru';

    return this.http.get(url, { observe: 'response' });
  }
}
