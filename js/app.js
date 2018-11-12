/*
* Criando a classe de despesa para o Objeto
* Recuperando os dados do formulário para inserção no atributos do objeto
*/
class Despesas{
	constructor(ano,mes,dia,tipo,descricao,valor){
		this.ano = ano;
		this.mes = mes;
		this.dia = dia;
		this.tipo = tipo;
		this.descricao = descricao;
		this.valor = valor;
	}
}

function cadastrarDespesas(){
	/* Há duas forma de recuperar os valores do elementos HTML
	* primeiro deve armazenar esses valores em uma variável, para ser reutilizada depois, em seguida deve colocar
	* o atruibuto value para recuperar os valores.
	* 
	* Para uma boa prática no decorrer do código é melhor usar a recuperação do valor ano.value
	*/
	let ano = document.getElementById('ano');
	let mes = document.getElementById('mes');
	let dia = document.getElementById('dia');
	let tipo = document.getElementById('tipo');
	let descricao = document.getElementById('descricao');
	let valor = document.getElementById('valor');

	//Debug
	//console.log(ano.value);

	//Instanciação o Objeto com os parâmetro
	let despesa = new Despesas(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value);

	//Debug
	console.log(despesa);
}
function gravar(){
	
}