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
    b.className = "form-check-input"
    b.setAttribute("onclick", 'Tachar(event)')
    a.appendChild(b)
    let c = document.createElement("label")
    c.className = "form-check-label"
    c.innerHTML += valorImput
    a.appendChild(c)
    let d = document.createElement("hr")
    a.appendChild(d)
    return a; 
}

let Tachar = event =>{
    let current = event.currentTarget
    let Padre = current.parentNode;
    let hijo = Padre.lastChild
    hijo = hijo.previousElementSibling
    if(hijo.style.textDecoration == "line-through")
    {
        
        hijo.className = "text-decoration-none";
    }
    else{
    hijo.style.textDecoration = "line-through";
    }
}