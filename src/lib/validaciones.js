import { GrabarRegistro } from "../Firebase/FirebaseConfig.js";

const Formulario_Color_Fondo = "rgb(8, 22, 27)";
const Formulario_Color_Fondo_Resaltado = "rgb(255, 102, 0) ";


export function Validar() {


    const Validar_Columnas = (Columnas) => {
        let Condicion = false;

        for (let Columna in Columnas) {
            // console.log(Columna)
            // console.log(Columnas[Columna]);
            // const Elemento = document.getElementById(Columna);
            // console.log(Elemento);

            if (Columna != "FechaRegistro") {      // TODO Si el campo es fecha de registro na realiza nada            

                let Array_de_Elementos = document.getElementsByName(Columna);
                let Elemento_0 = Array_de_Elementos[0]
                let Valor = Columnas[Columna]
                let type_Elemento_0 = Elemento_0.type; // tipo, ejemplo text, radio
                let Elemento_Parent_Contenedor = Elemento_Contenedor_con_nodoName_Articulo(Elemento_0)

                if (Elemento_Parent_Contenedor.style.display != "none") {

                    switch (type_Elemento_0) {
                        case 'text':
                            {
                                Condicion = Valida_Text(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor);
                                if (!Condicion) {
                                    return false
                                }
                                break
                            }
                        case 'radio':
                            {
                                Condicion = Valida_Radio(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor);
                                if (!Condicion) {
                                    return false
                                }
                                break
                            }
                        case 'number':
                            {
                                Condicion = Valida_Number(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor);
                                if (!Condicion) {
                                    return false
                                }
                                break
                            }
                        case 'checkbox':
                            {
                                Condicion = Valida_checkbox(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor);
                                if (!Condicion) {
                                    return false
                                }
                                break
                            }

                        default:
                            {
                                Condicion = true
                            }
                    }
                }
            }
        }

         GrabarRegistro(Columnas);
        // La pagina se direcciona dentro de la funcion GrabarRegistro del archivo Validaciones ubicado en la carpeta composable

    };

    return {
        Validar_Columnas
    }
}



function Valida_Text(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor) {
    if (Valor.length < 2) {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo_Resaltado;
        alert("Favor, responda correctamente la pregunta " + Columna);
        Elemento_0.focus();
        return false;
    }
    else {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo;
        return true;
    }
}


function Valida_Radio(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor) {
    if (Valor == "") {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo_Resaltado;
        // Elemento_0.focus();
        Elemento_0.scrollIntoView({ block: "center" });
        alert("Favor, responda correctamente la pregunta " + Columna);

        return false;
    }
    else {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo;
        return true;
    }
}


function Valida_Number(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor) {
    if (Valor < 1) {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo_Resaltado;
        alert("Favor, responda correctamente la pregunta " + Columna);
        Elemento_0.focus();
        return false;
    }
    else {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo;
        return true;
    }
}

function Valida_checkbox(Columna, Valor, Elemento_0, Elemento_Parent_Contenedor) {
    if (Valor.length < 1) {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo_Resaltado;
        alert("Favor, responda correctamente la pregunta " + Columna);
        Elemento_0.focus();
        return false;
    }
    else {
        Elemento_Parent_Contenedor.style.backgroundColor = Formulario_Color_Fondo;
        return true;
    }
}

function Elemento_Contenedor_con_nodoName_Articulo(Elemento_0) {
    //nodoName devuelbe el tipo del elemento
    //parentElement devuelve el nodo padre

    let Elemento = Elemento_0.parentElement;
    if (Elemento.nodeName == "ARTICLE") {
        return Elemento;
    }

    Elemento = Elemento_0.parentElement.parentElement;
    if (Elemento.nodeName == "ARTICLE") {
        return Elemento;
    }

    Elemento = Elemento_0.parentElement.parentElement.parentElement;
    if (Elemento.nodeName == "ARTICLE") {
        return Elemento;
    }

    Elemento = Elemento_0.parentElement.parentElement.parentElement.parentElement;
    if (Elemento.nodeName == "ARTICLE") {
        return Elemento;
    }


    Elemento = Elemento_0.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (Elemento.nodeName == "ARTICLE") {
        return Elemento;
    }
}
