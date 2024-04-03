//objetos
/*
Podemos definir objetos contendo as propriedades que desejarmos, 
sejam elas primitivas ou não. Note que valores do tipo objeto 
são definidos entre chaves, conforme exemplo abaixo. 
Propriedades também podem ser adicionadas ou removidas de um 
objeto a qualquer momento. 
*/
var aluno1 = {
    ra: 43578,
    nome: 'Jose da Silva',
    curso: 'Engenharia de Software',
    ativo: true
};

console.log(aluno1.ra);
console.log(aluno1.nome);
console.log(aluno1.curso);
console.log(aluno1.ativo);

//Por ser dinamico, podemos criar novos campos ou excluir campos quando quisermos

aluno1.datanasc = '17/12/2005';

console.log(aluno1.datanasc);

delete aluno1.ativo;

console.log(aluno1.ativo);