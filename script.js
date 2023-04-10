var arrayTareas = []
function Listar(event){
    event.preventDefault();
    var Tarea = new Object()
   
    let valorImput = document.getElementById("inputt").value
    
    if(validarInput(valorImput))
    {
        Tarea.completa = false
        Tarea.inicio = event.timeStamp
        Tarea.texto= valorImput;
        Tarea.fin = -1;
        let lista = document.getElementById("TODOlista")
        lista.appendChild(CrearElemendo(valorImput))
        arrayTareas.push(Tarea)
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
    c.className = "destachado"
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
    for (let i = 0; i < arrayTareas.length; i++) {
        if(arrayTareas[i].texto = hijo.innerHTML){
            if(arrayTareas[i].completa == false)
            {
                hijo.classList.remove("destachado");
                hijo.className = "tachado";
                arrayTareas[i].completa = true
                arrayTareas[i].fin = event.timeStamp
                
            }
            else if(arrayTareas[i].completa == true)
            {
                hijo.classList.remove("tachado");
                hijo.className = "destachado";
                arrayTareas[i].completa = false
                arrayTareas[i].fin = -1
            }
            console.log(arrayTareas[i])
        }
        
        
    }
}

let BuscarMasRapida = event =>{
    event.preventDefault();
    let arrayRapidas = []
    let numMayor = 99999999999
    for (let i = 0; i < arrayTareas.length; i++) {
        if (arrayTareas[i].fin - arrayTareas[i].inicio < numMayor) {
            arrayRapidas.push(arrayTareas[i])
            alert("La tarea es mas rapida es " + arrayRapidas[i].texto)
        }
    }
    
}