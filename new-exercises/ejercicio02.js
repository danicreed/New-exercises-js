let nombre = prompt("ingresa tu nombre");
let palabra = prompt(
  nombre + " Ingresa una de estas palabras casa, mesa, perro, gato"
);

switch (palabra) {
  case "casa":
    alert("House");
    break;

  case "mesa":
    alert("Table");
    break;

  case "perro":
    alert("dog");
    break;

  case "gato":
    alert("Cat");
    break;
  default:
    alert("Favor ingresa una palabra valida");
    break;
}
