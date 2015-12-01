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
      var result = [];
      var elements = stringa.split(" "); 
            elements.forEach(element => { 
         switch(element) { 
             case "+":  
                 var x1 = stack.pop();  
                 var x2 = stack.pop();  
                 stack.push(x2 + x1); 
                 break; 
             case "-":  
                 var x1 = stack.pop();  
                 var x2 = stack.pop();  
                 stack.push(x2 - x1); 
                 break; 
             case "*":  
                 var x1 = stack.pop();  
                 var x2 = stack.pop();  
                 stack.push(x2 * x1); 
                 break;             
              case "/": 
                  
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


           