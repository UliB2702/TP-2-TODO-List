var arrayTareas = []
function Listar(event){
    event.preventDefault();
    let valorImput = document.getElementById("inputt").value

    if(validarInput(valorImput))
    {
        let lista = document.getElementById("TODOlista")
        lista.appendChild(CrearElemendo(valorImput))
        

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

let CrearElemendo = valorImput =>{
    let a = document.createElement("li")
    let b = document.createElement("input")
    b.type = "checkbox"
    b.setAttribute("onclick", 'Tachar(event)')
    a.appendChild(b)
    a.innerHTML += valorImput

    return a; 
}

let Tachar = event =>{
    let current = event.currentTarget
    let Padre = current.parentNode;
    Padre[1].setAttribute(tachado);
}