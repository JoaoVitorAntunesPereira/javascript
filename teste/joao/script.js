
var left = true



function validateForm(){

    var botao = document.querySelector('input#botao')
    var nome = document.querySelector('input#nome').value
    var senha = document.querySelector('input#senha').value
    var CPF = document.querySelector('input#cpf').value
    var telefone = document.querySelector('input#telefone').value

    if ((nome == null || nome == "") || (senha ==null || senha == "") || (CPF == null|| CPF =="") || (telefone ==null || telefone == "")){
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

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const handleCPF = (event2) => {
    let input2 = event2.target
    input2.value = CPFMask(input2.value)
  }
  
  const CPFMask = (cpf) => {
    if (!cpf) return ""
    cpf = cpf.replace(/\D/g,'')
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1-$2")
    return cpf
  }