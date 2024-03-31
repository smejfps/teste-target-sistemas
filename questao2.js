// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

// Função principal para processar a entrada do usuário e verificar se pertence à sequência de Fibonacci
function verificarFibonacci(numero) {
    if (!isNaN(numero)) {
        if (isFibonacciNumber(numero)) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${numero} não pertence à sequência de Fibonacci.`);
        }
    } else {
        console.log('Entrada inválida. Por favor, informe um número válido.');
    }
}

// Número previamente definido no código (pode ser alterado conforme necessário)
const numero = 18;

// Chamar a função para verificar se o número pertence à sequência de Fibonacci
verificarFibonacci(numero);


//Neste programa, a função isFibonacciNumber verifica se um número pertence à sequência de Fibonacci.
//Em seguida, a função verificarFibonacci processa o número inserido e imprime uma mensagem indicando
//se ele pertence ou não à sequência de Fibonacci. O número pode ser definido previamente no código
//ou ser obtido através de qualquer outra entrada de preferência do usuário.