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



function validateForm(){

    var botao = document.querySelector('input#botao')
    var nome = document.querySelector('input#nome').value
    var senha = document.querySelector('input#senha').value
    var telefone = document.querySelector('input#telefone').value
    var CPF = document.querySelector('input#cpf').value
    if (nome == null || nome == "" && senha ==null || senha == ""){
        botao.classList.add("erro")
        ChangePosition(botao)
    }else {
        botao.classList.add("sucesso") 
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