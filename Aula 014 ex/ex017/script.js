function tabuada(){
    let num = document.getElementById("inumero")
    let tab = document.getElementById("itabuada")
    if (num.value.length == 0 ){
        window.alert("Verifique os dados")
    }else{
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ""
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }
    }
}