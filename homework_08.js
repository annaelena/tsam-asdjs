/*function ArrayList(){
    var array =[];

    this.insert = function(item){
        array.push(item);
    }
    this.toString = function(){
        return array.join();
    }

     this.mergeSort = function(){
        array = mergeSortR(array);
    }
}
    var mergeSortR = function(array){
        var length = array.length;
            if(length === 1){
                return array;
            }
            var middle = Math.floor(length /2),
                left = array.slice( 0, middle),
                right = array.slice( middle, length);
                return merge(mergeSortR(left) , mergeSortR(right));

    }
    var merge = function(left,right){
        var result = [],
        i = 0,
        j = 0;
        while ( i < left.length && j < right.length) {
            if(left[i] < right[j]){
                result.push(left[i++]);
            }else{
                result.push(right[j++]);
            }
        }
        while ( i < left.length){
            result.push(left[i++]);
        }
        while ( j < right.length){
            result.push(right[j++]);
        }
        return result;
    }*/

function merge(ar1, ar2) { 
     var result = []; 
     var i1 = 0; 
     var i2 = 0; 
 
 
     while(i1 < ar1.length && i2 < ar2.length) { 
         if(ar1[i1] < ar2[i2]) { 
             result.push(ar1[i1]); 
             i1++; 
         } else { 
             result.push(ar2[i2]); 
             i2++; 
         } 
     } 
     return result.concat(ar1.slice(i1)).concat(ar2.slice(i2)) 
 } 

function mergesort(myarray){
    if (myarray.length == 1) {
        return myarray;
    }
    var mid = Math.ceil(myarray.length /2);
    return merge(mergesort(myarray.slice(0,mid)), mergesort(myarray.slice(mid)));
    
}

 