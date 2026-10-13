let [example,add,subtract,multiply,divide]=require('./demo');

example();

let result=add(10,5);
console.log(result);

result=subtract(10,5);
console.log(result);

result=multiply(10,40);
console.log(result);

result=divide(450,5);
console.log(result);