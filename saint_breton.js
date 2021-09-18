exports.action = function(data){

var mm;
var today= new Date();
var smonth= 1+(today.getMonth());
if (smonth==1) {
mm= new Array("Mari...Maï","Bazil","Jenovefa","Ruvon","Konvohuon","Peran...Tifenn","Kentigerna","Madeg","Faelan","Tezwin","Boandan","Kentigern","Enogad","Tarieg","Ida","Brevalaer","Anton","Bleizmag","Ingwenog","Doezwal","Oanez","Honhouarn","Kadog","Sant Fransez ar Zal","Paol kristenned","Konan...Conan","Gildwin","Gwenvidig Juluan Maner","Gweltaz","Marzhina...Gildas","Maedog");}
if (smonth==2) {
mm= new Array("Berc\'hed","Chandelour","Yann ar Gael","Morvred","Agata","Amanz","Dehren","Yagu...Jagu","Telio","Kronan","Ehouarn","Riog...Rieg","Konran","Klaoda...Glaoda","Finan","Kireg","Fintan","Odran","Olkan","Gwenn","Kador sant Per","Inog","Gwenvidig Roparzh","Maeldan","Onen","Komgan","Ruellan...Rivelen","...");}
if (smonth==3) {
mm= new Array("Albin","Jaoua...Yaouen","Gwenole","Nonn","Gwezeneg","Kadroeg","Levenez","Senan","Laouen","Maela","Himelin","Paol","Muran","Kennoka","Loeiza","Benniget","Padrig","Korvaz","Joseb...Jobig","Justog","Endeg","Feleb...Fulup...Felepig","Maedog","Kristell","Ar Helou Mad","Goal","Gelas","Gondlez","Gwalduz","Gwillerm...Lomm...Lomig","Gwion");}
if (smonth==4) {
mm= new Array("Jilberz","Keallah","Iduned","Gwier...Goneri","Visant","Iniorog","Marsellin","Kleden","Gwendad","Gwazeg","Stanislas","Bodmael","Karadeg","Ruazan","Padern","Benead Job","Donnan","Ouzog","Estin...Jestin","Hamon","Anselm...Selmi","Beuno","Jord","Firmaz","Mark","Segondel","Louziern","Loeiz-Vari","Katell a Ziern","Onnen");}
if (smonth==5) {
mm= new Array("Brieg","Kellag","Fulup Jakez","Konlez","Endal","Youlida","Hernin","Tunevel","Komgall","Per Rene","Tudi","Kongar","Gwenganton","Mazeas","Privael...Primel","Brendan","Karantek...Karadek","Tudon","Erwan","Kadour","Patern...Padern","Markant","Gwiberz","Donasian","Beda","Nen","Seven","Eliboubann","Burienn","Kaedog","Nerin");}
if (smonth==6) {
mm= new Array("Ronan","Koupaia","Kevin","Pereg","Bonifas","Norberz","Meriadeg","Medarz","Koulmkel","Efrem","Barnabas","Herbod...Herbot","Anton","Dogmael","Nouga","Sambin","Herve","Maelvon","Riwanon","Meven","Nolwenn","Haran","Bili","Yann...Yannig...Yoann","Salaün","Tereza","Goharz","Eostol","Per...Paol","Alban-Julian");}
if (smonth==7) {
mm= new Array("Luner...Servan","Oudog","Tomas","Goulven","Marz","Feliz","Gouziern","Kilien...Kilian","Gergwen","Pasker","Benead","Olier","Joel...Johel","Turio","Donald","Tenenan","Balae","Goneri","Menou","Riwal...Marine","Trifina","Madalen...Magda","Loeva...Seve","Milio...Melio","Jakez...Jakou","Anna...Annig...Anaïg...Naïg","Gunevel","Samzun","Gwillou...Lomig","Edwardz","Garmon");}
if (smonth==8) {
mm= new Array("Friard","Unieg","Kened","Yann-Vari","Lougaed","Jezuz war an Tabor","Kassian","Dominik","Almeda","Laorans","Klara","Sklerijenn","Rou ar Fusteg","Riowen","Maïwenn...Mari saved d'an Nenv","Armel...Gwennin...Roch","Elena...Lena...Lenaïg","Arzel...Armel","Yann-Eudes","Bernez","Yuna...Youna","Emilian...Milo","Rozenn","Bertele","Loeiz...loiz...Gourloes...Urlou","Edern","Mona","Aousten","Yann dibennet","Frieg","Trehour");}
if (smonth==9) {
mm= new Array("Jili","Merzerien Weng","Gregor","Just","Agnan","Tegoned","Alan","Ginivelez ar Werhez","Kieran","Gunwal","Deniol","Modan","Merin","Kroaz ar Zant","I.V. ar Hlabad","Korneli","Urfol","Dider","Sezni...Seni","Ninian","Vaze","Emeran","Solen...Solenn...Solena","Leri","Blenlivet","Maogan","Vinsant","Charles Bleiz","Mikel...Mikelig...Mikaël...Mikaëla...Kaelig...Kelig","Yerom");}
if (smonth==10) {
mm= new Array("Friard","Unieg","Kened","Yann-Vari","Lougaed","Jezuz war an Tabor","Euriell...Uria","Meler","Fragan","Sant Fransez Asiz","Morvan...Moarc'h","Ivy","Ke...Kaïe...Kile...Kenan","Morgan...Morgane","Denez","Kler","Kaenneh","Eflam...Enora","Ternog","Vial","Tereza","Gall...Galig...Galou...Lezig...Lezou","Gwyn","Lukas","Judul...Judual","Moran","Gwenegan...Conogan","Benead","Melar","Marzin a Wertu","Gouesnou","Alor","Maglor","Simon...Jud","Rosaod","Sulio","Maeog");}
if (smonth==11) {
mm= new Array("An Olizent","An Anaon","Gwenaël","Maël...Maela","Franseza Amboaz","Gwinog","Melan...Melaine","Iltud","Treveur...Trevor","Leo ar Meur","Marzin","Kovran","Amanz","Devrig","Malo","Maharid","Emilion","Vaodez...Maudez","Beuzeg","Tangi...Eodez","Werhez Mari kinniget","Aziliz","Kouloum","Kenan...Konan","Katell...Bieuzi","Kondeleg","Goustan","Hermelan","Houardon","Andreo...Andreu...Andro");}
if (smonth==12) {
mm= new Array("Tual...Tudal...Tugdual","Alar...Alarig","Fransez Savier","Tudeg","Jumael","Nikolaz","Ambroaz","Ar Werhez Dinamm","Budog","Kouled","Fidwezen","Kaourintin...Korentin...Kaourant","Judog","Eginer...Fingar","Nina...Yann Diarhen","Finden","Jezekaël...Jezekel...Kaëlig...Kaëla","Briag","Yuzel","Abraham","Klervia","Amadeg...Soaz...Soazig","Tujen","Tazan","Gouel Nedeleg","Steven","Yann avieler","An Inosanted Sent","Maelig","Maeldrog","Jilvestr");}
var sday= (today.getDate())-1;

console.log("Saint Breton du jour : "+mm[sday]) ;
JarvisIASpeech("Aujourd'hui chez les bretons c'est la Saint "+mm[sday]) ;
}//fin