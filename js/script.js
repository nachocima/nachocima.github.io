function validarForm(){
    var txtNom = document.getElementById('txtNombre');
    var txtEmail = document.getElementById('txtEmail');
    var txtArea = document.getElementById('txtArea');

    if(txtNom.value == ''){
        alert('Debe registrar un nombre');
        return false;
    }
    if(txtEmail.value == ''){
        alert('Debe registrar un e-mail');
        return false;
    }
    if(txtArea.value == '' || txtArea.value.length < 15){
        alert('Debe registrar un motivo');
        return false;
    }
    else{
        return true;
    }
}
function enviarDatos(){
    if(validarForm()){
        Swal.fire('Se realizo el envío con éxito');
    }
    else{
        Swal.fire('Eror de validación');
    }
}