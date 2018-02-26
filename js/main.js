//petla for
//1. Potrzebny jest iterator (jezeli przechodzimy po tablicy, iteratorowi przypisujemy 0)
//2. Potrzebny jest warunek (dopoki iterator mniejszy od dlugosci tablicy)
//3. Zwiekszamy iterator (i++)
var tablica = [1, 2, 3, 4, 5, 6];

for(var i=0; i < tablica.length; i++) {
//    console.log('iterator jest rowny: ' + i);
    console.log(tablica[i]);
}

//petla forEach
//1. podajemy nazwe tablicy
//2. wykonujemy metode forEach() - za parametr przyjmuje funkcje - ta funkcja tez moze przyjac parametry (element, index)
tablica.forEach(function(element, index) {
    console.log('element: ' + element + ' o indeksie: ' + index);
});

//event 'scroll' wykonujemy na obiekcie window
//obsluga przezroczystego menu:
//1. do zmiennej przypisujemy wysokosc menu
//2. do zmiennej, przypisujemy wartosc scroll od gory window
//3. instrukcja warunkowa sprawdzajaca, czy wartosc scroll od gory window jest wieksza lub rowna wysokosci menu:
//a) true - dodaj klase
//b) false - zabierz klase

//obsluga zdarzen w JavaScript (addEventListener('event', function() {}))
window.addEventListener('scroll', function() {
//    JS - wysokosc elementu -> offsetHeight - zwraca liczbe
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    var headerHeight = document.getElementById('main-header').offsetHeight;
    
    
//    pageYOffset - zwraca liczbe pikseli po scrollu od gory okna
//    parseInt(wartosc, jaki system liczbowy) - zmienia zmiennoprzecinkowe na calkowite
    var yPos = parseInt(this.pageYOffset, 10);
    
    if(yPos >= navHeight) {
        document.getElementById('main-nav').classList.add('transparentBg');
    } else {
        document.getElementById('main-nav').classList.remove('transparentBg');
    }
    
    if(yPos >= headerHeight) {
//        bgPos - wartosc o ktora przesuwamy obrazek w lewo
        var bgPos = -((yPos - headerHeight) / 5 );
        document.getElementById('background').style.backgroundPosition = bgPos + 'px 0';
    }
});













