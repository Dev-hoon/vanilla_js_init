// global scope : 선언 하면 코드 전체에서 사용이 가능
// function scope : 함수내에서만 사용이 가능
// block scope :if 문, for, switch  문법 안에서만 가능

// const value = 'hello!';//global scope

// function myFunction() {
//   console.log('myFunction: ');
//   console.log(value);
// }

// function otherFunction() {
//   console.log('otherFunction: ');
//   const value = 'bye!'; //function scope
//   console.log(value);
// }

// myFunction();
// otherFunction();

// console.log('global scope: ');
// console.log(value);

// const value = 'hello!';

// function myFunction() {
//   const value = 'bye!';
//   const anotherValue = 'world';
//   function functionInside() {
//     console.log('functionInside: ');
//     console.log(value);
//     console.log(anotherValue);
//   }
//   functionInside();
// }

// myFunction()
// console.log('global scope: ');
// console.log(value);
// console.log(anotherValue);

// const value = 'hello!';

// function myFunction() {
//   const value = 'bye!';
//   if (true) {
//     const value = 'world';
//     console.log('block scope: ');
//     console.log(value);
//   }
//   console.log('function scope: ');
//   console.log(value);
// }

// myFunction();
// console.log('global scope: ');
// console.log(value);

// hoisting
myFunction();
function myFunction() {
  console.log("hello world!");
}

// console.log(number4);
// var number4 = 3;

var number4;
console.log(number4);
number4 = 3;

//chrome 에 돌려보면 codesandbox와 다른 결과를 볼수 있다.
// 이유는 codesandbox는 babel 이라는 도구를 활용하고 있기 때문이다.
// 기존 문법에서는 let 과 const 는 hoisting 이 되지 않으나 babel 에서 이 기능이 되도록
//지원하고 있다. 하지만 hoisting 이 되는 코드는 유지보수에 어려움이 있기에 좋은것은 아니다.
// 코드 정리및 스타일 확립을 위해 필수적으로 사용되어야 하는 경우가 종종 생기니 알아 두어야 한다.

function fn() {
  console.log(a);
  let a = 2;
}
fn();
