class Banco{
   constructor(nome, cnpj, telefone, agencia) {
    this.nome=nome;
    this.cnpj=cnpj;
    this.telefone=telefone;
    this.agencia=agencia;
   } 
}

let B1 = new Banco ("Next", 12642375116, 40028922, 863)
let B2 = new Banco ("Nubank", 12341245115, 32186542, 167)
let B3 = new Banco ("C6 Bank", 15268412347, 30020478, 356)
let B4 = new Banco ("Will Bank", 98753115647, 33989531, 786)

console.log (`${B1.nome} tem ${B1.cnpj} como CNPJ ${B1.telefone} como telefone e tem ${B1.agencia} como agência.`)
console.log (`${B2.nome} tem ${B2.cnpj} como CNPJ ${B2.telefone} como telefone e tem ${B2.agencia} como agência.`)
console.log (`${B3.nome} tem ${B3.cnpj} como CNPJ ${B3.telefone} como telefone e tem ${B3.agencia} como agência.`)
console.log (`${B4.nome} tem ${B4.cnpj} como CNPJ ${B4.telefone} como telefone e tem ${B4.agencia} como agência.`)