//aritméticos == | + | - | % | * | / | **

let a = 5 + 3           //8
let b = a % 5          //3 
let c = 5 * b ** 2     //45  **=potenciação
let d = 10 - a / 2     //6
let e = 6 * 2 / d      //2  
let f = b % e + 4 / e  //3

//atribuição

var n = 3
n = n + 4  //7  n+=4
n = n - 5  //2  n-=5
n = n * 4  //8  n*+4
n = n / 2  //4  n/=2
n = n ** 2 //16 n**=2 
n = n % 5  //1  n%=5
n+=1       //2

var x = 5
x = x + 1 // ==  x+=1  ==  x++
x = x - 1 // ==  x-=1  ==  x--

//relacionais == | > | < | >= | <= | == |!==

//sempre retornará  como 'true'ou 'false'

5 > 2   //true
7 < 4   //false
8 >= 8  //true
9 >= 7  //false
5 == 5  //true
4 != 4  //false
5 == '5'//true

//identidade  == | === | !==

5 === '5'  //= false //verifica a variável e seu tipo
5 === 5    //=true
5 !== '5'  //=true

/*lógicos  ==  | ! | && | ||

  ! == negação
  && conjunção
  || disjunção

  negação
  !  recebe 'true' ou 'false'

  conjunção
  true   &&  true   == true
  true   &&  false  == false
  false  &&  true   == false
  false  &&  false  == false

  disjunção
  true   ||  true   == true
  true   ||  false  == true
  false  ||  true   == true
  false  ||  false  == false*/

  //ternários
  let media=5
  media>=7.0 ?"Arovado":"Reprovado"