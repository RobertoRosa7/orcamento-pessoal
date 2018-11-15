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
	validarDados(){
		/* necessário recuperar todos os dados do formulário, percorrendo cada um
		* para percorrer os valores dos atruibuto da classe, deve usar this[i], assim o this que faz referência
		* a este objeto será percorrido os seus valores.
		*/
		if(this.ano == undefined || this.ano == '' || this.ano == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-ano').className = 'animate';
				document.getElementById('ano').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-ano').className = 'opacity-0';
					document.getElementById('ano').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}else if(this.mes == undefined || this.mes == '' || this.mes == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-mes').className = 'animate';
				document.getElementById('mes').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-mes').className = 'opacity-0';
					document.getElementById('mes').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}else if(this.dia == undefined || this.dia == '' || this.dia == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-dia').className = 'animate';
				document.getElementById('dia').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-dia').className = 'opacity-0';
					document.getElementById('dia').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}else if(this.tipo == undefined || this.tipo == '' || this.tipo == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-tipo').className = 'animate';
				document.getElementById('tipo').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-tipo').className = 'opacity-0';
					document.getElementById('tipo').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}else if(this.descricao == undefined || this.descricao == '' || this.descricao == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-descricao').className = 'animate';
				document.getElementById('descricao').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-descricao').className = 'opacity-0';
					document.getElementById('descricao').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}else if(this.valor == undefined || this.valor == '' || this.valor == null){
			var i = 3;
			var x = setInterval(function(){
				document.getElementById('notify-valor').className = 'animate';
				document.getElementById('valor').className = 'border-danger form-control';
				i--;
				if(i === 0){
					document.getElementById('notify-valor').className = 'opacity-0';
					document.getElementById('valor').className = 'opacity-0 form-control';
					clearInterval(x);
				}
			},2000)
		}
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false;
			}
	 	}
		return true;
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
	/*
	* Criar um laço de repetição para recuperar os id's que estão no local storage, sabendo que existe um proximo
	* id que será referência para tomada de decisão.
	*/
	recuperarTodosRegistros(){
		/*
		* Criar um array de despesas para conter os dados convertido pelo JASON do Local Storage
		*/
		let despesas = new Array();

		//Armazenar o valor do id em uma variável
		let id = localStorage.getItem('id');

		/*
		* Recuperar todas as despesas
		* laço para percorrer toda a lista dos id's, iniciando a parte de 1 e se i for menor ou igual ao id então
		* acrescente mais um em i 
		*/
		for(let i = 1; i <= id; i++){

			/* 
			* Recuperando as despesas
			* Use JASON.parse() para transformar os dados string em objetos literais antes de seram armazenadas
			* na variável
			*/
			let despesa = JSON.parse(localStorage.getItem(i));

			/*
			* Verificar se existe a possibilidade de haver índices removídos ou null, vamos pular esses índices
			* Usando o operador continue, desconsidera tudo que for depois dele e volta para o início do laço
			*/
			if(despesa === null){
				continue
			}
			
			despesas.push(despesa);

			//Debug
			//console.log(despesas);
		}
		return despesas;
	}
	pesquisar(despesa){

		/*
		* Trazer o retorno da função recuperarDespesas
		*/
		let despesasFiltradas = new Array();
		despesasFiltradas = this.recuperarTodosRegistros();

		/*
		* Realizando o filtro, com base na recuperação de dados e fazendo a comparação conforme os dados são
		* inseridos pelo usuário e seu retorno deve ser true ou false; se for diferente de vazio
		*/
		//ano
		if(despesa.ano != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano);
		}
		//mes
		if(despesa.mes != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes);
		}

		//dia
		if(despesa.dia != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia);
		}

		//tipo
		if(despesa.tipo != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo);
		}

		//descricao
		if(despesa.descricao != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao);
		}
		//valor
		if(despesa.valor != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor);
		}
		
		//Debug
		//console.log(despesasFiltradas);
		return despesasFiltradas;
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

	if(despesa.validarDados()){
	
		db.gravar(despesa);
		document.getElementById('titleModal').className = 'text-success';
		document.getElementById('titleModal').innerHTML = 'Registro inserido com sucesso!';
		document.getElementById('paragrafoSucesso').innerHTML = 'Despesas cadastrado com sucesso!';
		document.getElementById('botaoModal').className = 'btn btn-success';
		document.getElementById('botaoModal').innerHTML = 'Voltar';
		$('#modalRegistrarDespesas').modal('show');

		//Limpar dados do formulário
		ano.value = '';
		mes.value = '';
		dia.value = '';
		tipo.value = '';
		descricao.value = '';
		valor.value = '';
	}else{
		//dialog de erro
		$('#modalRegistrarDespesas').modal('show');
		document.getElementById('titleModal').className = 'text-danger';
		document.getElementById('titleModal').innerHTML = 'Erro: Verifique os campos abaixo!';
		document.getElementById('paragrafoSucesso').innerHTML = 'Não foi possível cadastrar sua despesa!';
		document.getElementById('botaoModal').className = 'btn btn-danger';
		document.getElementById('botaoModal').innerHTML = 'Voltar e Verificar';
	}
	//Debug
	//console.log(despesa);
}
function extrairString(){
	let char = document.getElementById('dia').value;
	let desc = document.getElementById('descricao').value;
	let valor = document.getElementById('valor').value;

	if(char.length > '2'){
		document.getElementById('dia').className = 'form-control form-custom-invalid';
	}else{
		document.getElementById('dia').className = 'form-control form-custom-valid';
	}

	if(desc.length < '3'){
		document.getElementById('descricao').className = 'form-control form-custom-invalid';
	}else{
		document.getElementById('descricao').className = 'form-control form-custom-valid';
	}
	valor = parseFloat(valor);
}
function changeBlur(){
	document.getElementById('dia').className = 'form-control';
	document.getElementById('descricao').className = 'form-control';
}
function changeFocus(){

}
/*
* Carregar a lista sempre que a página consulta for aberta ou atualizada, portanto, essa função deve ficar na
* página de consulta.
* Aqui é chamado o método para recuperar os registros dentro do web storage, este método ficar na classe Db
*/
function carregarListaDespesas(){
	let despesas = new Array();
	
	despesas = db.recuperarTodosRegistros();

	// Variável para referência de lista despesas na tabela - selecionando elemento tbody da tabela
	let listaDespesas = document.getElementById('listaDespesas');

	/* percorrer cada despesas do array de forma dinâmica, usando uma propriedade foreach com um função de callbak
	*  necessária para o uso do foreach.
	*/
	despesas.forEach(function(d){

		//criando a linha (tr)
		let linha = listaDespesas.insertRow();

		//criando a celula de dados da tabela (td)
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

		//Ajustar o tipo
		switch(d.tipo){
			case '1': d.tipo = 'Alimentação';
				break;
			case '2': d.tipo = 'Educação';
				break;
			case '3': d.tipo = 'Laser';
				break;
			case '4': d.tipo = 'Saúde';
				break;
			case '5': d.tipo = 'Transporte';
				break;
		}
		linha.insertCell(1).innerHTML = d.tipo;
		linha.insertCell(2).innerHTML = d.descricao;
		linha.insertCell(3).innerHTML = d.valor;

		//Debug
		//console.log(d);
	})
	//Debug
	//console.log(despesas);
}
function pesquisarDespesas(){
	let ano = document.getElementById('ano');
	let mes = document.getElementById('mes');
	let dia = document.getElementById('dia');
	let tipo = document.getElementById('tipo');
	let descricao = document.getElementById('descricao');
	let valor = document.getElementById('valor');


	let despesa = new Despesas(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value);

	//objeto passado como parâmetro para a função pesquisar, encapsular em variável para ter um retorno
	let despesas = db.pesquisar(despesa);

	// Variável para referência de lista despesas na tabela - selecionando elemento tbody da tabela
	let listaDespesas = document.getElementById('listaDespesas');

	/* percorrer cada despesas do array de forma dinâmica, usando uma propriedade foreach com um função de callbak
	*  necessária para o uso do foreach.
	*/
	despesas.forEach(function(d){

		//criando a linha (tr)
		let linha = listaDespesas.insertRow();

		//criando a celula de dados da tabela (td)
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

		//Ajustar o tipo
		switch(d.tipo){
			case '1': d.tipo = 'Alimentação';
				break;
			case '2': d.tipo = 'Educação';
				break;
			case '3': d.tipo = 'Laser';
				break;
			case '4': d.tipo = 'Saúde';
				break;
			case '5': d.tipo = 'Transporte';
				break;
		}
		linha.insertCell(1).innerHTML = d.tipo;
		linha.insertCell(2).innerHTML = d.descricao;
		linha.insertCell(3).innerHTML = d.valor;

		//Debug
		//console.log(d);
	})
	//Debug
	//console.log(despesas);
}