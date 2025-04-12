// Your code here.
const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX, offsetY;

const containerRect = container.getBoundingClientRect();

// Initialize cube positions in grid layout
cubes.forEach((cube, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  cube.style.left = `${col * 100 + 10}px`;
  cube.style.top = `${row * 100 + 10}px`;

  // Add event listeners
  cube.addEventListener("mousedown", (e) => {
    activeCube = cube;
    offsetX = e.clientX - cube.getBoundingClientRect().left;
    offsetY = e.clientY - cube.getBoundingClientRect().top;
    cube.style.cursor = "grabbing";
  });
});

// Global event listeners
document.addEventListener("mousemove", (e) => {
  if (!activeCube) return;

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  x = Math.max(0, Math.min(container.clientWidth - activeCube.offsetWidth, x));
  y = Math.max(0, Math.min(container.clientHeight - activeCube.offsetHeight, y));

  activeCube.style.left = `${x}px`;
  activeCube.style.top = `${y}px`;
});

document.addEventListener("mouseup", () => {
  if (activeCube) {
    activeCube.style.cursor = "grab";
  }
  activeCube = null;
});
