const lista = [
	{
		name: 'sabao em po',
		preco: 30,
	},

	{
		name: 'cereal',
		preco: 12,
	},

	{
		name: 'toalha',
		preco: 30,
	}
];

const SaldoDisponivel = 100;

function CalculaSaldo(SaldoDisponivel, lista){
	return lista.reduce(function(prev, current, index){
		console.log("rododa", index + 1);
		console.log({prev});
		console.log({current});

		return prev - current.preco;
	}, SaldoDisponivel);
}

console.log(CalculaSaldo(SaldoDisponivel, lista));
