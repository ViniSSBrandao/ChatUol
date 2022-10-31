
//declaração de mensagem
let msg, info, mensagensAntigas, contador=80;

const username = prompt('Digite seu nome:');
registrarNome(username);

const colocar = document.querySelector('.conversa');


let teste ;



function iniciar(cont){
    teste = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

    teste.then(console.log (teste));
    teste.then(adicionarMensagem);
    

    iniciar();
    
}

function temporizador(atualizacao){
    atualizacao = parseInt(atualizacao)
    setTimeout(adicionarMensagem, 3000, atualizacao);
}

//Receber mensagens
function adicionarMensagem (mensagensRecebidas){
    info = mensagensRecebidas.data;
    msg = info[contador];
    console.log(contador);

    
        if(contador < 99){
        console.log('rodar');
        contador++;
        renderizarMensagem(msg); 
          
        }

       else{
            
            console.log('temporizar');
           temporizador(msg);
            return 0;
            
        }
    
     

}

//
function renderizarMensagem(msg){
    console.log('mensagem renderizada');
    if(msg === mensagensAntigas){
        return 0;
    }
    else{
    mensagensAntigas = msg;
    switch (msg.type) {
       
        case ('status'):
            colocar.innerHTML += `<li class='mensagem user_log'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span>:  ${msg.text}</li>`;
            break;
            
        case ('message'):
        colocar.innerHTML += `<li class='mensagem general_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> para <span class='bold'>${msg.to}</span>:  ${msg.text}</li>`;
                
        break;

        case ('private_message'):
        colocar.innerHTML += `<li class='mensagem private_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> reservadamente para <span class='bold'>${msg.to}</span>:  ${mensagem[1].text}</li>`;

    break;

    default:
        break;
}
    }
}

function registrarNome(nome){
const Utilizador = {
    name: nome
}
axios.post('https://mock-api.driven.com.br/api/v6/uol/participants' , Utilizador).then(iniciar);

}

function enviarMensagem(){
    console.log('clicou!');

    texto = document.getElementById("texto").value;
    console.log (texto)
    let mensagem =
    {
		from: username,
		to: "Todos",
		text: texto,
		type: "message",
		time: "08:02:50"
	};
    axios.post('https://mock-api.driven.com.br/api/v6/uol/messages' , mensagem).then(iniciar);
}

