let num = document.getElementById("inum")
let lista = document.getElementById("filista")
let res = document.getElementById("res")
let valores = []

function isnumero(n){//se é numero
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){//se esta na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert("Valor ja adicionada na lista ou invalido, verifique os dados")
    }
    num.value = " "
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione os valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos] > maior ){
                maior = valores[pos]
            }if(valores[pos] < menor ){
                menor = valores[pos]
            }
        }
        res.innerHTML = " "
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`

    }
}