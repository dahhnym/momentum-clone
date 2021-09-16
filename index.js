const title = document.getElementById("title");

function handleClick(){
  title.style.color = "blue";
}

title.addEventListener("hover",handleClick);