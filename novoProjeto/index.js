"use strict";
exports.__esModule = true;
//"Controller"
var Pessoa = /** @class */ (function () {
    function Pessoa(id, nome) {
        this.pessoa = {};
        this.pessoa.id = id;
        this.pessoa.nome = nome;
        //this.pessoa.enderecos = enderecos;
    }
    return Pessoa;
}());
var Endereco = /** @class */ (function () {
    function Endereco(id, numero) {
        this.endereco = {};
        this.endereco.id = id;
        this.endereco.numero = numero;
    }
    return Endereco;
}());
var testePessoa1 = new Pessoa(1, "Raissa");
console.log(testePessoa1);
var testePessoa2 = new Pessoa(2, "Elizete");
console.log(testePessoa2);
var testePessoa3 = new Pessoa(3, "Juliana");
console.log(testePessoa3);
var testePessoa4 = new Pessoa(4, "Elton");
console.log(testePessoa4);
var testePessoa5 = new Pessoa(5, "Laudir");
console.log(testePessoa5);
var testePessoa6 = new Pessoa(6, "Vinicius");
console.log(testePessoa6);
var testePessoa7 = new Pessoa(7, "Mirely");
console.log(testePessoa7);
var testePessoa8 = new Pessoa(8, "Mileny");
console.log(testePessoa8);
var testePessoa9 = new Pessoa(9, "Kadrisy");
console.log(testePessoa9);
var testePessoa10 = new Pessoa(10, "Luiz");
console.log(testePessoa10);
