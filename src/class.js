class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "파트라슈", "bowl");
const cat = new Animal("고양이", "냐옹이", "뭘봐!");

dog.say();
cat.say();

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog1 = new Dog("파블로프", "worl");
const cat1 = new Cat("이자벨라", "냐아아아아아아옹");

dog1.say();
cat1.say();

class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을 파는 음식점 리스트:`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("도미노 피자");
pizza.addBrand("미스터 피자");
pizza.addBrand("반올림 피자샵");

const chicken = new Food("치킨");
chicken.addBrand("푸라닭");
chicken.addBrand("쌀통닭");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();

// 과제 2
// 클래스 만들기
