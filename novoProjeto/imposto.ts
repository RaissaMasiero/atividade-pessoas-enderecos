interface IFuncionario{
    nome: string;
    salarioBruto: number;
    totalHoraExtra: number;
    faixaDescontoINSS: number;
    valorDescontadoINSS: number;
    faixaDescontoIR: number;
    valorDescontadoIR: number;
    salarioLiquido: number;
}

class Funcionario{

    funcionario: IFuncionario = {} as IFuncionario;

    constructor(){}

    setNome(nome: string){
        this.funcionario.nome = nome;
    }

    setSalarioBruto(salarioBruto: number){
        this.funcionario.salarioBruto = salarioBruto;
    }

    setTotalHoraExtra(totalHoraExtra: number){
        this.funcionario.totalHoraExtra = totalHoraExtra;
    }

    somaVencimentos(){
        return this.funcionario.salarioBruto + this.funcionario.totalHoraExtra;
    }

    descontaValorDoINSS(valorVencimentos: number){
        if(valorVencimentos <= 1100){
           this.funcionario.faixaDescontoINSS = 7.5;
           this.funcionario.valorDescontadoINSS = valorVencimentos * 0.075;

        } else if((valorVencimentos >= 1100.01) && (valorVencimentos <= 2203.48)){
            this.funcionario.faixaDescontoINSS = 9.0;
            this.funcionario.valorDescontadoINSS = valorVencimentos * 0.09;

        } else if((valorVencimentos >= 2203.49) && (valorVencimentos <= 3305.22)){
            this.funcionario.faixaDescontoINSS = 12.0;
            this.funcionario.valorDescontadoINSS = valorVencimentos * 0.12;

        } else if((valorVencimentos >= 3305.23) && (valorVencimentos <= 6433.57)){
            this.funcionario.faixaDescontoINSS = 14.0;
            this.funcionario.valorDescontadoINSS = valorVencimentos * 0.14;

        } else {
            this.funcionario.faixaDescontoINSS = 14.0;
            this.funcionario.valorDescontadoINSS = valorVencimentos * 0.14;
        }

        return this.funcionario.valorDescontadoINSS;
    }

    descontaIR(salario: number){
        if(salario <= 1903.98){
           this.funcionario.faixaDescontoIR = 0;
           this.funcionario.valorDescontadoIR = 0;

        } else if((salario >= 1903.99) && (salario <= 2826.65)){
            this.funcionario.faixaDescontoIR = 7.5;
            this.funcionario.valorDescontadoIR = (salario * 0.075) - 142.80;

        } else if((salario >= 2826.66) && (salario <= 3751.05)){
            this.funcionario.faixaDescontoIR = 15.00;
            this.funcionario.valorDescontadoIR = (salario * 0.15) - 354.80;

        } else if((salario >= 3751.06) && (salario <= 4664.68)){
            this.funcionario.faixaDescontoIR = 22.50;
            this.funcionario.valorDescontadoIR = (salario * 0.225) - 636.13;

        } else {
            this.funcionario.faixaDescontoIR = 27.50;
            this.funcionario.valorDescontadoIR = (salario * 0.275) - 869.36;
        }

        return this.funcionario.valorDescontadoIR;
    }

    calculaSalarioLiquido(valorVencimentos: number, valorDescontadoINSS: number, valorDescontadoIR: number, 
                          totalHoraExtra: number){

        return this.funcionario.salarioLiquido = valorVencimentos - valorDescontadoINSS - valorDescontadoIR + 
                                                 totalHoraExtra;

    }
}

const funcionario = new Funcionario();

function main(nome: any, salarioBruto: any, totalHoraExtra: any) {
    
    nome = funcionario.setNome("Raissa");
    salarioBruto = funcionario.setSalarioBruto(3000);
    totalHoraExtra = funcionario.setTotalHoraExtra(5);

    let somaVencimentos = funcionario.somaVencimentos();
    // console.log(somaVencimentos);
    
    console.log("Cálculo do INSS: " + funcionario.descontaValorDoINSS(somaVencimentos));  
    console.log("Cálculo do Imposto de Renda: " + funcionario.descontaIR(somaVencimentos));
    console.log("Cálculo do Salário Líquido: "  + 
    funcionario.calculaSalarioLiquido(somaVencimentos, funcionario.funcionario.valorDescontadoINSS,
                                      funcionario.funcionario.valorDescontadoIR, 
                                      funcionario.funcionario.totalHoraExtra)); 

    console.log(funcionario); 
}

main(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
