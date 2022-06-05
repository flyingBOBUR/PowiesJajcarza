var tablica_z_haslami = new Array();
tablica_z_haslami[0] = "to nie miejsce na śmiech";
tablica_z_haslami[1] = "bobur";
tablica_z_haslami[2] = "kosa nie ma mocy";
tablica_z_haslami[3] = "jebnięcie bałtyku";
tablica_z_haslami[4] = "gagri gagri";
tablica_z_haslami[5] = "zakola Łysego";
tablica_z_haslami[6] = "stary w śpiworze";
tablica_z_haslami[7] = "młody z blokowisk";
tablica_z_haslami[8] = "totalne eldorado";
tablica_z_haslami[9] = "zielone";
tablica_z_haslami[10] = "czterech na jednym rowerze";
tablica_z_haslami[11] = "spocony krzysiu";
tablica_z_haslami[12] = "krzysiu myśli";
tablica_z_haslami[13] = "rzeczka smródka";
tablica_z_haslami[14] = "dziury w dachu na wiertniczej";
tablica_z_haslami[15] = "wrzący mocz";
tablica_z_haslami[16] = "Nie mam z kim";

function losowanie()
{
var wylosowana_liczba = Math.round(Math.random()*(tablica_z_haslami.length-1));
wylosowane_haslo = tablica_z_haslami[wylosowana_liczba];
}

losowanie();


var haslo = wylosowane_haslo;
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()
{
    var tresc_diva = "";

    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML =  tresc_diva;


    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{

    var trafiona = false;

    for(i=0; i<dlugosc; i++)
    {
        if (haslo.charAt(i) == litery[nr])
        {
          haslo1 = haslo1.ustawZnak(i,litery[nr]);
          trafiona = true;
        }
    }

    if(trafiona == true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypisz_haslo();
    }
    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //skucha
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt=""/>';
    }

    //wygrana
    if (haslo == haslo1)
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+
    '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ</span>';

    
    //przegrana
    if (ile_skuch>=9)
    document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+
    '<br/><br/><span class="reset2" onclick="location.reload()">JESZCZE RAZ</span>';
}
//poddanie się
var poddaj = document.getElementById("poddaj");

function poddajsie(){
    document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+
    '<br/><br/><span class="reset2" onclick="location.reload()">JESZCZE RAZ</span>';
}




//zmiana hasła
var zmienHaslo = document.getElementById("zmienHaslo");

function zmienianie(){
    window.setInterval(location.reload(true), x);
}