const setTimeoutTest = (pedido, resolve, reject) => {setTimeout(() => {
    pedido === 'pizza' ? reject(`Não temos o seu pedido: [${pedido}]`) : resolve(`Chegou o seu pedido [${pedido}]`);
    console.log(returnConsole());
}, 5000)};

const returnConsole = () => {
  return "SetTimeout Executado com sucesso!!!!";
};

//  Promisses
const pedido = (pedido) => {
  return new Promise((resolve, reject) => {
    try {
        setTimeoutTest(pedido, resolve, reject);
    } catch(error) {
        throw error;
    }
  });
};

pedido("pizza").then(res => console.log(res)).catch(error => console.log(error))


const reservarPedido = async () => {

    try {
        console.log(await pedido('Macarronada'))
        console.log(await pedido('Feijoada'))
        console.log(await pedido('Sushi'))
        console.log(await pedido('pizza'))
    } catch (error) {
        console.log(error);
    }
}

reservarPedido()

const bradock = new Promise((resolve, reject) => {
    return resolve(fetch(`https://api.chucknorris.io/jokes/random`).then(res => res.json()).then(json => json.value))
})

const storeBuy = new Promise((resolve, reject) => {
    resolve(fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json()));
})

Promise.race([bradock, storeBuy]).then(res => console.log(res))
Promise.all([bradock, storeBuy]).then(res => console.log(res))
Promise.allSettled([bradock, storeBuy]).then(res => console.log(res))



/**
 * JavaScript assíncrono refere-se à capacidade do JavaScript de executar tarefas de forma não bloqueante, permitindo que o código continue a ser executado enquanto aguarda a conclusão de determinadas operações. 
 * Isso é especialmente importante quando se lida com tarefas demoradas, como chamadas de rede, operações de leitura/gravação em bancos de dados, manipulação de arquivos grandes, entre outras.
 * Ao contrário da natureza síncrona do JavaScript, em que cada linha de código é executada sequencialmente, o JavaScript assíncrono permite que o código continue a ser executado, mesmo que uma tarefa esteja em andamento. 
 * Isso é fundamental para garantir que a interface do usuário permaneça responsiva e que outras tarefas possam ser realizadas enquanto a tarefa assíncrona é processada em segundo plano.
 * Existem várias técnicas para trabalhar com JavaScript assíncrono:
 * Callbacks: Os callbacks são funções que são passadas como argumentos para serem executadas quando uma tarefa assíncrona é concluída. 
 * Essa abordagem permite que o código assíncrono controle o fluxo de execução, chamando o callback apropriado quando a tarefa é finalizada.
 * Promises: As Promises são objetos que representam a conclusão (ou falha) de uma tarefa assíncrona. 
 * Elas fornecem uma sintaxe mais limpa e estruturada para lidar com código assíncrono, permitindo encadear chamadas e tratar erros de forma mais eficiente.
 * Async/Await: O async/await é uma forma mais recente e mais legível de lidar com tarefas assíncronas em JavaScript. 
 * Essa abordagem utiliza as palavras-chave async e await para indicar funções assíncronas e pausar a execução até que uma Promise seja resolvida.
 * Essas técnicas de JavaScript assíncrono são amplamente utilizadas para lidar com operações de rede, interações com bancos de dados, animações, manipulação de arquivos, entre outras tarefas que podem levar tempo 
 * para serem concluídas. Ao utilizar essas abordagens, é possível melhorar a eficiência, a responsividade e a experiência do usuário em aplicações web e outras aplicações baseadas em JavaScript.
 */

