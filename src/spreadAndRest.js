const slime = {
  name: "슬라임"
};
const cuteSlime = {
  ...slime,
  //name : '슬라임',
  attribute: "cute"
};
const purpleCuteSlime = {
  // name : '슬라임',
  // attrbute : 'cute',
  ...cuteSlime, //spread 연산자
  color: "purple"
};
console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

/// rest

const { color, ...cuteSlime2 } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime2);

const { attribute, ...slime2 } = cuteSlime2;
console.log(attribute);
console.log(slime2);

const numbers2 = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);

function sum(...rest) {
  //a, b, c, d, e, f, g
  // let sum = 0;
  // if (a) sum += a;
  // if (b) sum += b;
  // if (c) sum += c;
  // if (d) sum += d;
  // if (e) sum += e;
  // if (f) sum += f;
  // if (g) sum += g;
  // return sum;
  return rest.reduce((acc, current) => acc + current, 0);
}
const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

function myFunction(a) {
  // 여기서 a 는 파라미터
  console.log(a); // 여기서 a 는 인자
}
myFunction("hello world");
const numbers3 = [1, 2, 3, 4, 5, 6];
const result2 = sum(
  // numbers3[0],
  // numbers3[1],
  // numbers3[2],
  // numbers3[3],
  // numbers3[4],
  // numbers3[5]
  ...numbers3 // rest 가 아니라 스프레드 인자
);
console.log(result2);

// 과제 3
// 함수에 n개의 숫자들이 파라미터로 주어졌을때, 그 중 가장 큰값을 알아내세요.
// function max() {
//   return 0;
// }

// const result = max(1, 2, 3, 4, 10, 5, 6, 7);
// console.log(result);
