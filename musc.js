var img = document.getElementById("img")
var quebrou = 0


function acende() {
   if (quebrou == 0) {
    img.src = 'acesa.jpg'}
    
}
function apaga() {
    if (quebrou == 0) {
    img.src = 'apagada.jpg'}
    
}
function quebra() {
    
    quebrou = 1
    img.src = 'quebrada.jpg'

   }
   

