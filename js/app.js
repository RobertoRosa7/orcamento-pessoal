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
class Db{
	/*
	* Verificação do id, se já existe
	*/
	constructor(){
		//colhendo valor do id no local storage
		let id = localStorage.getItem('id');

		//verificando e passando valor 0 para null
		if(id === null){
			localStorage.setItem('id', 0);
		}
	}
	/*
	* Função get ID: para não sobreescrever os índice quando for inserído novos valores no formulários
	*/
	getProximoID(){
		let getProximoID = localStorage.getItem('id');
		//adicionando id 
		return parseInt(getProximoID) + 1;
	}
	/* Função gravar dados no local storage
	* param: recebe um objeto literal que terá que ser transformado em JSON
	*/
	gravar(d){
		/*
		* Acessando o objeto de local storage, com a função setItem que um dos recursos de local storage podemos
		* adicionar os parâmetros, que são dois obrigatórios para o setItem.
		* JSON.stringfy() assim poderá converter um objeto literal para formato JSON
		*/
		let id = this.getProximoID();
		localStorage.setItem(id, JSON.stringify(d));

		//Atualizando o valor do id
		localStorage.setItem('id', id);
	}
}
let db = new Db();
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
	//console.log(despesa);
	db.gravar(despesa);
}
