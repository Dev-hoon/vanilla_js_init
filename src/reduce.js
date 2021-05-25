const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((n) => {
  sum += n;
});
console.log(sum);

sum = 0;

sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//과제 7번
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
