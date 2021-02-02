function escreveH3(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redireciona(){
    //window.open("https://www.nagem.com.br");
    window.location.href = "https://www.nagem.com.br";
}

function clickBotao(){
    //alert("Obrigado por clicar")
    escreveH3();
}

function trocarTexto(elemento){
    //document.getElementById("mousemove").innerHTML = "Passou o mouse";
    elemento.innerHTML = "Passou o mouse";
}

function voltarTexto(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function abrir(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
// Escopo de variáveis

var validar = 0;

function maiorIdade( idade ){
    var validar;
    if (idade >= 18){
        validar =  true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade:");

maiorIdade(idade);

console.log(validar);
*/

/*
function soma( n1, n2 ){
    return n1 + n2;
}

function setReplace( frase, nome, novo_nome ){
    return frase.replace("Japão","Brasil");
}

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));
*/

/*
var nome="Tibério Lima";
var idade=48;
var frase="Japão é o melhor time do mundo";
var frutas=["Maçã","Pêra","Laranja"];
var objFruta={nome:"maçã",cor:"vermelha"};
var dicObjFruta=[
                 {nome:"maçã",cor:"vermelha"},
                 {nome:"uva",cor:"roxa"}
                ];
var idade=prompt("Qual sua idade?");
var qtd=0;
var i;
var d = new Date();

alert(d);
alert(d.getDate());
alert(d.getMonth());
alert(d.getDay());

for(i=0;i<=5;i++){
    alert(i);
}

while ( qtd < 5 ){
    console.log(qtd);
    qtd=qtd+1;
}

var qtd=0;
while ( qtd < 5 ){
    console.log(qtd);
    qtd++;
}

if (idade>=18){
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade");
}

alert("Hello World Main");
alert("Bem vindo " + nome + ". Sua idade: " + idade + " anos.");

console.log(frase);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log(frutas);
console.log(frutas[0]);

frutas.push("Uva");

console.log(frutas);

frutas.pop();
frutas.pop();

console.log(frutas);
console.log("Quantidade de frutas: " + frutas.length);

console.log(frutas.reverse());
console.log(frutas.toString());
console.log(frutas.toString()[0]);
console.log(frutas.join(" -     "));

console.log(objFruta);
console.log(objFruta.nome);
console.log(dicObjFruta);
console.log(dicObjFruta[1].nome);


console.log(frutas);
frutas.pop("Pêra");
console.log(frutas);
*/