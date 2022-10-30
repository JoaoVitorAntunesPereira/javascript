/* function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id(telefone){
	return document.getElementById(telefone);
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
} */

const CPF = document.querySelector('input#cpf')

CPF.addEventListener('keypress', () => {
    let CPFLength = CPF.value.length

    if (CPFLength == 3 || CPFLength == 7) {
        CPF.value += '.'
    }else if (CPFLength == 11) {
        CPF.value += '-'
}
})

const telefone = document.querySelector('input#telefone')


telefone.addEventListener('keypress', () => {
    let telefoneLength = telefone.value.length

    if (telefoneLength == 2) {
        telefone.value = '(' + telefone.value + ') ' 
    }else
     if (telefoneLength == 9) {
        telefone.value += '-'
    }else
     if(telefoneLength >=15) {
        tele2
     }
})





/* function validateForm(){

    var nome = document.querySelector('input#usuario')
    
    var senha = document.querySelector('input#senha')

    if (nome == "" || nome == null){
        ChangePosition(botao)
    }
} */

var left = true


var botao = document.querySelector('input#botao')
var nome = document.querySelector('input#nome')
var senha = document.querySelector('input#senha')


function validateForm(){

    if (nome == null || nome == "a"){
        botao.classList.add("mudacor")
        ChangePosition(botao)
    }
}



function ChangePosition(botao){
    if (left){
        botao.style.marginLeft = '205px'
        left = false
    }else{
        botao.style.marginLeft = '15px'
        left = true
    }
}