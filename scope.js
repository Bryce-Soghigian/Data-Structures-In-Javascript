var function2 = function(){console.log(2)};
var function1 = function(){console.log(2)};

console.log("=== func1 func2",function1 === function2)
console.log("=== func1() func2()",function1() === function2())
