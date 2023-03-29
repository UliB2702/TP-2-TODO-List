function Listar(event){
    let arrayTareas = []
    let valorImput = document.getElementById("inputt").value

    if(validarInput(valorImput))
    {

    }
}
let validarInput = valorImput => {
    if(valorImput == " " || valorImput == null || valorImput == undefined || valorImput == "  "){
        return false;
    }
    else{
        return true;
    }
}