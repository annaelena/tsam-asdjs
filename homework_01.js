console.log('homework_01');
/*
+Esercizio 1
+Dato un array di interi, 
+restituire la loro somma fino a che non viene ritrovato un valore negativo
+*/


function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
    var x = myarray[i];
        if (x < 0) {
            return tot;
        }
        tot += x; 
    }
    return tot;
}
function ex_1_I(myarray) {
    return sumwhileneg (myarray);
}




function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}
function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}




/*
+Esercizio 2
+Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
+*/


    

function sumOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}

function ex_2_I(n){

    return sumOdd(n );
}

    


function sumOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + sumOddR(n-1);
    }
}
function ex_2_R(n){
    return sumOddR(n);
}

/*
+Esercizio 3
+Dato un array di 10 elementi, calcolarne la media
+*/

function avgAll(myarray){
 var tot = 0;
    for ( var i = 0; i < myarray.length;++i){
        tot+= myarray[i];
    }

    return tot /myarray.length;
    }
function ex_3_I(myarray){
    return avgAll(myarray);
}



function avgAllRW(myarray){
    if (myarray.length == 0){
        return 0;
    }else {
       return myarray[0] + avgAllRW(myarray.slice(1));
    }
}
function avgAllR(myarray){
    return avgAllRW(myarray)/myarray.length;
}

function ex_3_R(myarray){
   return avgAllR( myarray);
}


/*
+Esercizio 4
+Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
+compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
+calcolare la somma nell’intervallo [b,a]
+Esempio:
+sumInterval(3, 5) => 12
+sumInterval(5, 3) => 12
+*/



function sumIntervalW(a, b){
    var tot = 0;

    for (var i = a; i <=b; ++i) {

        tot +=i;
    }
    return tot;
}

function sumInterval(a, b){
    if ( a < b){
        return sumIntervalW(a, b);
    }else {
        return sumIntervalW(b, a);
    }

}

function ex_4_I(a, b){
    return sumInterval(a,b);
}


function sumIntervalRW(a, b){
    if ( a == b){
        return a;
    }else {
        return a + sumIntervalRW( a+1, b);
    }
   
}

function sumIntervalR(a,b){
    if (a < b){
        return sumIntervalRW(a, b);
    }else{
        return sumIntervalRW(b, a);
    }
}

function ex_4_R(a, b){
    return sumIntervalR (a, b);
}


/*Esercizio 5
+Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
+operatore somma.
+Esempio:
+mult(2, 3) => 6
+*/

 function mult(a, b){
   if ( a == 0 || b ==0){
           return 0;
        }  
        var tot= 0;
      for ( i = 0; i < a; ++i){
        tot += b;
      }return tot;
}

function ex_5_I(a, b){
    return mult (a, b); 
}

function multR (a,b){
    if ( a ==0 || b == 0){
        return 0;
}  else{
    return b + multR( a-1,b);
  }
}

function ex_5_R (a,b){
    return multR(a, b);
}

/*Esercizio 6
+Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
+l’utilizzo dei soli operatori somma e sottrazione.
+Esempio:
+div(5, 3) => 1 resto 2
+*/


function div ( a, b){
    if ( a ==0 || b ==0){
        return undefined;
    }
    var c = 0;
    do {
        a = a-b;
        c++;
    }while ( a > b)
        return [c, a];
}


function ex_6_I(a, b){
    return div ( a, b);
}



/*Esercizio 7
+Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
+operatori somma, sottrazione e della funzione mult.
+*/


function pow( x, y){
    if ( y == 0){
        return 1;
}else if ( y == 1){
        return x;
}
    var z = 1; 
    for ( i = 0; i < y;++i){
        z *= x;
}
    return z;
}


function ex_7_I(x,y){
    return pow ( x, y);
}


function powR( x,y){
    if ( y == 0){
        return 1;
} else if ( y == 1){
    return x;
} else{
    return x * powR( x, y-1);
}
}

function ex_7_R(x, y){
    return powR(x, y);
}

/*Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.
*/

function bidimensionale(myarray) {
    var n = Math.sqrt(myarray.length);
    var resarray = [];
    var row = [];
    for ( var i = 0; i < myarray.length; ++i) {
        row[row.length] = myarray[i];
        if (row.length == n) {
            resarray.push(row);
            row = [];
        }
    }
    return resarray;
}


function ex_8_I(myarray) {
    return bidimensionale(myarray);
}



function magic(myarray, matrix) {

      matrix.unshift (myarray);

         return matrix;
}

function bidimensionaleRInternal(myarray, n){
    if( myarray.length == n) {
        return  [myarray];
    }else {
        return magic(myarray.slice(0,n), bidimensionaleRInternal(myarray.slice(n), n));
    }
}

function bidimensionaleR(myarray) {
    return bidimensionaleRInternal(myarray, Math.sqrt(myarray.length));
}


function ex_8_R(myarray) {
    return bidimensionaleR(myarray);
}    
   




/*Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A= {8, 5, 2}
*/

function invert(a){
    b = [] ;
    for ( i = 0; i < a.length;++i){
         b[i] = a [a.length-1 - i];
    }
        return b; 
}

function ex_9_I(a){
    return invert(a);
}



function invertR(a){
    //b = [];
    if( a.length == 0){
        return [];
    }
        else {
            var mya = invertR(a.slice(1));
            mya[mya.length] = a[0]; //mya.push(a)
            return mya;
        //return b =[ a[a.length-1]+ ',' +invertR(a.slice(0, a.length-1))];
    }
}


function ex_9_R(a){
    return invertR(a);
}


/*Esercizio 10

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}
*/



function replicate(a,n){
     b = [];
     for (i = 0; i < n ;++i){
        b[i] = a;
      }
        return b;
}


function ex_10_I(a,n) {
    return replicate(a, n);
}


function replicateR(a, n){
    if (n == 1){
        return [a];
    }else{
        var mya = replicateR(a,n-1)
        mya[mya.length] = a; //mya.push(a)
       return mya;
    }
}

function ex_10_R(a, n) {

    return replicateR(a,n);
}



/*Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/


function ord(myarray){
        b = [];
        c = [];
   
    for ( i = 0; i < myarray.length; ++i) {
         
        if (myarray[i]%2 == 0){
             b.push(myarray[i]);
        } else {          
       
            c.push(myarray[i]);
        }
    }
    return c.concat(b);
}  

function ex_11_I(myarray){
    return ord(myarray);
} 
   
function ordR(myarray){
    if (myarray.length == 1){
        return myarray;
    }else{
        if (myarray[i]%2 == 0){
            
        }
    }
}
        

