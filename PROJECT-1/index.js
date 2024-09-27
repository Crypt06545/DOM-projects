window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const clickBtn = document.getElementById("change-btn");

  clickBtn.addEventListener("click", function () {
    const rgb = getRGBColor();
    root.style.backgroundColor = rgb;
  });
}

function getRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green},${blue} )`;
}
