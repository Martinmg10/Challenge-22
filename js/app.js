let nombre = prompt("Nombre");
let genero = prompt("Ingrese genero femenino o masculino").toLowerCase();
let sintomas = prompt("Que sintomas presenta:\n.Dolor de cabeza\n.Dolor abdominal").toLowerCase();
let embarazo = true


if (genero=="femenino"&& sintomas == "dolor abdominal") {
    embarazo = confirm("Estas embarazada");
}

 if (genero == "femenino" && sintomas == "dolor abdominal" && embarazo) {
    
    alert(`Hola ${nombre} No puede realizarse tomografias y placas`);
}else if (genero == "femenino" && sintomas == "dolor abdominal" && embarazo !== true) {
    alert(`Hola ${nombre} debes realizarse una placa`);
}else if (genero == "femenino" || sintomas == "dolor de cabeza"){
    alert(`Hola ${nombre} debes realizarte una tomografia`);
}
else if (nombre == "masculino" || sintomas == "dolor de cabeza" ) {
    alert(` Hola ${nombre} debes realizarse una tomografia`);
}else if (nombre == "masculino" || sintomas == "dolor abdominal" ){
    alert(`Hola ${nombre} debes realizarte una placa`);
}else {
    alert(`sintoma no encontrado, consulta tu medico `);
}