function contar(){
    var ini = document.getElementById("iinicio")
    var fim = document.getElementById("ifim")
    var passo = document.getElementById("ipasso")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] faltam dados")
        res.innerHTML="Imposivel contar!!"
    }else{
        res.innerHTML ="Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo invalido!")
        }
        for(let c = i; c<=f; c += p ){
            res.innerHTML += ` ${c} ` 
        }
    }
}