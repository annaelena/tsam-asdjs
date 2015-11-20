/*
+Esercizio 1
+Dato un array di interi, 
+restituire la loro somma fino a che non viene ritrovato un valore negativo
+*/

Array.prototype.buildUntil = function(check) {
    var tmparray = [];
    this.every ( function(x) {
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}
Array.prototype.sumuntilnegF3 = function(){
    return this.buildUntil(x => x > 0).reduce((acc, x) => acc + x);
}






/*
+Esercizio 3
+Dato un array di 10 elementi, calcolarne la media
+*/





/*Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/
