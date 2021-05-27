// function isAnimal(text) {
//   // return (
//   //   text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
//   // );
//   const animals = ['고양이','개','거북이','너구리']
//   return animals.includes(text);
// }

const isAnimal = (name) => ["고양이", "개", "거북이", "너구리"].includes(name);
console.log(isAnimal("개"));
console.log(isAnimal("노트북"));

function getsound(animal) {
  // if (animal === "개") return "멍멍!";
  // if (animal === "고양이") return "냐옹!";
  // if (animal === "거북이") return "꼬북!";
  // if (animal === "너구리") return "너굴";
  // return "...??????";

  // switch(animal){
  //   case '개':
  //     return '멍멍';
  //   case '고양이':
  //     return '냐옹';
  //   case '거북이':
  //     return '꼬북';
  //   case '너구리':
  //     return '너굴';
  //   default:
  //     return '......????';
  // }

  const sounds = {
    개: "멍멍",
    고양이: "야옹",
    거북이: "꼬북",
    너구리: "너굴"
  };
  return sounds[animal] || "...?????";
}
console.log(getsound("개"));
console.log(getsound("너구리"));
console.log(getsound());
