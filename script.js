
//declaração de mensagem
const mensagem = [
	{
		from: "João",
		to: "Todos",
		text: "entra na sala...",
		type: "status",
		time: "08:01:17"
	},
	{
		from: "João",
		to: "Todos",
		text: "Bom dia",
		type: "message",
		time: "08:02:50"
	},
];



//Adicionar mensagens
let colocar = document.querySelector('.conversa');
//template para mensagem geral
colocar.innerHTML += `<li class='general_message'><span class='time'>(${mensagem[1].time})</span> <span class='bold'>${mensagem[1].from}</span> para <span class='bold'>${mensagem[1].to}</span>:  ${mensagem[1].text}</li>`;
//template para mensagem privada
colocar.innerHTML += `<li class='general_message'><span class='time'>(${mensagem[1].time})</span> <span class='bold'>${mensagem[1].from}</span> reservadamente para <span class='bold'>${mensagem[1].to}</span>:  ${mensagem[1].text}</li>`;
//template para log
colocar.innerHTML += `<li class='general_message'><span class='time'>(${mensagem[0].time})</span> <span class='bold'>${mensagem[0].from}</span>:  ${mensagem[0].text}</li>`;