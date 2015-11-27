/* CircularQueue */

function CircularQueue(n){
    this.myarray = [];
    this.coda = 0;
    this.testa = 0;
    this.capacità = n;
    this.dimensione = 0; 
}

CircularQueue.prototype.enqueue = function(e){
    if(this.size() == this.coda){
        return false;
    }else{
        this.myarray[this.coda] = e;
        this.coda = (this.coda +1) % this.capacità;
        this.dimensione++;
    }
} 

CircularQueue.prototype.dequeue = function(){
    if(this.isEmpty()){
        return null;
    }else{
        var temp = this.myarray[this.testa];
        this.myarray[this.testa] = null;
        this.testa = (this.testa + 1) % this.capacità;
        this.dimensione--;
        return temp;
    }
}
CircularQueue.prototype.front = function(){
    return this.myarray[this.testa];

}

CircularQueue.prototype.isEmpty = function(){
    return this.size() === 0;
}
CircularQueue.prototype.size = function(){
    return this.dimensione;
}