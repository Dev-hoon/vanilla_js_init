const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);
//===는 값을 비교할때 쓰는 연산이다.

const c = 1;
const d = 1;
const equals2 = c === d;
console.log(equals2);
// ==도 비교 연산이긴하다.
// 과제 3
//==과 ===은 무슨 차이가 있는것인가?
// 에시를 들어 구분 할수 있도록 하자.
const values = "a" !== "b";
console.log(values);
console.log(1 !== "1");
console.log(1 !== "1");
const e = 10;
const f = 15;
const g = 15;

console.log(e < f); // true
console.log(f > e); // true
console.log(f >= g); // true
console.log(e <= g); // true
console.log(f < g); // false;
//위 비교 연산들의 결과가 실제로 출력해 보지 않고도 결과를 알수 있어야만
//conditinal 문법닝 if 문 작성이 가능(수월) 해진다.

// 추가
const h = "안녕";
const i = "하세요!!";
console.log(h + i); // 안녕하세요
//이런식으로 문자 붙이는 것고 쌉가능함.

const aa = 10;
if (aa === 5) {
  console.log("5입니다!");
} else if (aa === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}
