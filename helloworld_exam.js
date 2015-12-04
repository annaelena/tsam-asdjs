/*trasformare un numero decimale in binario*/


function Stack() {
    this.array = [];
}

Stack.prototype.push = function(e) { this.array.push(e);}
Stack.prototype.pop = function(e) { return this.array.pop(e);}
Stack.prototype.peek = function(e) { return this.array[this.array.length -1];}
Stack.prototype.isEmpty = function(e) { return this.array == 0;}
Stack.prototype.popall = function(callback){
    while( !this.isEmpty()) {
        callback(this.pop());
    }
}

function dec2bin(x) {
    function rec( remStack, n) {
        if( n == 0) {
            return remStack;
        }else{
            remStack.push(Math.floor( n % 2));
            return rec(remStack, Math.floor( n / 2));
        }
    }

    var binaryString = '';
    rec(new Stack(), x).popall(function(e) { binaryString += e.toString(); })
    return binaryString;
}



function rpn(stringa) {
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

/*implementare una coda circolare*/


function CircularQueue(n) {
        this.array = [];
        this.coda = 0;
        this.testa = 0;
        this.capacità = n;
        this.dimensione = 0;

}

CircularQueue.prototype.enqueue = function(e) {
        if(this.size() == this.capacità) {
                return false;
        }else{ 
            this.array[this.coda] = e;
            this.coda = (this.coda + 1) % this.capacità;
            this.dimensione++;
        }
}

CircularQueue.prototype.dequeue = function() {
        if(this.isEmpty()) {
            return null;
        }else {
            var temp = this.array[this.testa];
            this.array[this.testa] = null;
            this.testa = (this.testa + 1) % this.capacità;
            this.dimensione--;
            return temp;
        }
}

CircularQueue.prototype.front = function() {
        return this.array[this.testa];
}

CircularQueue.prototype.isEmpty = function() {
        return this.size() === 0;
}

CircularQueue.prototype.size = function() {
        return this.dimensione;
}

/*Priority Queque*/


function QuequeItem( i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e) {
    for (var i = 0;
         i < this.size() && e.priority > this.queue[i].priority;
         ++i);

         this.queue.splice(i, 0, e);
        
}

PriorityQueue.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueue.prototype.front = function() { return this.queue[this.queue.length -1];}
PriorityQueue.prototype.size = function() { return this.queue.length;}
PriorityQueue.prototype.isEmpty = function() { return this.queue.size ==0;}


/*PriorityQueue with callback*/


function PriorityQueueC(sortfunction) {
    this.queue = [];
    this.callback sortfunction;
}

PriorityQueueC.prototype.enqueue = function(e) {
        for(var i = 0;
            i < this.size() && this.callback(e.priority, this.queue[i].priority) == 1;
            ++i);
            this.queue.slice(i, 0, e);
}

PriorityQueueC.prototype.dequeue = function() { return this.queue.pop();}
PriorityQueueC.prototype.front = function() { return this.queue[this.queue.length-1];}
PriorityQueueC.prototype.size = function() { return this.queue.length;}
PriorityQueueC.prototype.isEmpty = function() { return this.size == 0;}


/*merge*/

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
    return result = [a1.slice(i1)).concat(a2.slice(i2)];
}


function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }
     var middle = Math.foor(array.length / 2);
     return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
     
}



/*tree*/



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


BST.prototype.searchNodeR = function(node, e) {
    if(node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node,
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e);
            } else {
                return this.searchNodeR(node.left, e);
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(th.root, e);
}

BST.prototype.existNode = function(currentNode, e) {
    if ( currentNode == null) 
        return false;
    if (currentNode.item == e) {
        return true;
    } else {
        if (e < currentNode.item)
            return this.existNode(currentNode.left, e);
        else
            return this.existNode(currentNode.right, e);
    }
}

BST.prototype.exit = function(e) {
    return this.existNode(this.root, e);
}

function inOrder(node, callback) {
    if (node != null) {
        inOrder(node.left, callback);
        callback(node.item);
        inOrder(node.right, callback);
    }
}
/*inOrder(tree.root, function(e){ console.log(e);});*/


function preOrder(node, callback) {
    if( node != null) {
        callback(node.item);
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
}

/* preOrder(tree.root, function(e) { console.log(e); }); */

function postOrder(node, callback) {
    if (node != null) {
        postOrder(node.left, callback);
        postOrder(node.right, callback);
        callback(node.item);
    }
}

/*postOrder(tree.root, function(e) { console.log(e);});*/

