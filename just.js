var form = document.querySelector("form");
var mensaje = document.getElementById("mensaje");
var namee = document.getElementById("name");
var surname = document.getElementById("surname");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var cellphone = document.getElementById("cellphone");
var info = document.getElementById("info");
var enviar = document.getElementById("enviar");
var limpiar = document.getElementById("limpiar");
var c = document.getElementById("c");
var java = document.getElementById("java");
var python = document.getElementById("python");
var ts = document.getElementById("ts");
var php = document.getElementById("php");
var cpp = document.getElementById("cpp");
var year1 = document.getElementById("1");
var year2 = document.getElementById("2");
var year3 = document.getElementById("3");
var year4 = document.getElementById("4");
var year5 = document.getElementById("5");
function validar(num) {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}
function years() {
    if (year1.checked || year2.checked || year3.checked || year4.checked || year5.checked) {
        return true;
    }
    return false;
}
function checks() {
    if (c.checked || java.checked || python.checked || ts.checked || php.checked || cpp.checked) {
        return true;
    }
    return false;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validar(rut.value) && checks() && years()) {
        form.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color = "#424242";
    }
    else {
        var msg = "Error, Formulario invalido. Ingrese correctamente los datos";
        alert(msg);
    }
});
limpiar.addEventListener("click", function (e) {
    e.preventDefault();
    form.reset();
});
