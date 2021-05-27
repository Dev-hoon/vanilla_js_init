function print(person) {
  if (!person) {
    console.log("person 이 없습니다.");
    return;
  }
  // if (person === undefined || person === null) {
  //   console.log("person 이 없습니다.");
  //   return;
  // }
  console.log(person.name);
}

const person = {
  name: "john"
};

print(person);
print();
const person2 = null;
print(person2);

console.log(undefined);
console.log(null);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);

let a = 1011;
let b = "1011";
let c = "안농";
console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);
console.log(a === parseInt(b));

console.log(parseInt(c));

console.log(!5131616);
console.log(!"sdvavavas");
console.log(![]);
console.log(!["rgdg"]);
console.log(!{ value: 1 });

// const value = { a: 1 };
// const value2 = null;
// if (value) {
//   console.log('value 가 Truthy 하네요.');
// }
// if (!value2) {
//   console.log('value 가 falsy 하네요.');
// }

const value = { a: 1 };
let truthy = value ? true : false;
truthy = !!value; // !는 중복 사용이 가능하나 장애인이 아닌 이상 그럴 필요기 없다.
console.log(truthy);
