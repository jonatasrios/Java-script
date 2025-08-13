function ligarquandopronto(){
    console.log("Sua pizza chegou")
}
function pedirpiza(callback){
    console.log("Pedindo pizza...")
    callback();
}
pedirpiza(ligarquandoprontos)