/* Ex_01/RECURSIONE

T(a[0,...,n-1])= { 10   if a is empty
                   
                  5*a[0] + T(a[1,....,n-1]) otherwise }*/

function T(array){
    if ( array.length == 0){
        return 10;
    }else{
        return 5*a[0] + T(array.slice(1));
    }
}

function ex_1a(array){
    return T(array);
}

function g(array){
   if (array.length == 0){
       return 0;
   }else{
       var newarray =[];
       array.filter( x => {
           if( x%2 == 0){
               newarray.push(x);
           }
       });
       return newarray.reduce((acc,x) => acc+(x*x),0);
   }
}

function ex_1b(array){
    return g(array);
}



/* Ex_02/ Dato un array a[0,...,n-1] calcola la somma dei quadrati degli elementi pari.*/


function sumEven(array){
   var newArray = [];
   array.every( x => {
       if ( x%2 == 0){
           newArray.push(x);
       }
       return newArray;
   });
   return newArray.reduce((acc,x) => acc+(x*x),0);
 }

 function ex_2(array){
     return sumEven(array);
 }

 /*Ex_03/Stack o Queue, dividi in due stack(queue),pari e dispari, dop calcola la somma dei 
 prodotti degli elementi dei due nuovi stack, finchè gli elementi di uno dei si finiscono.*/


 function Stack(){
    this.myarray = []
}
Stack.prototype.push = function(e){ this.myarray.push(e);}
Stack.prototype.pop = function(){return this.myarray.pop(); }
Stack.prototype.peek = function(){return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function Sum(array){
    var sp = new Stack;
    var sd = new Stack;
    array.every( x =>{
        if(x%2==0){
            sp.push(x);
        }else{
            sd.push(x);
        }
    });
    return sp;
    var x1;
    var x2;
    var result =[];
    for ( i =0; i <sp.length==sd.length;++i){
        var x1 = sp.pop();
        var x2 = sd.pop();
        result.push(x1*x2);
    }
    return result;


}
 



/*function Queue() {
    this.myarray = [];
}

Queue.prototype.enqueue = function(e) {
    this.myarray.unshift(e);
} 

Queue.prototype.dequeue = function() {
    return this.myarray.pop();
} 

Queue.prototype.front = function() {
    return this.myarray[this.myarray.length - 1];
} 

Queue.prototype.isEmpty = function() {
    return this.size() == 0;
} 

Queue.prototype.size = function() {
    return this.myarray.length;
} 
*/


/*Ex_04/Implementare LinkedList*/

/*a)*/
function LinkedList() {
    var Node = function (e){
        this.e = e;
        this.next = null;
    }
    var length = 0;
    var head = null;
    this.add = function( position, e){
        if (position >= 0 && position <= length){

            var node = new Node(e),
                current = head,
                previous,
                index = 0;
            if( position === 0) {
                node.next = current;
                head = node;
            }else{
                while ( index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = node;
                previous.next = node;
            }
                length++;
                return true;
            }else {
                return false;
            }
      }
}



/*b)*/

function LinkedList(){
    var Node = function(e){
        this.e = e;
        this.next = null;
    }
    var length = 0;
    var head = null;

    this.get = function (e){
        var current = head,
            index = -1;

        while ( current){
            if ( e === current.e){
            return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}


/*Ex_05/Implimentare Tree, cercare un valore, se esiste ritorna il valore, se no ritorna null.*/



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
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }


}

var tree = new BST();

BST.prototype.existNode = function(currentNode, e) {
    if (currentNode == null)
        return false;

    if (currentNode.item == e) {
        return true;
    } else {
        if (e < currentNode.item)
            return this.existNode(currentNode.left, e)
        else
            return this.existNode(currentNode.right, e)
    }
}

BST.prototype.exist = function(e) {
    return this.existNode(this.root, e);
} 


function inOrder(node, callback) {
    if (node != null) {
        inOrder(node.left, callback);
        callback(node.item);
        inOrder(node.right, callback);
    }
}
inOrder(tree.root, function(e) { console.log(e);})

function preOrder(node, callback) {
    if (node != null) {
        callback(node.item);        
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
}
preOrder(tree.root, function(e) { console.log(e);  })

function postOrder(node, callback) {
    if (node != null) {
        postOrder(node.left, callback);
        postOrder(node.right, callback);
        callback(node.item);
    }
}

postOrder(tree.root, function(e) { console.log(e);  })


BST.prototype.searchNode = function(currentNode, e){
    if ( currentNode === null){
        return null;
    }
    if( e < currentNode.item ){
        return searchNode( currentNode.left, e);
    }else if( e > currentNode.item){
        return searchNode(currentNode.right,e);
    }
    else{
        return e;
    }
}

BST.prototype.search = function(e) {
    
    return this.searchNode(this.root,e);
}