// function calculateCircleArea(r = 1) {
//   //es5문법
//   //호연이 같은 헷갈려
//   //r = r||1; //1을 기본값으로 주고 싶을때
//   return Math.PI * r * r;
// }

const calculateCircleArea = (r = 1) => Math.PI * r * r;
const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669
