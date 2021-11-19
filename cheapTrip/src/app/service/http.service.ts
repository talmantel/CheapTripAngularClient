import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {Currency} from '../currency-selector/currency-selector.component';
import {IPathPoint} from '../trip-direction/trip-direction.model';

const URL = 'MY_URL';
const PATHMAP = new Map();

const SKYCODEMAP = new Map([
  ["Tehran", "thra"], ["Tashkent", "tas"], ["Sanaa", "sah"], ["Phnom Penh", "pnh"], ["Naypyidaw", "nyt"],
  ["Muscat", "mct"], ["Manila", "mnlp"], ["Male", "mle"], ["Lhasa", "lxa"], ["Kuwait City", "kwi"],
  ["Kathmandu", "ktm"], ["Kabul", "kbl"], ["Islamabad", "isb"], ["Dushanbe", "dyu"], ["Doha", "doh"],
  ["Dhaka", "dac"], ["Colombo", "cmba"], ["Bishkek", "fru"], ["Beirut", "bey"], ["Bandar Seri Begawan", "bwn"],
  ["Baghdad", "bgw"], ["Astana Nur-Sultan", "nqz"], ["Ashgabat", "asb"], ["Amman", "amma"], ["Manama", "bah"],
  ["Tbilisi", "tbs"], ["Baku", "gyd"], ["Yerevan", "evn"], ["Honolulu", "hnl"], ["San Francisco", "sfo"],
  ["Orlando", "orlb"], ["Las Vegas", "lasa"], ["Los Angeles", "laxa"], ["Miami", "mia"], ["New York", "nyca"],
  ["Johannesburg", "jnba"], ["Dammam", "dmm"], ["Riyadh", "ruh"], ["Cancun", "cun"], ["Fukuoka", "fuk"],
  ["Chiba", ""], ["Kyoto", ""], ["Osaka", "osaa"], ["Jerusalem", ""], ["Batam", "bth"], ["Kolkatta", "ccu"],
  ["Jaipur", "jai"], ["Chennai", "maa"], ["Hurgada", "hrg"], ["Beijing", "any"],
  ["Zhuhai", "zuh"], ["Guilin", "kwl"], ["Vancouver", "yvra"], ["Toronto", "ytoa"],


  ["Rio de Janeiro", "rioa"], ["Buenos Aires", "buea"], ["Bangalore", "blr"], ["Krabi", "kbv"],
  ["Jeju", "cju"], ["Abu Dhabi", "auha"], ["Auckland", "akl"], ["Cebu", "ceb"], ["Sydney", "syd"],
  ["Melbourne", "mela"], ["Marrakech", "rak"], ["Penang Island", "pen"],
  ["Jakarta", "cgki"], ["Ha Noi", "han"], ["Cairo", "cai"], ["Johor Bahru", "jhb"],
  ["Denpasar", "dps"], ["Ho Chi Minh", "sgn"], ["Shanghai", "csha"], ["Seoul", "sela"],
  ["Medina", "med"], ["Guangzhou", "can"], ["Mecca", "jed"], ["Taipei", "tpet"], ["Pattaya", "utp"],
  ["Tokyo", "tyoa"], ["Phuket", "hkt"], ["Mumbai", "bom"], ["Shenzhen", "szx"], ["Delhi", "del"],
  ["Kuala Lumpur", "kulm"], ["Dubai", "dzba"], ["Singapore", "sins"], ["Macau", "mfm"], ["Bangkok", "bkkt"],
  ["Hong Kong", "hkga"], ["Antwerp", "anr"], ["Aberdeen", "abz"], ["Augsburg", "agb"], ["Alexandroupolis", "axd"],
  ["Athens", "ath"], ["Alicante", "alc"], ["Almeria", "lei"], ["Aalborg", "aal"], ["Aarhus", "aar"],
  ["Ancona", "aoi"], ["Aosta", ""], ["Amsterdam", "ams"], ["Alanya", "gzp"], ["Ankara", "esb"], ["Antalya", "ayt"],
  ["Altenrhein", "ach"], ["Brussels", "brus"], ["Burgas", "boj"], ["Banja Luka", "bnx"], ["Belfast", "belf"],
  ["Birmingham", "bhx"], ["Bournemouth", "boh"], ["Bristol", "brs"], ["Budapest", "bud"], ["Berlin", "ber"],
  ["Bremen", "bre"], ["Billund", "bll"], ["Barcelona", "bcn"], ["Bilbao", "bio"], ["Bologna", "blq"],
  ["Bergen", "bgo"], ["Bodo", "boo"], ["Bucharest", "otp"], ["Belgrade", "beli"], ["Bratislava", "bts"],
  ["Bordeaux", "bod"], ["Brno", "brq"], ["Basel", "bsl"], ["Bern", "brn"], ["Cardiff", "cwl"], ["Cambridge", ""],


  ["Coventry", ""], ["Cologne", "cgn"], ["Corfu", "cfu"], ["Copenhagen", "cope"], ["Cork", "ork"], ["Cagliari", "cag"],
  ["Catania", "cta"], ["Cluj-Napoca", "clj"], ["Clermont-Ferrand", "cfe"], ["Chambery-Savoie", "cmf"],
  ["Cherbourg", "cfr"], ["Doncaster", "dsa"], ["Dortmund", "dtm"], ["Dresden", "drs"], ["Duesseldorf", "duss"], ["Dublin", "dub"],
  ["Dalaman", "dlm"], ["Dubrovnik", "dbv"], ["East Midlands", "ema"], ["Edinburgh", "edi"], ["Exeter", "ext"], ["Esbjerg", "ebj"],
  ["Eilat", "etm"], ["Eindhoven", "ein"], ["Frankfurt", "fran"], ["Friedrichshafen", "fdh"], ["Fuerteventura", "fue"],
  ["Florence", "flr"], ["Floro", "fro"], ["Faro", "fao"], ["Funchal", "fnc"], ["Graz", "grz"], ["Gorna Oryahovitsa", ""],
  ["Guernsey", "gci"], ["Glasgow", "glas"], ["Gloucestershire", "glo"], ["Granada", "grx"], ["Girona", "gro"], ["Galway", ""],
  ["Genoa", "goa"], ["Groningen", "grq"], ["Gdansk", "gdn"], ["Geneva", "gva"], ["Gothenburg", "goth"], ["Humberside", "huy"],
  ["Hamburg", "hamb"], ["Hannover", "haj"], ["Heraklion", "her"], ["Helsinki", "hel"], ["Innsbruck", "inn"], ["Inverness", "inv"],


  ["Debrecen", "deb"], ["Ibiza", "ibz"], ["Izmir", "izmi"], ["Istanbul", "ista"], ["Jonkoping", "jkg"], ["Klagenfurt", "klu"],
  ["Karlsruhe Baden-Baden", "fkb"], ["Kortrijk", "kjk"], ["Kaunas", "kun"], ["Katowice", "ktw"], ["Krakow", "krk"],
  ["Kosice", "ksc"], ["Karlovy Vary", "klv"], ["Karlstad", "ksd"], ["Kuressaare", "ure"], ["Linz", "lnz"], ["Liege", "lgg"],
  ["Land's End", "leq"], ["Liverpool", "lpl"], ["Lydd", ""], ["Leeds", "lba"], ["London", "lond"], ["Luebeck", ""],
  ["Lanzarote", "ace"], ["Las Palmas de Gran Canaria", "lpa"], ["Lamezia Terme", "suf"], ["Larnaca", "lca"],
  ["Liepaja", "lpx"], ["Luxembourg", "lux"], ["Lisbon", "lis"], ["Ljubljana", "lju"], ["Lappeenranta", "lpp"],
  ["Le Touquet", ""], ["Lille", "lil"], ["Lyon", "lyon"], ["Lugano", "lug"], ["Lulea", "lla"], ["Manchester", "man"],
  ["Mannheim", "mhg"], ["Memmingen", "fmm"], ["Muenster", "fmo"], ["Munich", "muc"], ["Madrid", "mad"], ["Malaga", "agp"],
  ["Mahon", "mah"], ["Murcia", "rmu"], ["Milan", "mila"], ["Malta", "mla"], ["Monte Carlo", ""], ["Maastricht", "mst"], ["Milas", "bjv"],
  ["Marseille", "mrs"], ["Metz", "etz"], ["Montpellier", "mpl"], ["Malmo", "mmx"], ["Norwich", "nwi"], ["Newcastle", "ncl"],


  ["Newquay", "nqy"], ["Nuremberg", "nue"], ["Naples", "nap"], ["Constanta", "cnd"], ["Nantes", "nte"], ["Nice", "nce"],
  ["Norrkoping", "nrk"], ["Ostend", "ost"], ["Alderney", "aci"], ["Oviedo", "ovd"], ["Olbia", "olb"], ["Ohrid", "ohd"], ["Oslo", "oslo"],
  ["Ostrava", "osr"], ["Plovdiv", "pdv"], ["Plymouth", "plh"], ["Paderborn", "pad"], ["Rostock", "rlg"], ["Palma Majorca", "pmi"],
  ["Palermo", "pmo"], ["Pescara", "psr"], ["Pisa", "psa"], ["Paphos", "pfo"], ["Palanga", "plg"], ["Ponta Delgada", "pdl"],
  ["Porto", "opo"], ["Poprad", "tat"], ["Paris", "pari"], ["Pula", "puy"], ["Podgorica", "tgd"], ["Pardubice", "ped"],
  ["Prague", "prg"], ["Parnu", ""], ["Rhodes", "rho"], ["Reykjavik", "reyk"], ["Reus", "reu"], ["Rijeka", "rjk"], ["Rome", "rome"],
  ["Rimini", "rmi"], ["Riga", "rix"], ["Rotterdam", "rtm"], ["Ronneby", "rnb"], ["Salzburg", "szg"], ["Sofia", "sof"], ["Sarajevo", "sjj"],
  ["Southampton", "sou"], ["Swansea", "sws"], ["Shoreham", ""], ["Poznan", "poz"], ["Saarbruecken", "saar"], ["Stuttgart", "str"],
  ["Santorini", "jtr"], ["Shannon", "snn"], ["Salamanca", "slm"], ["Santiago de Compostela", "scq"], ["Sevilla", "svq"], ["Siauliai", ""],
  ["Skopje", "skp"], ["Stavanger", "svg"], ["Strasbourg", "sxb"], ["Split", "spu"], ["Sion", ""], ["Stockholm", "stoc"], ["Tirana", "tia"],
  ["Thessaloniki", "skg"], ["Tenerife", "tene"], ["Treviso", ""], ["Trieste", "trs"], ["Turin", "trn"], ["Tel-Aviv", "tlv"],


  ["Terceira Island", "ter"], ["Timisoara", "tsr"], ["Trabzon", "tzx"], ["Tampere", "tmp"], ["Turku", "tku"], ["Toulouse", "tls"],
  ["Tivat", "tiv"], ["Trollhattan", ""], ["Tallinn", "tll"], ["Tartu", "tay"], ["Umea", "ume"], ["Vienna", "vie"], ["Varna", "var"], ["Valencia", "vlc"],
  ["Valladolid", "vll"], ["Venice", "veni"], ["Verona", "vero"], ["Ventspils", ""], ["Vilnius", "vno"], ["Iasi", "ias"], ["Vaxjo", "vxo"], ["Visby", "vby"],
  ["Weeze", "nrn"], ["Westerland", "gwt"], ["Wilhelmshaven", ""], ["Warsaw", "waw"], ["Wroclaw", "wro"], ["Zweibruecken", "zqw"], ["Zaragoza", "zaz"],
  ["Zagreb", "zag"], ["Zadar", "zad"], ["Zurich", "zrh"], ["Chisinau", "kiv"], ["Minsk", "msqa"], ["Gomel", "gme"], ["Brest", "bqt"], ["Vitebsk", "vtb"],
  ["Hrodna", "gna"], ["Kiev", "kiev"], ["Kherson", "khe"], ["Chernivtsi", "cwc"], ["Odesa", "ods"], ["Zaporizhia", "ozh"], ["Vinnytsia", "vin"], ["Lviv", "lwo"],


  ["Dnipro", "dnk"], ["Kharkiv", "hrk"], ["Ivano-Frankivsk", "ifo"], ["Moscow", "mosc"], ["Saint Petersburg", "led"], ["Sochi", "aer"], ["Novosibirsk", "ovb"],
  ["Ekaterinburg", "svx"], ["Krasnodar", "krr"], ["Anapa", "aaq"], ["Kaliningrad", "kgd"], ["Platov", ""], ["Samara", "kuf"], ["Irkutsk", "ikt"],
  ["Krasnoyarsk", "kja"], ["Ufa", "ufa"], ["Kazan", "kzn"], ["Mineralnye Vody", "mrv"], ["Tyumen", "tjm"], ["Khabarovsk", "khv"], ["Surgut", "sgc"], ["Vladivostok", "vvo"],
  ["Yakutsk", "yaku"], ["Perm", "pee"], ["Chelyabinsk", "cek"], ["Novy Urengoy", "nux"], ["Murmansk", "mmk"], ["Nizhniy Novgorod", "goj"],
  ["Volgograd", "vog"], ["Yuzhno-Sakhalinsk", "uus"], ["Arkhangelsk", "arh"], ["Omsk", "oms"], ["Makhachkala", "mcx"], ["Gelendzik", "gdz"],
  ["Petropavlovsk-Kamchatsky", "pkc"], ["Naberezhnye Chelny", "nbc"], ["Tomsk", "tof"], ["Nizhnevartovsk", "njc"], ["Orenburg", "ren"], ["Voronezh", "voz"],
  ["Syktyvkar", "scw"], ["Barnaul", "bax"], ["Astrakhan", "asf"], ["Norilsk", "nsk"], ["Belgorod", "ego"], ["Salehard", "sly"], ["Chita", "hta"],
  ["Izhevsk", "ijk"], ["Khanty-Mansiysk", "hma"], ["Saratov", "sarb"], ["Stavropol", "stw"], ["Kemerovo", "kej"], ["Abakan", "aba"], ["Grozny", "grv"],
  ["Vladikavkaz", "ogz"], ["Ulyanovsk", "ulya"], ["Penza", "pez"], ["Saransk", "skx"], ["Nadym", "nym"], ["Magnitogorsk", "mqf"], ["Rostov on Don", "rov"],
  ["Cheboksary", "scy"], ["Nalchik", "nal"], ["Cherepovets", "cee"], ["Magas", "igt"], ["Kirov", "kvx"], ["Naryan-Mar", "nnm"], ["Bratsk", "btk"],


  ["Elista", "esl"], ["Gorno-Altaysk", "rgk"], ["Tambov", "tbw"], ["Vorkuta", "vkt"], ["Neryungri", "ner"], ["Ivanovo", "iwa"], ["Anadyr", "dyr"],
  ["Kursk", "urs"], ["Kogalym", "kgp"], ["Kurgan", "kro"], ["Petrozavodsk", "pes"], ["Orsk", "osw"], ["Kaluga", "klf"], ["Okha", "ohh"], ["Briansk", "bzk"],
  ["Kyzyl", "kyz"], ["Tiksi", "iks"], ["Yaroslavl", "iar"], ["Pevek", "pwe"], ["Velikij Ustyug", "vus"], ["Aldan", "adh"], ["Beloyarsky", "eyk"],
  ["Bodaybo", "odo"], ["Ust-Kut", "ukx"], ["Usinsk", "usk"], ["Nyagan", "nya"], ["Lensk", "ulk"], ["Batagay", "bqj"], ["Uraj", "urj"],
  ["Nikolaevsk-na-Amure", "nli"], ["Berezovo", "ezv"], ["Bugulma", "uua"], ["Belaya Gora", "bgn"], ["Mendeleyevo", ""], ["Lipetsk", "lpk"], ["Nyurba", "nyr"],
  ["Ust-Maya", "ums"], ["Iturup", "itu"], ["Keperveyem", "kpw"], ["Deputatsky", "dpt"], ["Ust-Nera", "usr"], ["Terney", "nei"], ["Olenyok", "onk"],
  ["Cherskiy", "cyx"], ["Kavalerovo", "kvr"], ["Igarka", "iaa"], ["Igrim", "irm"], ["Ust-Kuyga", "ukg"], ["Hatanga", "htg"], ["Dalnegorsk", "dhg"],
  ["Nogliki", "ngk"], ["Chokurdah", "ckh"], ["Tynda", "tyd"], ["Podkamennaya Tunguska", "tgp"], ["Zhigansk", "zix"], ["Dikson", "dks"],
  ["Verkhnevilyuysk", "vhv"], ["Vilyuysk", "vyi"], ["Dalnerechensk", "dlr"], ["Svetlaya", "etl"], ["Komsomolsk Na Amure", "kxk"], ["Plastun", "tly"],
  ["Kotlas", ""], ["Gagra", ""], ["New Athos", ""], ["Sukhumi", ""], ["Ukhta", "uct"], ["Pristina", "prn"], ["Thimphu", ""], ["Ulaanbaatar", "uln"],
  ["Agartala", "ixa"], ["Agra", "agp"], ["Ahmedabad", "amd"], ["Aizawl", "ajl"], ["Allahabad", "ixd"],


  ["Amritsar", "atq"], ["Aurangabad", "ixu"], ["Bagdogra", "ixb"], ["Belgaum", "ixg"], ["Bhavnagar", "bhu"],
  ["Bhopal", "bho"], ["Bhubaneswar", "bbi"], ["Bhuj", "bhj"], ["Bikaner", "bkb"], ["Chandigarh", "ixc"],
  ["Bhopal", "bho"], ["Bhubaneswar", "bbi"], ["Bhuj", "bhj"], ["Bikaner", "bkb"], ["Chandigarh", "ixc"],
  ["Coimbatore", "cjb"], ["Dehradun", "ded"], ["Dharamsala", "dhm"], ["Dibrugarh", "dib"], ["Dimapur", "dmu"],
  ["Diu", "diu"], ["Gaya", "gay"], ["Chicalim", "goi"], ["Goa", "goi"], ["Chicalim / Goa", "goi"],
  ["Gorakhpur", "gop"], ["Guwahati", "gau"], ["Gwalior", "gwl"], ["Hubli", "hbx"], ["Hyderabad", "hyd"],
  ["Imphal", "imf"], ["Indore", "idr"], ["Jabalpur", "jlr"], ["Jaisalmer", "jsa"], ["Jalgaon", "jlg"],


  ["ammu", "ixj"], ["Jamnagar", "jga"], ["Jodhpur", "jdh"], ["Jorhat", "jrh"],
  ["Kadapa", "cdp"], ["Kandla", "ixy"], [" Kanpur", "knu"], [" Kazi Nazrul Islam", "rdp"],
  ["Khajuraho", "hjr"], ["Kochi", "cok"], ["Kolhapur", "klh"], [" Kozhikode", "ccj"],
  ["Kulu", "kuu"], ["Leh", "ixl"], [" Lucknow", "lko"], ["Ludhiana", "luh"],
  ["Madurai", "ixm"], ["Mangalore", "ixe"], ["Mysore", "myq"], ["Nagpur", "nag"],
  ["Nanded", "ndc"], ["Nasik", "isk"], [" Pantnagar", "pgh"], ["Pasighat", "ixt"],
  ["Patna", "pat"], ["Porbandar", "pbd"], ["Port blair", "ixz"], ["Puducherry", ""],
  [" Pune", "pnq"], ["Raipur", "rpr"],


  [" Rajahmundry ", " rja"], ["  Rajkot	", "raj"], ["  Ranchi	", "ixr"], ["  Salem	", "sxv"],
  ["  Shillong", "shl"], [" Shimla", ""], ["  Shirdi", "sag"],
  ["  Silchar	", " ixs"], [" Srinagar", "sxr"], [" Surat", "stv"], [" Tezpur", "tez"],
  [" Thiruvananthapuram", "trv"], ["Tiruchirapalli", "trz"], [" Tirupati", "tir"], [" Tuticorin", "tcr"],
  [" Udaipur", "udr"], [" Vadodara", "bdq"], [" Varanasi", "vns"], [" Vidyanagar	", "vdy"],
  ["Vijayawada	", "vga"], [" Visakhapatnam	", "vtz"], [" Chiang Mai", "cnx"], [" Hat Yai	", "dy"],
  [" Koh Samui	", "usm"], [" Udon Thani	", "uth"], [" Chiang Rai", "cei"], ["Khon Kaen", "kkc"],
  [" Surat Thani", "urt"], [" Ubon Ratchathani", "ubp"], [" Nakhon Si Thammarat", "nst"],


  [" Phitsanulok", "phs"], ["Trang", "tst"], [" Roi Et", "roi"], [" Nakhon Phanom", "kop"],
  [" Buri Ram	", "bfv"], ["  Sakon Nakhon", "sno"], [" Lampang", "lpt"], [" Mae Sot", "maq"],
  ["  Ranong", "unn"], ["Chumphon	", "cjm"], [" Loei,", "loe"], [" Narathiwat", "naw"],
  ["  Trat", "tdx"], [" Phrae", "prh"], [" Sukhothai", "ths"], [" Mae Hong Son	", "hgn"],
  [" Hua Hin", "hhq"], ["  Pai", "  pyy"], [" Chicago", "chia"], ["  Houston	", "houa"],
  ["  Phoenix", "phxa"], [" Philadelphia", "phla"], [" San Antonio	", "sata"], ["  San Diego", "sana"],
  [" Dallas", "dfwa"], [" San Jose	", "sjca"], [" Austin", "aus"], [" Fort Worth", "ftw"], [" Jacksonville	", "jaxa"],
  ["Columbus	", "cmha"], [" Charlotte", "clta"], [" Indianapolis", "ind"], ["Seattle", "seaa"], ["Denver", "dena"],
  ["Washington", "wasa"], ["Boston	", "bos"], ["El Paso	", "elpa"], ["Nashville", "bna"], ["Detroit", "dtta"],


  [" Portland", "pdx"], [" Oklahoma City", "okca"], ["Memphis	", "mema"], ["Louisville", "sdfa"], ["Baltimore	", "bwi"],
  [" Milwaukee	", "mkea"], [" Albuquerque", "abq"], ["Tucson", "tusa"], ["Fresno", "fat"], [" Mesa	", "msc"],
  ["Atlanta", "atla"], ["Sacramento", "saca"], [" Kansas City", "mkca"], [" Colorado Springs	", "cosa"],
  [" Raleigh", "rdu"], ["Omaha", "oma"], ["Long Beach	", "lgb"], [" Virginia Beach", "orf"], [" Minneapolis	", "mspa"],
  [" Oakland", "oak"], ["Tampa	", "tpaa"], ["Arlington", ""], ["Tulsa	", "tulb"], ["Bakersfield	", "bfl"],
  [" New Orleans", "msya"], [" Wichita	", "icta"], ["Aurora", ""], ["Cleveland	", "clea"], ["Anaheim", ""],
  ["Riverside", ""], ["San Juan", ""], ["  Santa Ana	", "sna"], ["Henderson", ""], ["Lexington", "lex"],


  [" Corpus Christi", "crp"], [" Stockton", ""], ["  St. Paul", ""], [" Cincinnati", "cvga"], [" Irvine", ""],
  [" Greensboro", ""], ["Pittsburgh	pita", ""], ["Lincoln	lnk", ""], [" St. Louis	stla", ""], [" Plano", ""],
  [" Anchorage	anca", ""], [" Newark", ""], [" Chula Vista", ""], ["St. Petersburg FL", "  spg"],
  [" Jersey City", ""], [" Fort Wayne", "fwa"], ["  Toledo", ""], ["  Chandler", ""], ["Laredo	", "lrd"],
  ["Madison", "msn"], ["Scottsdale", ""], ["Lubbock", " lbb"], [" Reno", "rno"], ["Gilbert", ""],

  ["Buffalo", "buf"], [" Glendale", ""], [" North Las Vegas", ""], ["  Winston-Salem", "int"],
  ["Chesapeake", ""], [" Garland", ""], ["Irving", ""], ["  Hialeah", ""], [" Norfolk	orfa", ""],
  ["Fremont", ""], ["Bois", ""], ["Paradise", ""], [" Richmond", "ric"], [" Spokane", "gega"],


  ["Modesto", "mod"], ["Fontana", ""], ["Des Moines", "dsm"], [" San Bernardino", "sbd"],
  ["Baton Rouge	", "btr"], ["Frisco", ""], ["Salt Lake City	", "slc"], ["Moreno Valley", ""],
  ["Oxnard", "oxr"], ["Santa Clarita", ""], ["McKinney", ""], [" Port St. Lucie", ""],
  [" Fayetteville	", "fyva"], [" Grand Rapids", "grr"], [" Rochester", "roc"], [" Charleston	", "chs"],
  ["Palm Springs	", "pspa"], ["Sedona", ""], ["Branson	", "bkg"], ["Montreal	", "ymqa"],



  [" Calgary", "yyc"], [" Edmonton", "yeg"], [" Ottawa", "yowa"], [" Winnipeg", "ywg"],
  ["Quebec City	", "yqba"], ["Hamilton	", "hm"], ["Kitchener", "ykf"], ["Victoria	", "yyja"],
  [" Halifax", "yhza"], [" Oshawa", ""], ["Windsor", "yqg"], ["Saskatoon", "yxe"], [" St. Catharines", ""],
  ["Regina", "yqr"], ["St. John's	", "yyt"], ["Kelowna	", "ylw"], [" Rishikesh", ""], [" Gokarna", ""],
  [" Arambol", ""], ["Tiruvannamalai", ""], ["Darjeeling", ""], [" Haridwar", ""],
  [" Kanyakumari", ""], [" Buddh Gaya", ""], [" Sarnath", ""], [" Kushinagar", ""],
  [" Shrawasti", ""], [" Rajgir", ""], ["Sankasya", ""], ["Tirumala", ""], ["Badrinath", ""], ["Kedarnath", ""],
  [" Prayagraj", ""], ["Mathura", ""], [" Vrindavan", ""], ["Somnath", ""], ["Dwarka", ""], ["Jammu", ""],
  [" Ujjain", ""], [" Shirdi", ""], ["Palolem", ""], ["Varkala", ""], ["Alwar", ""], ["Amritapuri", ""]

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

"flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,
"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},
{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],
"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus",
"euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},
{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,
"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;

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
  ) {
  }


  getUserCountry() {
    // let url="https://api.hostip.info/country.php";
    // let url="http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
    let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=f75c54d6ee64403cbf9c58b1b4e5cdf0"
    // let url="http://ip-api.com/json/";
    // return this.http.get(url ,{responseType: 'text'});
    return this.http.get(url);

  }


  getSkyScannerCode(locationName: string) {
    let code = "";

    if (SKYCODEMAP.has(locationName)) {

      return SKYCODEMAP.get(locationName);
    }

    return code;

  }

  getCurrencies(): Observable<any> {
    let url = environment.urlTomCat +
      'CheapTrip/GetCurrencyRate';
    return this.http.get<Currency>(url, {observe: "response"});

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
      const newObj = {pathType: PATHMAP.get(i), details: transformedDetails};
      objArr.push(testObj);
    }
    this.currentPaths = objArr;
    return of(objArr);
  }

  private transformDetails(obj: IDetails): IDetails {
    const newPaths = obj.direct_paths.map((item) => {
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
      const sanitizedArr = value.icon.map((icon) =>
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
    let url = environment.urlTomCat +
      'CheapTrip/getLocations?type=' +
      '0' +
      '&search_name=' +
      '';
    let locations;
    this.http.get(url).subscribe(data => {
        locations = data;
      }
    );
    return locations;

  }

  public getAllRuLocationsTomcat(): Observable<any> {
    let url = environment.urlTomCat +
      'CheapTrip/getLocations?type=' +
      '0' +
      '&search_name=' +
      '' +
      '&language_name=ru';

    return this.http.get(url, {observe: "response"});

  }
}
