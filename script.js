var mainConteiner = document.getElementById ('app'),
    botaoAdd = document.getElementById('botao+'),
    lista = document.querySelector('div ul'),
    botaoClean = document.getElementById('clean'),
    todos = JSON.parse(localStorage.getItem('list')) || [];

botaoAdd.onclick = function () {
    addNote();
}

botaoClean.onclick = function(){
    deleteAll();
}

for (todo of todos){
    var x = '';
    x = todo;
    addNote(x);
}

function addNote(text) {
    var item = document.createElement('li');
    
    var botaoLess = document.createElement('a');
    botaoLess.setAttribute ('id', 'botao-');
    botaoLess.setAttribute ('href', '#');
    botaoLess.setAttribute ('style', 'font-size: 20px; font-weight: normal')
    var botaoTexto = document.createTextNode('Feito!');
    botaoLess.appendChild(botaoTexto);
    
    var textBox = document.querySelector('input');
    
    if (text){
        var textInf = text;
        var texto = document.createTextNode(textInf + ' ');
    } else {
        var textInf = textBox.value;
        if (textInf == ''){
            return window.alert('Insira uma tarefa válida!');
        }
        var texto = document.createTextNode(textInf + ' ');
        todos.push(textInf);
        salvarStorage();
    }

    botaoLess.onclick = function(){
        var y;
        y = todos.indexOf(textInf);
        lista.removeChild(item);
        todos.splice(y, 1);
        salvarStorage();
    }

    item.appendChild(texto);
    item.appendChild(botaoLess);
    item.setAttribute('style', 'font-size: 30px; font-weight: bold');
    lista.appendChild(item);

    textBox.value = '';
}   

function deleteAll(){
    while(todos.length > 0) {
        todos.pop();
    }
    while(lista.childElementCount > 0){
        lista.removeChild(lista.lastChild);
    }
    salvarStorage();
}

function salvarStorage(){
    localStorage.setItem('list', JSON.stringify(todos));
}
