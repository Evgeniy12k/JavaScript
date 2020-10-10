let num = 266219;

 otvet=num.toString().split('').reduce((res, item) => item * res, 1);
 console.log(otvet);
 console.log(otvet**=3);

 console.log( String(otvet).slice(0,2));
