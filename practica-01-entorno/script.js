
function  msj(){
    document.getElementById("saludo").innerHTML="TIID_04_01Java";
    document.getElementById("demo").innerHTML="<h2>Hello word!</h2>"
}
const titulo = document.getElementById("titulo");

titulo.addEventListener("click", () => {
  alert("¡Hiciste clic en el título!");
});