
var left = true



function validateForm(){

    var botao = document.querySelector('input#botao')
    var nome = document.querySelector('input#nome').value
    var senha = document.querySelector('input#senha').value
    var CPF = document.querySelector('input#cpf').value
    var telefone = document.querySelector('input#telefone').value
    var email = document.querySelector('input#email').value

    var Inome = document.querySelector('i#Inome')
    var Isenha = document.querySelector('i#Isenha')
    var Icpf = document.querySelector('i#Icpf')
    var Itel = document.querySelector('i#Itel')
    var Imail = document.querySelector('i#Imail')

    if ((nome == null || nome == "") || (senha ==null || senha == "") || (CPF == null|| CPF =="") || (telefone ==null || telefone == "") || (email == null || email =="")){
        ChangePosition(botao)
        botao.classList.remove("sucesso")
    }else{
        botao.classList.add("sucesso")
    }

    if(nome == null || nome == ""){
      Inome.classList.add("error")
      setTimeout(teste,500)
    }else{
    }

    if(email == null || email == ""){
      Imail.classList.add("error")
      setTimeout(teste,500)
    }else{
    }

    if(senha == null || senha == ""){
      Isenha.classList.add("error")
      setTimeout(teste,500)
    }else{
    }

    if(CPF == null || CPF == ""){
      Icpf.classList.add("error")
      setTimeout(teste,500)
    }else{
    }

    if(telefone == null || telefone == ""){
      Itel.classList.add("error")
      setTimeout(teste,500)
    }else{
    }
}

function ChangePosition(botao){
    botao.classList.add("erro")
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

  const handleCPF = (event) => {
    let input2 = event.target
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


function teste(){
  Inome.classList.remove("error")

  Imail.classList.remove("error")

  Isenha.classList.remove("error")

  Icpf.classList.remove("error")

  Itel.classList.remove("error")
}
