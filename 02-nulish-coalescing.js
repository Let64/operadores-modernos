//=================================
// 2. NULLISH COALESCING (??)
//Define valor padrao APENAS se for 'null' ou 'undefine'
//Preserva valores validos como 0, false e string vazia ("")
//=================================

console.log("\n=== 2. Nullish Coalescing (??) ===");

//Exemplo 1: Substitui null ou indefined por valor padrao amigavel
const tema = null;
console.log("Tema:", tema ?? "claro"); //"CLARO"

const telefone = undefinde;
console.log("Telefone:", telefone ?? "Nao informado"); //"Nao informado"

//Exemplo 2: Preserva o numero 0, false e "" (string vazia)
const tentativas = 0;
console.log("Tentativas (preserva 0):, tentativas ?? 3"); //0

const apelido = "";
console.log("Apelido (preserva string vazia):", apelido ?? "Visitante");//""

const aceitouTermos = false;
console.log("Termos (preserva false):", aceitouTermos ?? true); //false