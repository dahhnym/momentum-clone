let width;
let heading = document.getElementById("hi");

function handleWindowResize(){
  width = window.innerWidth;
  console.log("브라우저너비: "+width);
  heading.innerText = width;

}
window.addEventListener("resize", handleWindowResize);



