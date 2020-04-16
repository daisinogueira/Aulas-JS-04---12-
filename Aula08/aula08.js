//RELACIONAIS
5 > 2  //true 
8 < 4  //false
var a = 8
var b = 15
a > b //false
a < b //true
a <= b-10 //false
a == b //false
a != b //true

//INDENTIDADE
5 == '5' //true
var x = 5
var y = '5'
x == y //true
x === y //false
x != y //false
x !== y //true

//LÓGICOS
var a = 5
var b = 8
a > b && b % 2 == 0 //false
a <= b || b / 2 == 2 //true

//TERNÁRIO
var media = 5.5
media > 7 ? 'APROVADO' : 'REPROVADO'   //REPROVADO
media += 3 
media > 7 ? 'APROVADO' : 'REPROVADO'   //APROVADO
var x = 8
var res = x % 2 == 0 ? 5 : 9  // res = 5
var idade = 19
var r = idade >=18 ? 'MAIOR' : 'MENOR'  // r = MAIOR 