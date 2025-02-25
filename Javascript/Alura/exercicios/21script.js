/* 
esta função isola a responsabilidade de converter cada elemento do DOM em um convidado.
Esse convidado é um objeto JavaScript com as propriedade nome e idade. 
Se alguém em nosso código quiser ler facilmente a lista de convidados, basta chamar esse método que retornará uma lista de objetos já mastigada para se trabalhar. 
*/

function criaListaDeConvidados() {

    var itens = document.querySelectorAll('.convidado');

    var convidados = [];

    for(var i = 0; i < itens.length; i++) {

        var convidado = {
            nome:  itens[i].querySelector('.nome').textContent,
            idade: parseInt(itens[i].querySelector('.idade').textContent)
        };

        convidados.push(convidado);
    }

    return convidados;
}

/* 
essa função tem como responsabilidade extrair o total da lista de convidados retornando-o para quem chamá-la. 
Isso é interessante, porque quem receber o resultado pode querer exibir na tela com um `alert`,
`console.log` ou até mesmo atualizando essa informação em algum elemento da página.
*/

function calculaTotalDasIdades(convidados) {

    var total = 0;

    for(var i = 0; i < convidados.length; i++) {

        total+=convidados[i].idade;
    }

    return total;

}

// essa função tem como responsabilidade receber um total qualquer e exibí-lo no HTML 

function exibeTotalDasIdades(total) {
    document.querySelector('.total').textContent = total;    
}

/* 
usando nossas funções. Veja que uma pessoa fora do universo da programação 
está mais inclinada a entender o que essas instruções fazem devido aos nomes autoexplicativos. 
*/

var convidados = criaListaDeConvidados();
var totalDasIdades = calculaTotalDasIdades(convidados);
exibeTotalDasIdades(totalDasIdades);





