//"model"
export interface IPessoa{
    id: number;
    nome: string;
    idade: number;
    enderecos?: IEndereco[];
}

export interface IEndereco{
    id: number;
    logradouro: string;
    numero: number;
    complemento?: string;
}

//"Controller"
class Pessoa{

    pessoa: IPessoa = {} as IPessoa;

    constructor(id: number, nome: string, /*enderecos: IEndereco[] */){
        this.pessoa.id = id;
        this.pessoa.nome = nome;
        //this.pessoa.enderecos = enderecos;
    } 
}

class Endereco {

    endereco: IEndereco = {} as IEndereco;

    constructor(id: number, numero: number) {
        this.endereco.id = id;
        this.endereco.numero = numero;
    }
}

const testePessoa1 = new Pessoa(1, "Raissa");
console.log(testePessoa1);
const testePessoa2: Pessoa = new Pessoa(2, "Elizete");
console.log(testePessoa2);
const testePessoa3: Pessoa = new Pessoa(3, "Juliana");
console.log(testePessoa3);
const testePessoa4: Pessoa = new Pessoa(4, "Elton");
console.log(testePessoa4);
const testePessoa5: Pessoa = new Pessoa(5, "Laudir");
console.log(testePessoa5);
const testePessoa6: Pessoa = new Pessoa(6, "Vinicius");
console.log(testePessoa6);
const testePessoa7: Pessoa = new Pessoa(7, "Mirely");
console.log(testePessoa7);
const testePessoa8: Pessoa = new Pessoa(8, "Mileny");
console.log(testePessoa8);
const testePessoa9: Pessoa = new Pessoa(9, "Kadrisy");
console.log(testePessoa9);
const testePessoa10: Pessoa = new Pessoa(10, "Luiz");
console.log(testePessoa10);
