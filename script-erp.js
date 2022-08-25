const Open = {
    senha() {
        var senha = "Cliente solicita alteração da senha (), após troca, cliente confirma conexão.";
        navigator.clipboard.writeText(senha).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt1').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt1').classList.remove('active')
        }, 350)
    },
    app() {
        var app = "Cliente solicita informações sobre o aplicativo da Megalink, feito as configurações de login e repassado ao cliente.";
        navigator.clipboard.writeText(app).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt2').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt2').classList.remove('active')
        }, 350)
    },
    roteador() {
        var roteador = "Cliente solicita segundo roteador, informado que é recomendado que o mesmo deve adquirir por conta própria e sobre como interligar os equipamentos.";
        navigator.clipboard.writeText(roteador).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt3').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt3').classList.remove('active')
        }, 350)
    },
    dns() {
        var dns = "Cliente relata lentidão, sem anormalidade no sinal da fibra, identificado DNS setado, após troca para automático, cliente confirma normalização da conexão.";
        navigator.clipboard.writeText(dns).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt4').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt4').classList.remove('active')
        }, 350)
    },
    dband() {
        var dband = "Cliente relata lentidão, sem anormalidade no sinal da fibra ou nas configurações do equipamento, explicado ao cliente a diferença entre as duas redes (2.4Ghz e 5Ghz) e orientado sobre o uso do cabo de rede sempre que possível.";
        navigator.clipboard.writeText(dband).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt5').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt5').classList.remove('active')
        }, 350)
    },
    iptv() {
        var iptv = "Cliente relata lentidão, identificado que não havia nenhuma anormalidade no sinal da fibra ou nas configurações do equipamento, lentidão só acontecia no serviço de IPTV, explicado ao cliente como funciona os serviços de IPTV e orientado a solicitar suporte do seu revendedor de LINK do IPTV.";
        navigator.clipboard.writeText(iptv).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt6').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt6').classList.remove('active')
        }, 350)
    },
    sinal() {
        var sinal = "Cliente relata lentidão, identificado sinal da fibra fora do padrão para a rota (oscilações de sinal: ), cliente orientado a aguardar visita técnica para manutenção, informado os prazos.";
        navigator.clipboard.writeText(sinal).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt7').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt7').classList.remove('active')
        }, 350)
    },
    vizi() {
        var vizi = "Cliente relata lentidão, identificado que não havia nenhuma anormalidade no sinal da fibra ou nas configurações do equipamento, cliente não reconhece a quantidade de dispositivos, explicado como funciona o roteador, ao trocar a senha (), cliente confirma normalização da conexão.";
        navigator.clipboard.writeText(vizi).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt8').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt8').classList.remove('active')
        }, 350)
    },
    mac() {
        var mac = "Cliente relata lentidão, identificado que não havia anormalidade no sinal da fibra ou nas configurações do equipamento, conflito de MAC identificado no extrato de autenticação, feito os procedimentos para identificar o cliente incorreto (PPPoE:) e ajustado ambos.";
        navigator.clipboard.writeText(mac).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt9').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt9').classList.remove('active')
        }, 350)
    },
    los() {
        var los = "Cliente relata falta de conexão, LOS identificado, cliente orientado a aguardar visita técnica para manutenção, informado os prazos.";
        navigator.clipboard.writeText(los).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt10').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt10').classList.remove('active')
        }, 350)
    },
    equir() {
        var equir = "Cliente relata falta de conexão, identificado que o mesmo estava com o equipamento resetado, feito as configurações de SSID e Senha (), cliente confirma conexão.";
        navigator.clipboard.writeText(equir).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt11').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt11').classList.remove('active')
        }, 350)
    },
    equid() {
        var equid = "Cliente relata falta de conexão, equipamento ou fonte possívelmente danificado, cliente confirma que testou em outra tomada, verificou se o cabo de alimentação estava bem conectado e se o botão POWER estava ligado, orientado a aguardar visita técnica, informado os prazos.";
        navigator.clipboard.writeText(equid).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt12').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt12').classList.remove('active')
        }, 350)
    },
    sgen() {
        var sgen = "Cliente relata falta de conexão, informado sobre situação generalizada, orientado a aguardar normalização da rede.";
        navigator.clipboard.writeText(sgen).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt13').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt13').classList.remove('active')
        }, 350)
    },
    sdis() {
        var sdis = "Cliente relata falta de conexão, identificado que não havia anormalidade no sinal da fibra ou nas configurações do equipamento, a situação estava acontecendo somente em UM dispositivo, cliente orientado a procurar um técnico para suporte do dispositivo.";
        navigator.clipboard.writeText(sdis).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt14').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt14').classList.remove('active')
        }, 350)
    },
    desl() {
        var desl = "Cliente relata falta de conexão, identificado que era somente o equipamento desligado, ao ligar, cliente confirma conexão.";
        navigator.clipboard.writeText(desl).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt15').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt15').classList.remove('active')
        }, 350)
    },
    bloq() {
        var bloq = "Cliente com bloqueio informa que já pagou, encaminhado para o setor correspondente (CRC).";
        navigator.clipboard.writeText(bloq).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt16').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt16').classList.remove('active')
        }, 350)
    },
    desbloq() {
        var desbloq = "Cliente solicita desbloqueio confiança, foi realizado automaticamente pelo atendimento eletrônico no começo do atendimento, informado ao cliente.";
        navigator.clipboard.writeText(desbloq).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt17').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt17').classList.remove('active')
        }, 350)
    },
    bolet() {
        var bolet = "Cliente solicita boletos em aberto, encaminhado para o setor correspondente.";
        navigator.clipboard.writeText(bolet).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt18').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt18').classList.remove('active')
        }, 350)
    },
    plat() {
        var plat = "Cliente solicita informações sobre plataforma de streaming, encaminhado para o setor correspondente.";
        navigator.clipboard.writeText(plat).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt19').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt19').classList.remove('active')
        }, 350)
    },
    cancelar() {
        var cancelar = "Cliente solicita cancelamento, encaminhado para o setor correspondente.";
        navigator.clipboard.writeText(cancelar).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt20').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt20').classList.remove('active')
        }, 350)
    },
    negoc() {
        var negoc = "Cliente solicita negociação, encaminhado para o setor correspondente.";
        navigator.clipboard.writeText(negoc).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt21').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt21').classList.remove('active')
        }, 350)
    },
    detal() {
        var detal = "@cliente->primeiro_nome, fiz uma análise na sua conexão e não identifiquei nenhuma anormalidade no sinal da sua fibra ou nas configurações do seu equipamento, me detalhe melhor essa lentidão, por gentileza. Em qual dispositivo está acontecendo?";
        navigator.clipboard.writeText(detal).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt23').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt23').classList.remove('active')
        }, 350)
    },
    quand() {
        var quand = "Quantos dispositivos estão LIGADOS e CONECTADOS agora no WI-FI? (Qualquer dispositivo se faz necessário ser inclusão nessa informação: Celular, Smart Tv, Tv Box, Video-Game, Computador, e.t.c)";
        navigator.clipboard.writeText(quand).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt24').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt24').classList.remove('active')
        }, 350)
    },
    dualb() {
        var dualb = "As principais diferenças entre as ligações Wi-Fi a 2,4 GHz e a 5 GHz são a velocidade e o alcance.\n\nA frequência de 2,4 GHz do router Wi-Fi proporciona uma maior área de cobertura e é melhor para atravessar objetos sólidos, embora com uma velocidade limitada entre 20 Mb - 60 Mb.\n\nA frequência de 5 GHz do roteador Wi-Fi oferece maiores velocidades. Contudo, proporciona uma menor área de cobertura e tem maior dificuldade de atravessar objetos sólidos.\n\nAssim, uma transmissão a 2,4 GHz assegura Internet numa área maior, mas a menor velocidade, enquanto uma transmissão a 5 GHz proporciona velocidades maiores, mas menor alcance.\n\nSe pretender um alcance maior para os seus dispositivos, use 2,4 GHz. Se necessitar de uma velocidade maior e puder sacrificar o alcance, use a frequência de 5 GHz."
        navigator.clipboard.writeText(dualb).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt25').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt25').classList.remove('active')
        }, 350)
    },
    crede() {
        var crede = "As conexões sem fio, por melhor que sejam, ainda sofrem com instabilidades se comparadas às conexões cabeadas. As redes Wi-Fi atingem menores taxas de transferência de dados, são mais vulneráveis e estão sujeitas a interferências dentro da sua residência, portanto, estar conectado ao cabo garante uma latência mais baixa, ou seja, maior estabilidade e menor tempo de resposta entre o comando e a sua execução na tela."
        navigator.clipboard.writeText(crede).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt26').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt26').classList.remove('active')
        }, 350)
    },
    sgene() {
        var sgene = "Olá, @cliente->primeiro_nome, identificamos uma situação na rede geral em sua região, nosso time de analistas já está trabalhando para normalizar, por gentileza, mantenha seus equipamentos ligados, ao término seu acesso voltará de forma automática, se necessário entre em contato com a nossa central, posteriormente, ficou alguma dúvida sobre?"
        navigator.clipboard.writeText(sgene).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt27').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt27').classList.remove('active')
        }, 350)
    },
    any() {
        var any = "Para prosseguirmos com uma melhor análise, solicito que baixe a ferramenta Any Desk, com esse App será possível eu conseguir visualizar a sua tela para acompanhar a situação, após o término da tratativa, o App pode ser desinstalado. (link para download: https://anydesk.com/pt)"
        navigator.clipboard.writeText(any).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt28').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt28').classList.remove('active')
        }, 350)
    },
    quals() {
        var quals = "Olá, @cliente->primeiro_nome, qual informação ou solicitação você precisa?"
        navigator.clipboard.writeText(quals).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt29').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt29').classList.remove('active')
        }, 350)
    },
    nsenha() {
        var nsenha = "Qual a nova senha desejada?\n\nDeseja fazer a alteração no nome da rede também?"
        navigator.clipboard.writeText(nsenha).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt30').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt30').classList.remove('active')
        }, 350)
    },
    novoend() {
        var novoend = "Confirme todas as informações abaixo com o novo endereço, por gentileza;\nAvenida/Rua:\nNúmero:\nBairro:\nCEP:\nCidade:\nPonto de referência:\nTelefone para contato:"
        navigator.clipboard.writeText(novoend).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt31').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt31').classList.remove('active')
        }, 350)
    },
    teste() {
        var teste = "@cliente->primeiro_nome, sabemos que medir a velocidade pelo Wi-Fi é mais fácil, afinal o celular está praticamente sempre em nossas mãos. Porém, ele foi feito para ter mobilidade e não alta velocidade! Então, sempre que quiser testar corretamente a velocidade da sua Internet, prefira realizar o teste com o seu computador/notebook conectado via cabo de rede ao roteador! Lembre-se de desligar o Wi-Fi de todos os dispositivos que estiverem conectados ao roteador."
        navigator.clipboard.writeText(teste).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt32').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt32').classList.remove('active')
        }, 350)
    },
    vizinho() {
        var vizinho = "Como você não reconhece a quantidade de dispositivos conectados, se faz necessário a troca da senha para desconectar os dispositivos não reconhecidos, essa quantidade de dispostivos não é um empecilho na sua conexão, porém, a distância é... O roteador envia internet de forma não simutânea, ou seja, envia para um dispositivo de cada vez, porém, o mesmo sempre dá preferência para os dispositivos mais distantes, possívelmente esse dispositivo não reconhecido está fora da sua residência e o roteador sempre irá dar preferência para ele, gerando lentidão e oscilação na sua residência, vamos prosseguir com a troca da senha, me informe uma nova senha, por gentileza."
        navigator.clipboard.writeText(vizinho).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt33').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt33').classList.remove('active')
        }, 350)
    },
    oculto() {
        var oculto = "Não recomendo deixar invisível, além de não ajudar muito, uma rede invisível pode apresentar ainda alguns contratempos. O primeiro deles é o fato de que, sempre que alguém for se conectar com um novo dispositivo (que não tenha o nome da rede já memorizado), será preciso informar o SSID manualmente.É importante lembrar que alguns dispositivos podem não permitir reconexões automáticas em redes invisíveis, ou seja, mesmo que você já tenha se conectado antes, fazer isso de novo demandará o mesmo trabalho da primeira vez. Mais trabalho e menos praticidade..."
        navigator.clipboard.writeText(oculto).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt34').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt34').classList.remove('active')
        }, 350)
    },
    appm() {
        var appm = "@cliente->nome, para sua maior comodidade, onde você terá a informações do seu plano, faturas e conexão de internet, indicamos o nosso aplicativo da Mega link telecom. Você encontra nosso app na loja virtual do google, a Play store. Segue o link do nosso app ->  https://play.google.com/store/apps/details?id=br.com.portal.megalink / Senha e Usuário são seu CPF sem pontos, sem traços, apenas números."
        navigator.clipboard.writeText(appm).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt35').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt35').classList.remove('active')
        }, 350)
    },
    crcoff() {
        var crcoff = "Olá, @cliente->nome, sensivelmente o setor financeiro não está disponível para essa tratativa, somente o suporte técnico funciona 24h. Oriento que retorne contato em horário comercial. Ficou alguma dúvida sobre?"
        navigator.clipboard.writeText(crcoff).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt36').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt36').classList.remove('active')
        }, 350)
    },
    iptvt() {
        var iptvt = "O ideal é que o aparelho em que você for assistir o IPTV esteja conectado no cabo de rede. No sinal Wi-Fi tende a perder qualidade e ficar oscilando, porém, mesmo no cabo pode acontecer travamentos, pois, a maioria dos servidores de IPTV não estão no Brasil, o serviço de IPTV não é aprovado pela ANATEL, com isso, não possuem suporte e servidores de qualidade, oriento a entrar contato com o revendedor do seu link para ele verificar se está tudo certo."
        navigator.clipboard.writeText(iptvt).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt37').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt37').classList.remove('active')
        }, 350)
    },
    segrot() {
        var segrot = "Se notar que o seu roteador principal não está sendo o suficiente para cobrir toda a região da sua residência, recomendo a instalação de um segundo roteador para funcionar como repetidor de sinal, oriento que contrate um técnico de redes para ir a sua residência e o mesmo poderá analisar a área e indicar o melhor local para instalação e o roteador a ser adquirido."
        navigator.clipboard.writeText(segrot).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt38').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt38').classList.remove('active')
        }, 350)
    },
    ajudo() {
        var ajudo = "@cliente->nome, necessário mais alguma informação ou procedimento?"
        navigator.clipboard.writeText(ajudo).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt39').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt39').classList.remove('active')
        }, 350)
    },
    visit() {
        var visit = "Então, @cliente->primeiro_nome, como orientei vamos priorizar seu atendimento para realizar o quanto antes. De antemão lhe oriento a adquirir um plano (Corporativo), esse plano é destinado para micro e pequenas empresas, o mesmo possui um atendimento diferenciado com o prazo de 24 horas onde prezamos sempre em realizar nas primeiras 4 horas, agora seu contrato é pessoa física, enfim o suporte esta lhe ajudando da melhor forma."
        navigator.clipboard.writeText(visit).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt40').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt40').classList.remove('active')
        }, 350)
    },
    trav() {
        var trav = "Cliente relata falta de acesso, ONU com sinal e conexão com IP, identificado que o equipamento estava travado, ao reiniciar, cliente confirma normalização."
        navigator.clipboard.writeText(trav).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt41').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt41').classList.remove('active')
        }, 350)
    },
    ativ() {
        var ativ = "Ativação do novo cliente realizado com sucesso. Ativado com sinal: '-' e Acesso remoto habilitado: [    ] Sim    [    ] Não"
        navigator.clipboard.writeText(ativ).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt42').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt42').classList.remove('active')
        }, 350)
    },
    rota() {
        var rota = "Técnico solicita vinculação da ONU na nova rota do cliente, vinculado com sucesso."
        navigator.clipboard.writeText(rota).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt43').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt43').classList.remove('active')
        }, 350)
    },
    onu() {
        var rota = "Técnico solicita vinculação de uma nova ONU para o cliente, vinculado com sucesso."
        navigator.clipboard.writeText(rota).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt44').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt44').classList.remove('active')
        }, 350)
    },
    local() {
        var rota = "Técnico solicita ligação, o mesmo não conseguiu localizar o cliente, (completar script...)"
        navigator.clipboard.writeText(rota).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt45').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt45').classList.remove('active')
        }, 350)
    },
    flen() {
        var flen = "Cliente relata lentidão, sem anormalidade no sinal da fibra ou nas configurações do equipamento, ao pedir detalhes da lentidão, atendimento finalizado por falta de interação."
        navigator.clipboard.writeText(flen).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt46').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt46').classList.remove('active')
        }, 350)
    },
    face() {
        var face = "Cliente relata falta de conexão, sem anormalidade no sinal da fibra ou nas configurações do equipamento, ao pedir detalhes da falta de acesso, atendimento finalizado por falta de interação."
        navigator.clipboard.writeText(face).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt47').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt47').classList.remove('active')
        }, 350)
    },
    segundorot() {
        var segundorot = "Sr(a). @cliente->primeiro_nome, o segundo roteador pode ser adquirido pela Megalink de duas formas:\n\nOpção 1: Realizar o upgrade para o plano 720 Mb Ultra, onde terá como vantagens: WI-FI DUO (2 ROTEADORES) + Mega Mais (Paramount+ e Watch) + Deezer Premium + Bittrainers + MegaProtege (Antivírus).\n\nOpção 2: Permanecer com seu plano atual e sendo incluso o valor de 19,90 mensal (caso o equipamento seja da Megalink) ou 9,90 mensal (caso o equipamento seja do(a) cliente)."
        navigator.clipboard.writeText(segundorot).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt48').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt48').classList.remove('active')
        }, 350)
    },
    boleten() {
        var boleten = "Cliente solicita 2ª via de boletos, encaminhado para o setor correspondente (CRC)."
        navigator.clipboard.writeText(boleten).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt49').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt49').classList.remove('active')
        }, 350)
    },
    boletev() {
        var boletev = "Cliente solicita 2ª via de boletos, envio feito via WhatsApp, atendimento finalizado."
        navigator.clipboard.writeText(boletev).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt50').classList.add('active')
        setTimeout(() => {
            document.querySelector('.bt50').classList.remove('active')
        }, 350)
    },






}