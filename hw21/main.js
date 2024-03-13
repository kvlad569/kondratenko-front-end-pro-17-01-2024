const table = document.getElementById("myTable");
const count = 1;
for (const i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (const j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.innerHTML = count++;
  }
}