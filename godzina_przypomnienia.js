moment.locale('pl');
//toLocaleDateString()
var K = moment(R).format('LLLL');
var T = moment(R).format('HH:mm');
entry().set("godzina przypomnienia", T)
entry().set("godzina przypomnienia archiwum", entry().field("godzina przypomnienia archiwum") + " " + T)
message(K)
//message(T)
