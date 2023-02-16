let phrase = findLongestWord("Hello world123 567"); // recebe a string

function findLongestWord(phrase){
    var size = 0;
    var longWord = "";
    var noSpace = phrase.split(" ");// tendo como padrão: espaço, usa o split para retornar apenas as palavras sem os espaços

    for (let i = 0; i < noSpace.length; i++) {
        let sizeWord = noSpace[i].length; // recebe o tamanho da palavra que está na posição que o for está passando
        const re = new RegExp("\\d"); // recebe um objeto regex de dígitos
        
        if(!re.test(noSpace[i])){ // verifica se a string não tem dígitos (regex) 
            if(sizeWord > size){ // se a palavra for maior que o valor size (inicial 0)
                size = sizeWord; // size recebe o valor novo
                longWord = noSpace[i]; // recebe a palavra na posição que o for está passando
            }
        }
    }
    console.log(longWord);
}
