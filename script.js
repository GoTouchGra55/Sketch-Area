const container = document.querySelector(".container");
const size = document.querySelector(".size");
const resolution = document.querySelector(".resolution");
const reset = document.querySelector(".reset");
const sColor = document.querySelector(".color");
const erase = document.querySelector(".erase");
const random = document.querySelector(".random");
let color = "";
let isRainbow = false;
let isErasing = false;

size.addEventListener("input", () => {
  createGrid(size.value);
  resolution.textContent = `${size.value}x${size.value} pixels`;
});

random.addEventListener("click", () => {
  isRainbow = !isRainbow; 
  isErasing = false;
  if (isRainbow) {
    random.textContent = "🌈 Rainbow: ON";
  } else {
    random.textContent = "🌈 Rainbow: OFF";
  }
});

sColor.addEventListener("input", () => {
  color = sColor.value;
  isRainbow = false;  
  isErasing = false;
  random.textContent = "🌈 Rainbow: OFF";
});

erase.addEventListener("click", () => {
  isRainbow = false;
  isErasing = true;
  random.textContent = "🌈 Rainbow: OFF";
});

reset.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(size.value);
  isRainbow = false;
  isErasing = false;
  random.textContent = "🌈 Rainbow: OFF";
});

function createGrid(Size){
  container.innerHTML = "";
  for (let i = 0; i < (Size**2); i++){
    const cell = document.createElement("div");
    cell.setAttribute("style", `height: ${(450/Size) - 2}px; width: ${(450/Size) - 2}px; border: 0.5px solid rgba(0, 0, 0, 0.15)`);
    container.append(cell);

    cell.addEventListener("mouseover", () => {
      if (color && !isRainbow){
        cell.style.backgroundColor = color;
      } 
      else if (isErasing){
        cell.style.backgroundColor = "";
      }
      else if (isRainbow){
        cell.style.backgroundColor = generateRndColors();
      }
    });
  }
}

function generateRndColors(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  rgb = `rgb(${r},${g},${b})`;
  return rgb;
}