const images = ["timothy-eberly-yuiJO6bvHi4-unsplash.jpg","patrick-tomasso-5hvn-2WW6rY-unsplash.jpg", "alisa-anton-JhxGkGgd3Sw-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url("img/${chosenImage}")`;
