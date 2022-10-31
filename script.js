
//declaração de mensagem
let msg, info, mensagensAntigas, contador=80, oldMsg;
let Utilizador;

const username = prompt('Digite seu nome:');
registrarNome(username);

const colocar = document.querySelector('.conversa');


let teste ;



function iniciar(cont){
    teste = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

    teste.then(console.log (teste));
    teste.catch();
    teste.then(adicionarMensagemInicial);
    pingStatus();
}

function temporizador(atualizacao){
    atualizacao = parseInt(atualizacao)
    setTimeout(adicionarMensagem, 3000, atualizacao);
}

//Receber mensagens
function adicionarMensagemInicial (mensagensRecebidas){
    info = mensagensRecebidas.data;
    
    console.log(contador);

    
        while(contador < 99){
        console.log('rodar');
        msg = info[contador];
        contador++;
        renderizarMensagem(msg);     
        }
     
        atualizarMsg();
}

function atualizarMsg(){
    
    let newMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    newMsg.then(atualizarChat);
   
}

function atualizarChat(novasMsg){
    console.log('chat atualizado');
    addChat = novasMsg.data;
    info.push(addChat[99]);
    contador++;

    renderizarMensagem(info[contador]);  
    timer();
}

function timer(){
    setTimeout(atualizarMsg, 3000);
}

//
function renderizarMensagem(msg){
    console.log('mensagem renderizada');
  

   
        

        console.log(mensagensAntigas);
        console.log(msg);
    switch (msg.type) {
       
        case ('status'):
            colocar.innerHTML += `<li class='mensagem user_log'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span>:  ${msg.text}</li>`;
            break;
            
        case ('message'):
        colocar.innerHTML += `<li class='mensagem general_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> para <span class='bold'>${msg.to}</span>:  ${msg.text}</li>`;
                
        break;

        case ('private_message'):
        colocar.innerHTML += `<li class='mensagem private_message'><span class='time'>(${msg.time})</span> <span class='bold'>${msg.from}</span> reservadamente para <span class='bold'>${msg.to}</span>:  ${msg.text}</li>`;

    break;

    default:
        break;

    }
    scrollDown();
}


function scrollDown() {
    const elementoQueQueroQueApareca = document.querySelectorAll(".mensagem");
    if (elementoQueQueroQueApareca != undefined) {
        elementoQueQueroQueApareca.forEach((i) => {
            i.scrollIntoView();
        });
    }
}


function registrarNome(nome){
Utilizador = {
    name: nome
}
const entrar = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', Utilizador);
entrar.then(iniciar);
entrar.catch(window.location.reload)

}

function pingStatus(){
    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', Utilizador);
    setTimeout(pingStatus, 4000);
}

function enviarMensagem(){
    console.log('clicou!');

    texto = document.getElementById("texto").value;
    console.log (texto)
    texto.addEventListener
    let mensagem =
    {
		from: username,
		to: "Todos",
		text: texto,
		type: "message",
		time: "08:02:50"
	};
    let enviar = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', mensagem);
    enviar.then(atualizarMsg);
    enviar.catch(Refresh);

}

texto.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });


function Refresh(){
    window.location.reload()
}