const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 는 ${actor} 이다.`;
  //const text = `${hero.alias}(${hero.name}) 는 ${hero.actor} 이다.`;
  console.log(text);
}

function print2({ alias, name, actor }) {
  const text = `${alias}(${name}) 는 ${actor} 이다.`;
  console.log(text);
}

print(captainAmerica);

print2(ironMan);
const object = {
  a: 1,
  b: 2
};
let { a: paraA, b, c = 5 } = object;
// object.a
// a 는 같지 않다.
// object.a 를 바꿔준다고 해서  a가 바뀌지는 않는다.
console.log(paraA);
console.log(b);
paraA = 5;
console.log(paraA);
console.log(object.a);
console.log(c);
