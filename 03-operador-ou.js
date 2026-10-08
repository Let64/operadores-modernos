//=================================================================
//3. OPERADOR OU / OR (\\)
//Retorna o primeiro valor Truthy. Se for Falsy, pega o proximo.
//Valores Falsy: false, 0, "", null, undefined, NaN
//==================================================================

console.log("\n==3. Operador OR (||) ===");

//Exemplo 1: Retorna o primeiro valor verdadeiro (truthy)
console.log("Nome preenchido:", "Davi" || "Visitante"); //Davi
console.log("Nome nulo:", null || "Visitante");// Visitante

//Exemplo2: Comportamento com 0 e string vazia (valores falsy)
// O || considere e "" como falsos e substitui pelo padrao:

const pontuacao = 0;
console.log("0 com || (troca por padrao):", apelido || "Anonimo");// "Anonimo"

const apelido = ""
console.log("String vazia com || (troca por padrao):", apelido || "Anonimo");

//Exemplo 3: Comparacao direta entre || e ?? com numero 0
console.log("0 com || :", 0 || 10)// 10(porque é falsy)
console.log("0 com ?? :", 0 ?? 10)// 0 (porque 0 não é null nem undefined)