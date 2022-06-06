const table = document.querySelector("#app table");

let count = 0;

function draw(cell, shape) {
  cell.innerHTML = `<div class='${shape}' />`;
}

table.addEventListener("click", function onTableClicked(event) {
  if (event.target.tagName !== "TD") {
    return;
  }
  if (count % 2 === 0) {
    draw(event.target, "circle");
  } else {
    draw(event.target, "cross");
  }
  count++;
});
