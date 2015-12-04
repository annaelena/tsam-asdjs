/*Esercizio Ricorsione 
Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo non di coda in javascript
che restituisca il numero di elementi presenti in A che corrispondono al valore 5070.*/


function initialArray() { 
 	var seed = 1; 
 	function random() { 
 		var x = Math.sin(seed++) * 10000; 
 		return Math.floor(x); 
 	} 
 
 
 	var a = []; 
 	for(var i = 0; i < 10000; ++i) { 
 		a.push(random()); 
 	} 
 	return a; 
 }

var array = initialArray();
    function sum(array){
    var tot = 0;
    for(j = 0; j < array.length;++j){
        tot += array[j];
    }
    return tot;
}

var array = initialArray();
function existValue( array, x){
    if ( array.length == 0){
        return 0;
    }else {
        if ( array[0] == x){
            return 1 + existValue(array.slice(1), x);
        }
        return 0 + existValue(array.slice(1), x);
    }
}



/*Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca la radice
 quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto Array: filter, map e reduce.*/


function sumSqr(array){
    return Math.sqrt(array.filter( x => x >= 0)
    .filter( x => x % 2 == 0)
    .map( x => x*x)
    .reduce((acc, x) => acc +x,0));
}
 




/*Esercizio Stack 
Si implementi una funzione in javascript che implementi l’algoritmo che valuta il valore di un’espressione “fully parentherized”,
ovvero un’espressione in cui ogni singola operazione è all’interno di parentesi. 
Esempio di chiamata:
evaluateExpression(“( ( 2 + 3) * 4 )”).
Si noti che ogni elemento dell’espressione è seguito da uno spazio.*/

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"]; 
 
 
function evaluateExpr(callback) { 
 	return callback(_0xd10d[0]); 
 }

 function Stack(){
    this.myarray = []
}
Stack.prototype.push = function(e) { this.array.push(e);}
Stack.prototype.pop = function(e) { return this.array.pop(e);}
Stack.prototype.peek = function(e) { return this.array[this.array.length -1];}
Stack.prototype.isEmpty = function(e) { return this.array == 0;}


/function rpn(stringa) {
    var stack = new Stack;
    var result = [];
    var elements = stringa.split(" ");
        elements.forEach(element =>{
           switch(element){
               case " + ":
                   var x1 = stack.pop();
                   var x2 = stack.pop();
                   stack.push(x2 + x1);
                   break;
               case " - ":
                   var x1 = stack.pop();
                   var x2 = stack.pop();
                   stack.push(x2 - x1);
                   break;
               case " * ":
                   var x1 = stack.pop();
                   var x2 = stack.pop();
                   stack.push( x1 * x2);
                   break;
               case " / ":
                   var x1 = stack.pop();
                   var x2 = stack.pop();
                   stack.push(x2 / x1);
                   break;
               default:
                    stack.push(parseInt(element));

           }
            
        });

        return stack.peek();

}



/*Complessità algoritmo stack  
Si indichi qual’è la complessità dell’algoritmo descritto nell’esercizio: “Esercizio stack”.*/




/*Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi contenuti nell’array A[0..n-1],
ottenuto da initialArray(), 
nell’ordine dall’indice 0 all’indice n-1.
Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.*/

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if( currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if(currentNode.right == null) {
            currentNode.right = new Node(e, null,null);
        } else{
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if(this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}


var tree = new BST();
   for (i = 0; i < (array.length-1); i++) {
        tree.add(array[i]);
    }
function search () {
	return this.maxValue(tree.root);
}

function maxValue (currentNode) {
	if (currentNode.right == null) {
		return currentNode.item;
	} else {
		return maxValue(currentNode.right);
	}
}



/*In riferimento all’albero creato nell’esercizio precedente.
Si indichi perché il numero di confronti effettuato è diverso (più grande) al logaritmo in base 2 di n + 1 (n = numero elementi Array).*/

/*Esercizio Bonus:
Si indichi qual è la complessità dell’algoritmo di ordinamento merge sort, nel caso in cui l’array in input contenga gli elementi già ordinati.*/


function merge (a1, a2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < a1.length && i2 < a2.length) {
        if(a1[i1] < a2[i2]) {
            result.push(a1[i1]);
            i1++;
        }else {
            result.push(a2[i2]);
            i2++;
        }
    }
    return result.concat(a1.slice(i1)).concat(a2.slice(i2));
}


function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }
     var middle = Math.ciel(array.length / 2);
     return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
     
}

