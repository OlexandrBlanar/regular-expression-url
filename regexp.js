const regionsDb = [
    'vinnitskaya',
    'zhitomirskaya',
    'ternopolskaya',
    'khmelnitskaya',
    'lvovskaya',
    'chernigovskaya',
    'kharkovskaya',
    'sumskaya',
    'rovenskaya',
    'kiyevskaya',
    'dnepropetrovskaya',
    'odesskaya',
    'zaporozhskaya',
    'ivano-frankovskaya',
    'kirovogradskaya',
    'volynskaya',
    'nikolayevskaya',
    'poltavskaya',
    'zakarpatskaya',
    'khersonskaya',
    'cherkasskaya',
    'chernovitskaya',
    'donetskaya',
    'luganskaya'
];

let regionsStr = '';
regionsDb.forEach((elem, i) => {
    regionsStr += (i < regionsDb.length-1) ? elem + '|' : elem;
});

console.log(regionsStr);
const language = '\/(ru|uk)\/';
const newBuidings = 'novostroyki';
const region = '(?:-(' + regionsStr + ')-(?:oblast))?';

const ifAfterCity = '(?!rayon|metro|levyy|pravyy|vozle|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|' +
    'taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|' +
    'odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)';
const ifAfterAria = '(?!metro|levyy|pravyy|vozle|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|' +
    'taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|' +
    'odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)';
const ifAfterMetro = '(?!levyy|pravyy|vozle|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|' +
    'taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|' +
    'odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)';
const ifAfterStreet = '(?!sdannyye|stroyashchiyesya|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|ekonom-klassa|' +
    'standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|' +
    'chetyrekhkomnatnyye|rassrochka|s-remontom)';

const city = '(?:-(' + ifAfterCity + '(?:[a-z]+)' + '-?' + ifAfterCity +'(?:[a-z]+)))?';
const geolocation = {
    aria: '(?:-(?:rayon)-((?:[a-z]+)' + '-?' + ifAfterAria + '(?:[a-z]+)))?',
    metro: '(?:-(?:metro)-((?:[a-z]+)' + '-?' + ifAfterMetro + '(?:[a-z]+)))?',
    shore: '(?:-(levyy-bereg|pravyy-bereg))?',
    nearMetro: '(?:-(vozle-metro))?',
    street: '(?:-(?:ulitsa)-((?:[a-z]+)' + '-?' + ifAfterStreet + '(?:[a-z]+)))?'
};
const options = {
    build: '(?:-(sdannyye))?',
    inProcessOfConstruction: '(?:-(stroyashchiyesya))?',
    type: '(?:-(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?',
    сlassRealty: '(?:-(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?',
    roommate: '(?:-(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?',
    termination: '(?:-(rassrochka))?',
    repair: '(?:-(s-remontom))?'
};

regExp = new RegExp(language + newBuidings + region + city + geolocation.aria + geolocation.metro +
geolocation.shore +  geolocation.nearMetro + geolocation.street + options.build + options.inProcessOfConstruction +
options.type + options.сlassRealty + options.roommate + options.termination + options.repair);

