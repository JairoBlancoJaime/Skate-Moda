/**** Efecto Scroll Header ****/

//Se declara una variable para almacenar la posicion del header y devuelve el numero de pixeles movidos.
let prevScrollPos = window.pageYOffset;

//Se establece un evento de desplazamiento de la pantalla
window.onscroll = function() {
  //Se actualiza la variable con la posicion de desplazamiento vertical actual.
  let currentScrollPos = window.pageYOffset;
  
  // Se establece una condicion para que compare el scroll previo con el actual.
  if (prevScrollPos > currentScrollPos) {
    //Si hace scroll down, oculta el header.
    document.getElementById("header").style.top = "0";
  } else {
    //Si hace scroll up, vuelve a aparecer.
    document.getElementById("header").style.top = "-100%";
  }
  //Se actualiza la variable  con la posicion de desplazamiento actual.
  prevScrollPos = currentScrollPos;
}

/**** Confirmar contraseña ****/
document.getElementById('FormRegistro').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmpassword').value;

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    event.preventDefault();
  }
});