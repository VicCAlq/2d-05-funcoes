/* Questão 1
Crie uma função chamada "saudacao" que não recebe nenhum argumento e retorna 
a string "Bom dia!". Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function saudacao(){
  return "Bom dia!"
}
export const resposta01 = saudacao

/* Questão 2
Crie uma função chamada "dobro" que recebe um número como argumento e retorna 
o dobro desse número. Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function dobro(numero){
  return numero * 2
}
export const resposta02 = dobro

/* Questão 3
Crie uma função chamada "ehPositivo" que recebe um número como argumento e 
retorna true se o número for maior que zero, ou false caso contrário. 
Envie na resposta a função criada, sem executá-la (basta enviar o nome 
da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function ehPositivo(numeroso){
  return numeroso > 0
}
export const resposta03 = ehPositivo

/* Questão 4
Crie uma função chamada "nomeCompleto" que recebe dois argumentos: 
"primeiroNome" e "sobrenome", e retorna o nome completo separado por 
um espaço. Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function nomeCompleto(primeiroNome, sobrenome){
  return primeiroNome + " " + sobrenome
}
export const resposta04 = nomeCompleto

// Lista para as questões 5 a 8
export const travaLinguas = [
  "Três pratos de trigo para três tigres tristes",
  "O rato roeu a roupa do rei de Roma",
  "A aranha arranha a rama, a rama arranha a aranha",
  "Fui ao fundo do poço buscar um pouco de aço, mas no fundo do poço não havia aço nenhum",
  "O sábio não diz o que sabe, o tolo não sabe o que diz",
  "Papo de papa-pipa, pipa de papa-papo",
  "Um prato de trigo para dois tigres tristes"
]

/* Questão 5
Crie uma função chamada "contarTravaLinguas" que a lista de travaLinguas 
como argumento e retorna a quantidade total de trava-línguas (use a 
propriedade .length). Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function contarTravaLinguas(travaLingua){
  return travaLingua.length
}
export const resposta05 = contarTravaLinguas

/* Questão 6
Crie uma função chamada "obterTravaLingua" que recebe um número como 
argumento (representando um índice) e retorna o trava-língua correspondente 
àquele índice na lista "travaLinguas". Considere que o primeiro item 
está no índice 0. Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function obterTravaLingua(indice){
  return travaLinguas[indice]
}
export const resposta06 = obterTravaLingua

/* Questão 7
Crie uma função chamada "contarPalavrasTravaLingua" que recebe um 
número como argumento (representando um índice) e retorna a quantidade 
de palavras do trava-língua naquele índice. Dica: use o método .split(" ") 
diretamente no texto para separar as palavras e depois conte quantas existem.
Este método retorna uma lista. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function contarPalavrasTravaLingua(i){
  return travaLinguas[i].split(" ").length
}
export const resposta07 = contarPalavrasTravaLingua

/* Questão 8
Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma 
palavra como argumento e retorna uma lista (array) contendo apenas os 
trava-línguas que possuem aquela palavra. Dica: percorra a lista com 
um loop while, verifique se cada item inclui a palavra usando o método 
.includes(), e adicione à nova lista apenas os que atenderem à condição. 
Envie na resposta a função criada, sem executá-la (basta enviar 
o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function buscarTravaLinguasComPalavra(palavraABuscar){
  let ind = 0
  let resultados = [];
  while (ind < travaLinguas.length) {
    if (travaLinguas[ind].includes(palavraABuscar)) {
      resultados.push(travaLinguas[ind]);
    }
    ind++; 
  }
  return resultados;
}
export const resposta08 = buscarTravaLinguasComPalavra

// Lista para as questões 9 a 12
export const elementos = [
  { nome: "Hidrogênio", numeroAtomico: 1 },
  { nome: "Hélio", numeroAtomico: 2 },
  { nome: "Lítio", numeroAtomico: 3 },
  { nome: "Berílio", numeroAtomico: 4 },
  { nome: "Boro", numeroAtomico: 5 },
  { nome: "Carbono", numeroAtomico: 6 },
  { nome: "Nitrogênio", numeroAtomico: 7 },
  { nome: "Oxigênio", numeroAtomico: 8 },
  { nome: "Flúor", numeroAtomico: 9 },
  { nome: "Neônio", numeroAtomico: 10 },
  { nome: "Sódio", numeroAtomico: 11 },
  { nome: "Magnésio", numeroAtomico: 12 },
  { nome: "Alumínio", numeroAtomico: 13 },
  { nome: "Silício", numeroAtomico: 14 }
]

/* Questão 9
Crie uma função chamada "contarElementos" que recebe a lista "elementos" 
como argumento e retorna a quantidade total de elementos químicos na 
lista. Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function contarElementos(elementos){
  return elementos.length
}
export const resposta09 = contarElementos

/* Questão 10
Crie uma função chamada "buscarPorNumeroAtomico" que recebe dois 
argumentos: a lista "elementos" e um número atômico. A função deve 
retornar o objeto do elemento que possui aquele número atômico, 
ou null se não encontrar. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function buscarPorNumeroAtomico(elemento, atomico){
  let indi = 0
  while (indi < elemento.length) {
    if (elemento[indi].numeroAtomico === atomico) {
      return elemento[indi]
    }
    indi++;
  }
  return null
}
export const resposta10 = buscarPorNumeroAtomico

/* Questão 11
Crie uma função chamada "listarNomesElementos" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo 
apenas os nomes (strings) dos elementos, na mesma ordem. Envie na 
resposta a função criada, sem executá-la (basta enviar o 
nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function listarNomesElementos(elementos){
  let indic = 0
  let resultados = [];
  while (indic < elementos.length) {
      resultados.push(elementos[indic].nome);
    indic++; 
  }
  return resultados;
}
export const resposta11 = listarNomesElementos

/* Questão 12
Crie uma função chamada "elementosComNumeroPar" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo apenas 
os elementos (objetos completos) cujo número atômico é par. Envie na 
resposta a função criada, sem executá-la (basta enviar o nome da 
função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function elementosComNumeroPar(elementos){
  let indic = 0
  let resultados = [];
  while (indic < elementos.length) {
    if (elementos[indic].numeroAtomico % 2 === 0)
      {
      resultados.push(elementos[indic]);
    }
    indic++; 
  }
  return resultados;
}
export const resposta12 = elementosComNumeroPar