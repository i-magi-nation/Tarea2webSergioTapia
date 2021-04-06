var form = document.querySelector("form") as HTMLFormElement;
let mensaje:any = document.getElementById("mensaje");
var namee = document.getElementById("name")as HTMLInputElement;
var surname = document.getElementById("surname")as HTMLInputElement;
var rut = document.getElementById("rut")as HTMLInputElement;
var correo = document.getElementById("correo")as HTMLInputElement;
var cellphone = document.getElementById("cellphone")as HTMLInputElement;
var info = document.getElementById("info")as HTMLInputElement;
var enviar = document.getElementById("enviar")as HTMLInputElement;
var limpiar = document.getElementById("limpiar")as HTMLInputElement;
var c = document.getElementById("c")as HTMLInputElement;
var java = document.getElementById("java")as HTMLInputElement;
var python = document.getElementById("python")as HTMLInputElement;
var ts = document.getElementById("ts")as HTMLInputElement;
var php = document.getElementById("php")as HTMLInputElement;
var cpp = document.getElementById("cpp")as HTMLInputElement;
var year1 = document.getElementById("1")as HTMLInputElement;
var year2 = document.getElementById("2")as HTMLInputElement;
var year3 = document.getElementById("3")as HTMLInputElement;
var year4 = document.getElementById("4")as HTMLInputElement;
var year5 = document.getElementById("5")as HTMLInputElement;
function validar(num) {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}
function years() {
    if (year1.checked || year2.checked || year3.checked || year4.checked || year5.checked){
    return true;
    }
    return false;
}
function checks() {
    if (c.checked || java.checked || python.checked || ts.checked || php.checked || cpp.checked ){
        return true;
    }
        return false;
       
}

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    if(validar(rut.value) && checks() && years()){
        
        form.style.display="none";
            mensaje.style.display="block";
            mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
            mensaje.style.color="#424242";
    }
    else {   
            var msg = "Error, Formulario invalido. Ingrese correctamente los datos"
            alert(msg);   
           
    }
})
limpiar.addEventListener("click", (e: Event) => {
    e.preventDefault();
    form.reset();
})
