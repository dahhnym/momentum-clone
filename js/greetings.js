// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector("input"); // input과 button을 찾으려면 document. 으로 찾을 수 없고 div 요소인 loginForm. 으로 찾아야한다
// const loginBtn = loginForm.querySelector("button");

//혹은
const loginForm = document.querySelector('#login-form');
const toDo_Form = document.querySelector('#todo-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
  event.preventDefault(); // 브라우저의 기본 동작을 막아준다. 이 경우 submit후 브라우저가 새로고침 되는 동작을 막아줌 submit 해도 새로고침 되지 않음
  // if(username === ""){
    //   alert("Please write your name");
    // } else if(username.length > 15){
      //   alert("Your username is too long");
      // } HTML에서 maxlength 속성으로 제한할 수 있다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username);
  toDo_Form.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
  const hours = new Date().getHours();
  let greetings;
  if(hours >= 4 && hours <= 11){
    greetings = "Good morning";
  } else if(hours >= 12 && hours < 17){
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }
  greeting.innerText = `${greetings}, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
  toDo_Form.classList.add(HIDDEN_CLASSNAME);
} else {
  // show the greetings
  paintGreetings(savedUsername)
  toDo_Form.classList.remove(HIDDEN_CLASSNAME);
} 


