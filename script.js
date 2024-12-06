let names = document.querySelectorAll("td:first-child");
let rows = document.querySelectorAll("tbody>tr");
let input = document.querySelector(".form-input");

function filterNames() {
  let value = input.value.toLowerCase();
  let index = 0;
  for (const row of rows) {
    row.style.display = "";
  }

  for (const name of names) {
    if (!name.innerHTML.toLowerCase().includes(value)) {
      rows[index].style.display = "none";
    }
    index++;
  }
}
