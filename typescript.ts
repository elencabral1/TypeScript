// Exercicio-01 
let cidade: string = 'São Caetano do Sul';
    console.log(cidade);


// Exercicio-02 
interface Carro {
    marca: string;
    ano: number;
}
let meuCarro: Carro = { marca: "BMW", ano: 2023 };
    console.log(`Carro marca ${meuCarro.marca}, ano ${meuCarro.ano}`);


// Exercicio-03
interface Animal {
    emitirSom(): string;
}
let cachorro: Animal = {
    emitirSom() {
        return "Au Au";
    }
};
console.log(cachorro.emitirSom());


// Exercicio-04
type VerificarIdade = (idade: number) => boolean;
let verificarMaioridade18: VerificarIdade = (idade) => idade > 18;
let verificarMaioridade21: VerificarIdade = (idade) => idade > 21;

console.log(verificarMaioridade18(18));
console.log(verificarMaioridade21(21));


// Exercicio-05
function saudacao (nome: string, sobrenome?: string): string {
    if (sobrenome){
        return `Olá, ${nome} ${sobrenome}`;
    }
    else{
        return `Olá, ${nome}`;
    }
}
    console.log(saudacao('Elen'))
    console.log(saudacao('Elen', 'Cabral'))
