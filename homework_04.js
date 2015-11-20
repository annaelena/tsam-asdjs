/*function nome: "dec2bin"*/


function Stack(){
    this.myarray = []
}
Stack.prototype.push = function(e){ this.myarray.push(e);}
Stack.prototype.pop = function(){return this.myarray.pop(); }
Stack.prototype.peek = function(){return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function divPer2(x){
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (x > 0){
    rem = Math.floor(x % 2);
    remStack.push(rem);
    x = Math.floor(x/ 2);
}
    while ( !remStack.isEmpty()){
        binaryString += remStack.pop().toString()
}
    return binaryString;
}
 
function dec2bin(x){
    return divPer2(x);
}

