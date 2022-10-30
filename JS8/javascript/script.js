function somar(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('input#txtn2')
    let res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}

chk.addEventListener('change',()=>{
    head.innerHTML=`<link rel="stylesheet" href="style/style.css">`
})

