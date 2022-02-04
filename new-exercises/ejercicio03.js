const aviso = prompt(
  "Bienvenido a la pizzria dani que pizza desea personal mediana o familiar"
);
if (aviso === "personal") {
  let sabor = prompt("Que sabor de pizza deseas pollo, hawayana o carnes");
if (sabor === "pollo")  {
  let add = prompt("La desea con 1-queso o 2-sin queso")
  switch (add) {
    case "1":
      alert("Su pizza es con queso")
      let acomp = prompt("la desea con a-con salsa b-sin salsa")
      switch (acomp) {
        case "a":
          alert("Su pizza es personal con queso y con salsa")
          break;
          case "b":
            alert("Su pizza es personal con queso y sin salsa")
            break;
        default:
          alert("indique un valor valido")
          break;
      }
      break;


      case "2":
        alert("Su pizza es sin queso")
        let acomp = prompt("la desea con a-con salsa b-sin salsa")
        switch (acomp) {
          case "a":
            alert("Su pizza es personal sin queso y con salsa")
            break;
            case "b":
              alert("Su pizza es personal sin queso y sin salsa")
              break;
          default:
            alert("indique un valor valido")
            break;
        break;
    
    default:
      alert("indique un valor valido")
      break;
  }
}    }   

} else if (aviso === "mediana") {
  let sabor = prompt("que sabor de pizza deseas mexicana o criolla");
} else if (aviso === "familiar") {
  let sabor = prompt("Que sabor de pizza deseas vegetariana o carne");
 }      
   