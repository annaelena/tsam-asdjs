console.log('homework_01');
+/*
+Esercizio 1
+Dato un array di interi, 
+restituire la loro somma fino a che non viene ritrovato un valore negativo
+*/
+
+
+function sumwhileneg(myarray) {
+    var tot = 0;
+    for(i = 0; i < myarray.length; ++i) {
+    var x = myarray[i];
+        if (x < 0) {
+            return tot;
+        }
+        tot += x; 
+    }
+}
+function ex_1_I(myarray) {
+    return sumwhileneg (myarray);
+}
+
+
+
+
+function sumwhilenegR(myarray) {
+    if (myarray.length == 0 || myarray[0] < 0) {
+        return 0;
+    } else {
+        return myarray[0] + sumwhilenegR(myarray.slice(1));
+    }
+}
function ex_1_R(myarray) {
+    return sumwhilenegR(myarray);
+}
+
+
+
+
+/*
+Esercizio 2
+Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
+*/
+
+
+    
+
+function sumOdd(n) {
+    var tot = 0;
+    for(i = 0; i < n; ++i) {
+        tot += 1 + 2 *i;
+    }
+    return tot;
+}
+
+function ex_2_I(n){
+    return sumOdd(x);
+}
+
+    
+
+
+function sumOddR(n) {
+    if (n == 0) {
+        return 0;
+    } else {
+        return 2 * n - 1 + sumOddR(n-1);
+    }
+}
+function ex_2_R(n){
+    return sumOddR(n);
+}
+
+/*
+Esercizio 3
+Dato un array di 10 elementi, calcolarne la media
+*/
+
+function avgAll(myarray){
+ var tot = 0;
+    for ( var i = 0; i < myarray.length;++i){
+        tot+= myarray[i];
+    }
+    return tot /myarray.length;
+}
+function ex_3_I(myarray){
+    return avgAll(myarray);
+}
+
+
+
+function avgAllRW(myarray){
+    if (myarray.length ==0){
+        return 0;
+    }else {
+        mayarra[0] + avgAllRW(myarray.slice(1));
+    }
+}
+
+function ex_3_R(myarray){
+    return avgAllRW(mayarray);
+}
+
+
+/*
+Esercizio 4
+Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
+compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
+calcolare la somma nell’intervallo [b,a]
+Esempio:
+sumInterval(3, 5) => 12
+sumInterval(5, 3) => 12
+*/
+
+
+
+function sumIntervalW(a, b){
+    var tot = 0;
+    for (var i = a; i <=b, ++i){
+        tot +=i;
+    }
+    return tot;
+}
+
+function sumInterval(a, b){
+    if ( a < b){
+        return sumIntervalW(a, b);
+    }else {
+        return sumIntervalW(b, a);
+    }
+
+}function ex_4_I(a, b){
+    return sumInterval(a,b);
+}
+
+
+function sumIntervalRW(a, b){
+    if ( a == b){
+        return a;
+    }else {
+        return a + sumIntervalRW( a+1, b);
+    }
+   
+}
+
+function sumIntervalR(a,b){
+    if (a < b){
+        return sumIntervalRW(a, b);
+    }else{
+        return sumIntervalRW(b, a);
+    }
+}
+
+function ex_4_R(a, b){
+    return sumIntervalR (a, b);
+}
+
+
+/*Esercizio 5
+Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
+operatore somma.
+Esempio:
+mult(2, 3) => 6
+*/
+
+ function mult(a, b){
+   if ( a == 0 || b ==0){
+            return 0;
+        }  
+        var tot= 0;
+      for ( i = 0; i < a; ++i){
+        tot += b;
+      }return tot;
+}
+
+function ex_5_I(a, b){
+    return mult (a, b); 
+}
+
+
+function multR (a,b){
+    if ( a ==0 || b == 0){
+        return 0;
+}  else{
+    return b + multR( a-1,b);
+  }
+}
+
+function ex_5_R (a,b){
+    return multR(a, b);
+}
+
+/*Esercizio 6
+Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
+l’utilizzo dei soli operatori somma e sottrazione.
+Esempio:
+div(5, 3) => 1 resto 2
+*/
+
+
+function divA ( a, b){
+    if ( a ==0 || b ==0){
+        return undefined;
+    }
+    var c = 0;
+    do {
+        a = a-b;
+        c++;
+    }while ( a > b)
+        return c + 'resto' a;
+}
+
+
+function ex_6_I(a, b){
+    return div ( a, b);
+}
+
+
+
+/*Esercizio 7
+Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
+operatori somma, sottrazione e della funzione mult.
+*/
+
+
+function pow( x, y){
+    if ( y == 0){
+        return 1;
+}else if ( y == 1){
+        return x;
+}
+    var z = 1; 
+    for ( i = 0; i < y;++i){
+        z *= x;
+}
+    return z;
+}
+
+
+function ex_7_I(x,y){
+    return pow ( x, y);
+}
+
+
+function powR( x,y){
+    if ( y == 0){
+        return 1;
+} else if ( y == 1){
+    return x;
+} else{
+    return x * powR( x, y-1);
+}
+}
+
+function ex_7_R(x, y){
+    return powR(x, y);
+}
+