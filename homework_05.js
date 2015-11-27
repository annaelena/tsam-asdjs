/*rpn*/

function Stack(){ 
     this.array = []; 
 } 
 
 
 Stack.prototype.push = function(e) { 
     this.array.push(e); 
 } 
 Stack.prototype.pop = function(e){ 
     return this.array.pop(e); 
 } 
 
 
 Stack.prototype.peek = function(e){ 
     return this.array[this.array.length - 1]; 
 } 
 
 
 Stack.prototype.isEmpty = function(e) { 
     return this.array.length == 0; 
 } 
 
 function rpn (stringa){ 
      var stack = new Stack();
      var z = stringa.split(" "); 
            z.forEach(function(z) { 
            var a1;
            var a2;
         switch(z) { 
             case "+":  
                 var a1 = stack.pop();  
                 var a2 = stack.pop();  
                 stack.push(a2 + a1); 
                 break; 
             case "-":  
                 var a1 = stack.pop();  
                 var a2 = stack.pop();  
                 stack.push(a2 - a1); 
                 break; 
             case "*":  
                 var a1 = stack.pop();  
                 var a2 = stack.pop();  
                 stack.push(a2 * a1); 
                 break;             
              case "/": 
                  
                 var a1 = stack.pop(); 
                 var a2 = stack.pop(); 
                 stack.push(a2 / a1); 
                 break; 
             default: 
                 stack.push(parseInt(z)); 
         } 
     });         
     return stack.peek(); 
 
 
 } 


           