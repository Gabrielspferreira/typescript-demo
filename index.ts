// Import stylesheets
import './style.css';

console.log('Olá, mundo');

let x: number = 10;
console.log('O valor de x é: ' + x);

let texto: string = `Testando um texto com concatenação do número ${x}`;
console.log(texto);

console.log('Verificando condições');
if (x % 2 == 0) {
  console.log(`${x} é par`);
} else {
  console.log(`${x} é impar`);
}

console.log('Laços de repetição');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('Varrendo um array com laço');
let numbers: number[] = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('Varrendo um array com for each');
numbers.forEach((n) => {
  console.log(n);
});

//tupla
let eu = ['Gabriel', 21];
console.log(`Meu nome é ${eu[0]} e tenho ${eu[1]} anos.`);

//enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let color: Color = Color.Green;

//any
let semCerteza: any = 4;
semCerteza = 'Acho que sou um texto';

//functions
function getSoma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(`A soma de 2 e 3 é ${getSoma(2,3)}`)
function getNomeCompleto(pessoa: {nome: string, sobrenome: string}) : string {
  return `${pessoa.nome} ${pessoa.sobrenome}`}
console.log(`Meu nome completo é ${getNomeCompleto({nome: 'Gabriel', sobrenome:'Santos'})}`);