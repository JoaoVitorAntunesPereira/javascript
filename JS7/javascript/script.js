let botao = window.document.querySelector('input#botao')

botao.addEventListener('click',clicar_modo_escuro)
/* a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair) */

/*function clicar(){
    a.innerText = 'Clicou'
    a.style.background='red'
}

function entrar(){
    a.innerText='Entrou'
}

function sair(){
    a.innerText='Saiu'
    a.style.background='greenyellow'
} */

function clicar_modo_escuro() {
    document.querySelector('body').classList.toggle('clicar')
    document.querySelector('div#area').classList.toggle('clicar')
    document.querySelector('h1').classList.toggle('clicar')
}