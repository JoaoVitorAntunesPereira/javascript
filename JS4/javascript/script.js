let nome = prompt("Qual é o seu nome?")
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()}`)

n1 = 1543.9
alert(n1)
alert(n1.toFixed(2))//coloca duas casas decimais após o ponto
alert(n1.toFixed(2).replace('.',','))
alert(n1.toLocaleString('pt-BR', {style: 'currency', curency:'BRL'}))