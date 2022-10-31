
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
let msg, info, mensagensAntigas, contador=0;

const colocar = document.querySelector('.conversa');


let teste ;

temporizador();

function temporizador(){
    teste = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    teste.then(adicionarMensagem);
    teste.then(console.log (teste));
}

//Adicionar mensagens
function adicionarMensagem (mensagensRecebidas){
    info = mensagensRecebidas.data;

    
    msg = info[contador];
    console.log(msg);
    if(contador <= 99){
    contador++;
    }
    else{
        return 0;
    }
    renderizarMensagem(msg)
    mensagensAntigas = info;

}

function renderizarMensagem(msg){
    switch (msg.type) {
       
        case ('status'):
            colocar.innerHTML += `<li class='user_log'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span>:  ${msg.text}</li>`;
            break;
            
        case ('message'):
        colocar.innerHTML += `<li class='general_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> para <span class='bold'>${msg.to}</span>:  ${msg.text}</li>`;
                
        break;

        case ('private_message'):
        colocar.innerHTML += `<li class='private_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> reservadamente para <span class='bold'>${msg.to}</span>:  ${mensagem[1].text}</li>`;

    break;

    default:
        break;
}
temporizador();
}

