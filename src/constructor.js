function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  // this.say = function () {
  //   console.log(this.sound);
  // };
}

Animal.prototype.say = function () {
  console.log(this.sound);
};
Animal.prototype.value = 1;

// const dog = new Animal("개", "윤호연", "멍멍");
// const cat = new Animal("고양이", "엘리자베스", "냐옹!");

// dog.say();
// cat.say();

// console.log(dog.value);
// console.log(cat.value);

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
Dog.prototype = Animal.prototype;

const dog = new Dog("호연", "멍멍");
dog.say();

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}
Cat.prototype = Animal.prototype;
const cat1 = new Cat("엘리자베스", "냐옹");
const cat2 = new Cat("세바스찬", "냥");
cat1.say();
cat2.say();

//과제 1
//z클래스와 객체 생성자의 차이는?
