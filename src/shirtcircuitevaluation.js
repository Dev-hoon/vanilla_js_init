// true && true // true
// true && false // false
// true || false // true
// false || true // true

const dog = {
  name: "호연이"
};

function getName(animal) {
  // if(!animal){
  //   return undefined;
  // }
  // return animal.name;
  return animal && animal.name;
}

const name = getName(dog);
//const name = getName();
console.log(name);

//A&&B 는 truethy 하면 B를 falsy A를 보여준다
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1
console.log([] && 3); // 1

const namelessdog = {
  name: ""
};

//A||B 는 truethy 하면 A를 falsy B를 보여준다
function getName2(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 아이이빈다.";
  // if (!name) {
  //   return "이름이 없는 아이입니다.";
  // }
  // return name;
}

const name2 = getName2(namelessdog);
console.log(name2);
