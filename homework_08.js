function ArrayList(){
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
    }
