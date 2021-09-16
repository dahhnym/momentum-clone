const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick(){
  //   const currentColor = h1.style.color;
  //   let newColor;
  //   if(currentColor === "blue"){
    //     newColor = "tomato";
    //   }  else {
      //     newColor = "blue";
      //   }
      //   h1.style.color = newColor;
// }
      
      
function handleTitleClick(){
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);    
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  h1.classList.toggle("clicked"); // 위의 코드와 똑같은 기능을 한다
}
      


h1.addEventListener('click', handleTitleClick);  // h1.onclick = handleTitleClick;


// function handleMouseEnter(){
//   h1.innerText = "Mouse is here";
// }

// function handleMouseLeave(){
//   h1.innerText = "Mouse is out";
// }

// function handleWindowResize(){
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy(){
//   alert('copier!');
// }

// function handleWindowOffline(){
//   alert('You are offline!');
// }

// function handleWindowOnline(){
//   alert('You are online!');
// }

// h1.addEventListener('mouseenter',handleMouseEnter);
// h1.addEventListener('mouseleave',handleMouseLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline',handleWindowOffline);
// window.addEventListener('online',handleWindowOnline);

