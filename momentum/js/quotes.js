const quotes = [
  "How your life feels is more important than how it looks",
  "Life is tough but so are you!",
  "Goals not written down are just wishes",
  "Quotes don't work unless you DO",
  "Ask  yourself if what you are doing 'today' is getting you closer to where you want to be 'tomorrow'",
  "Courage: If you want something you've never had, you have to do something you've never done",
  "The best view comes from the hardest climb",
  "It's never late to START",
  "Nothing changes if Nothing Changes",
  "Don't stop when you're tired. Stop when you're DONE"  
];

const quote = document.querySelector("#quote span");
const todaysQuote= quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote;


// round(); // 값을 반올림하다
// ceil(); // 값을 올림한다
// floor(); // 값을 내림한다 

