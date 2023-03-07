const name = prompt("quel est votre nom ");

const rightPrice = Math.floor(Math.random() * 100) + 1;

let nombre = parseInt(prompt("donnée un nombre entre 1 et 100"));

while (nombre !== rightPrice) {
  if (nombre > rightPrice) {
    alert("c'est moins");
  }
  if (nombre < rightPrice) {
    alert("c'est plus");
  }
  if (nombre === rightPrice) {
    break;
  }
  nombre = parseInt(prompt("donnée un nombre entre 1 et 100"));
}
if (nombre === rightPrice) {
  alert(`vous avez gangné ${name} et le nombre est ${nombre}`);
}
