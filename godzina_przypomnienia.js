moment.locale('pl');
//toLocaleDateString()
var K = moment(R).format('LLLL');
var T = moment(R).format('HH:mm');
entry().set("godzina przypomnienia", T)

message(K)
//message(T)
