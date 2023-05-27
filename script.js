 const memes =["https://w.forfun.com/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg?h=900&r=0.5","https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png","https://antislang.ru/wp-content/uploads/%D0%BC%D0%B5%D0%BC-1.jpg"];
const jokes = [ "ахаха"];
const quates = [{quote:"Было бы великой ошибкой думать...", autor:"В.И. Ленин"},{quote:"Главная проблема цитат в интернете, все сразу верят в их подлинность.", autor:"Конфуций"},{quote:"", autor:""},{quote:"", autor:""}];
// const riddles = [{quation=}];
const ridl = [{question:"asg", answer: "111"},
             {question:"vfhjkl", answer: "222"},
             {question:"kpj", answer: "333"}
             ];

function showQuote(){
  clearAll();
  const quote = getRandomData(quates);
 const quatesContainer = document.querySelector('.Quote-content');
 const newQuoter = document.createElement('p');
 const newAutor = document.createElement('p');
  newAutor.textContent = quote.autor;
  newQuoter.textContent = quote.quote;
  
  quatesContainer.appendChild(newQuoter);
    quatesContainer.appendChild(newAutor);

  console.log(newQuoter);
}

function showJoke(){
clearAll();
 const Joke = getRandomData(jokes);
 const jokeContainer = document.querySelector('.joke-content');
 const newJoke= document.createElement('p');
 newJoke.textContent = Joke;
  
 
 jokeContainer.appendChild(newJoke);
 console.log(jokeContainer);

}
function showRiddle(){
clearAll();
 const riddle = getRandomData(ridl);
 const riddleContainer = document.querySelector('.meme-Riddle');
 const newRiddl = document.createElement('p');
const newAnswer = document.createElement('p');
newAnswer.setAttribute('id','Riddle-Answer');
  newRiddl.textContent = riddle.question;
 newAnswer.textContent = riddle.answer;
 newAnswer.hidden = true;
  riddleContainer.appendChild(newRiddl);
  riddleContainer.appendChild(newAnswer);
  console.log(newAnswer);
}

function  showAnswer(){
  const newAnswer = document.querySelector('#Riddle-Answer');
    newAnswer.hidden = false;
}


function rn_num(len){
return Math.floor(Math.random()*len);
}

function clearAll(){
  const memeContainer = document.querySelector('.meme-content');
  memeContainer.innerHTML = "";
 const jokeContainer = document.querySelector('.joke-content');
  jokeContainer.innerHTML = "";
  const riddleContainer = document.querySelector('.meme-Riddle');
  riddleContainer.innerHTML = "";
  const quoterContainer = document.querySelector('.Quote-content');
  quoterContainer.innerHTML = "";
}

function showMeme(){
clearAll();
 const memeUrl = getRandomData(memes);
 const memeContainer = document.querySelector('.meme-content');
 const newMeme = document.createElement('img');
 newMeme.setAttribute('src', memeUrl);
 memeContainer.appendChild(newMeme);
 console.log(memeContainer);
}


const data = {
  memes,
  jokes,
  quates,
  ridl
};
function rn_num(len){
return Math.floor(Math.random()*len);
}

function getRandomData(type){
  return type[rn_num(type.length)];
}
