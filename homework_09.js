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
   }
   if( array[i]%2 ==0){
       return (array[0]*array[0]) + g(array.slice(1));
   }
   return g(array.slice(1));
}

function ex_1b(array){
    return g(array);
}



/* Ex_02/ Dato un array a[0,...,n-1] calcola la somma dei quadrati degli elementi pari.*/


function sumEven(array){
   var newArray = array.filter( x => x%2 == 0);
    newArray = newArray.map(x => x*x);
        return newArray.reduce((acc,x) => acc+x);
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
    for(i = 0; i < array.length; ++i) {
        if(array[i]%2 ==0){
            sp.push(array[i]);
        }else{
            sd.push(array[i]);
        }

    }
 
    var result = new Stack;
  while(!sp.isEmpty() && !sd.isEmpty()) {
        result.push(sp.pop() * sd.pop());
    }
   var sum = 0;
   while(!result.isEmpty()){
       sum +=result.pop();
   }
   return sum;


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



function LinkedList() {

    var Node = function(item, succ, prec) {
        this.item = item;
        this.succ = succ;
        this.prec;
    };

    this.first = null;
    this.last = null;
}

LinkedList.prototype.getNode =  function(index) {
    function nodeR(node, i) {
        if (index == i || node == null)
            return node;
        else
            return nodeR(node.succ, i + 1);
    }
    return nodeR( this.first, 0);
}

LinkedList.prototype.get = function(index) {

    var node =this.getNode(index);
    if(node == null){
        return null;
    }else{
        return node.item
    }
}


LinkedList.prototype.add = function(index, e) {
    var node = this.getNode(index);

    if( this.first == null) {
        var newNode = new Node (e, null, null);
        this.first = newNode;
        this.last = newNode;
        return;
    }


    if( node == null) {
        var newNode = new Node(e, this.last, null);
        this.last.succ = newNode;
        this.last = newNode;
    }else{ 

        if (index == 0) {
            var newNode = new Node(e, null,node);
            node.prec = newNode;
            this.first = newNode;
        }


        if (index != 0){ 
        var newNode =new Node(e, node.prec, node);
        node.prec.succ = newNode;
        node.prec = newNode;
        }

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


/*function inOrder(node, callback) {
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

postOrder(tree.root, function(e) { console.log(e);  })*/


BST.prototype.searchNodeR = function(node, e) {
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}


