//===========================================
//1. OPTIONAL CHAINING (?.)
// EVITA ERRO (tYPEeRROR) ao acessar propriedades inexistentes.
// Retorna 'undefined' com segurança em vez de quebrar o programa

console.log("\n===1. Optionak Chaining (? .) ===");

//Exemplo 1: Sem o operador ?., acessar propriedade de undefined gera erro
const  alunoSemEndereco = {nome: "Bruno"};

//Tentar: alunosSemEndereco.endereco.cidade causaria TypeError.
//Com ? ., o acesso e seguro e retorna apenas 'undefined':
console.log("Cidade de Bruno (seguro cpm ?.):", alunoSemEndereco.endereco?.cidade);

//Exemplo 2: Quando a propriedade existe, acessa normalmente
const alunoComEndereco = {
    nome: 'Ana',
    endereco: {cidade:"São Paulo"}
};
console.log("Cidade de Ana:", alunoComEndereco.endereco?.cidade);

//Exemplo 3: Uso seguro com Arrays
const usuarios = [{nome: "Carla"}];
const usuariosVazios = [];

console.log("Primeiro da lista:", usuarios[0]?.nome);//

console.log("Primeiroda lista vazia:", usuariosVazios[0]?.nome);
//undefined (sem travar)
