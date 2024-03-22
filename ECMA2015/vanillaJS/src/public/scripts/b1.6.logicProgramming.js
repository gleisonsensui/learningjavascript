
let login = 'user.lastname';
let senha = '123456';
// If...else if ... else
let loginTest = 'login_error';
let senhaTest = '12345'
if(login === loginTest && senha === senhaTest) {
    console.log(`Seja bem-vindo, ${login}`);
} else if(login !== loginTest && senha !== senhaTest) {
    console.log(`Login e senha invalidos. Verifique os dados informados.`);    
} else {
    console.log(`Login ou senha invalidos. Verifique os dados informados.`);
}


/**
 * Truth e Falsy
 */

if(!'') {
    console.log(`string vazio é Falsy or false`)
} 

if(![]) {
    console.log(` Array vazio é Falsy or false`)
} 

if(!{}) {
    console.log(`Objetio vazio é Falsy or false`)
} 

if(!0) {
    console.log(`Zero é Falsy or false`)
} 

if(!1) {
    console.log(`Um é Falsy or false`)
} 
if(!undefined) {
    console.log(`Undefined é Falsy or false`)
} 
if(!null) {
    console.log(`Null é Falsy or false`)
} 



/**
 * Operador ternario
 */

loginTest = 'login_error';
senhaTest = '12345'

login === loginTest && senha === senhaTest ? console.log(`Seja bem-vindo, ${login}`) : console.log(`Login ou senha invalidos. Verifique os dados informados.`);

loginTest = 'user.lastname';
senhaTest = '123456'
login === loginTest && senha === senhaTest ? console.log(`Seja bem-vindo, ${login}`) : console.log(`Login ou senha invalidos. Verifique os dados informados.`);



/**
 * Switch case
 */
loginTest = 'login_error';
senhaTest = '12345'

switch (login === loginTest && senha === senhaTest) {
    case true:
        console.log(`Seja bem-vindo, ${login}`) 
        break;
    case false: 
    console.log(`Login ou senha invalidos. Verifique os dados informados.`)
    break;
    
    default:
        console.log(`Valores invalidos`)
        break;
}






















