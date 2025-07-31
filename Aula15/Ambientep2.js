let valores = [8, 1, 4, 7, 2, 9]
valores.sort()
/*for(var pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem um valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}
