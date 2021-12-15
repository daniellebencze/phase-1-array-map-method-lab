const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let titleCased = () => tutorials.map (function (tutorials, array) {
  console.log(tutorials); 
  let seperateWords = tutorials.split(' ');
  console.log(seperateWords);
  words(seperateWords);
  let capitalizedWords = words(seperateWords);
  console.log(capitalizedWords);
  return capitalizedWords.join(" ");
});

let words = (array) => array.map (function (tutorials, array) {
  console.log(tutorials);
    return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);
});

console.log(titleCased());