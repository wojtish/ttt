// na_start_powiadomienie_memento.js
moment.locale('pl');
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(0, 'minutes');

entry().remind(R.toDate());
