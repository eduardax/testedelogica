let string = findIntersections(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]); // recebe a string com 2 arrrays

function findIntersections(string) { 
    let noSpace1 = string[0].split(", ");// Tendo como padrão: vírgula e espaço, usa o split para retornar apenas os números do primeiro array
    let noSpace2 = string[1].split(", ");// Tendo como padrão: vírgula e espaço, usa o split para retornar apenas os números do segundo array
    console.log(noSpace1);
    console.log(noSpace2);
    
    let numbers = noSpace1.filter( same => noSpace2.includes( same )); //retorna valores no callback e verifica quais deles estão no segundo array
    
    let numbersAsc  = numbers.sort(function(a, b) { //aplicando sort com a função que realiza a comparação entre a e b, 
        return a - b;                             //colocando em ordem crescente
    });

    console.log(numbersAsc);
}

