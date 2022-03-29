const Open = {
    senha() {
        var senha = "Cliente solicita alteração da senha (nova senha:), após troca, cliente confirma conexão.";
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
        var dband = "Cliente relata lentidão, identificado que não havia nenhuma anormalidade no sinal da fibra ou nas configurações do equipamento, explicado a diferença de dual band e orientado a cabear sempre que possível.";
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
        var bloq = "Cliente com bloqueio relata falta de conexão, informado sobre os boletos em aberto, encaminhado para o setor correspondente.";
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
        var desbloq = "Cliente solicita desbloqueio confiança, o mesmo já estava com o status normal, cliente confirma conexão.";
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
    avisob() {
        var avisob = "Cliente com redução relata lentidão, explicado o motivo da lentidão, encaminhado para o setor correspondente.";
        navigator.clipboard.writeText(avisob).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        document.querySelector('.bt22').classList.add('active')
        setTimeout(()=>{
            document.querySelector('.bt22').classList.remove('active')
        }, 350)
    },
    detal() {
        var detal = "Olá, @cliente->primeiro_nome, não detectei nenhuma anormalidade no sinal da sua fibra ou nas configurações do seu equipamento, me detalhe melhor essa lentidão, por gentileza. Em qual dispositivo está acontecendo?";
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
        var dualb = "O seu roteador é Dual Band (Banda dupla) que transmite um sinal de 2.4 GHz e 5.8 GHz da mesma unidade, fornecendo a você duas redes Wi-Fi. O sinal 2.4 GHz é uma conexão sem fio (Wi-fi) que fornece internet para uma área maior, mas sacrifica a velocidade, está tecnologia só irá passar entre 20Mb a 60Mb. Já o sinal 5.8 GHz fornece uma velocidade bem mais rápida para uma área menor, portanto, é importante primeiro garantir que seus dispositivos sejam compatíveis com a rede 5G e que estejam próximos ao roteador, para garantir um sinal de qualidade."
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
        var quals = "Olá, @cliente->primeiro_nome, qual a informação ou solicitação desejada?"
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
        var nsenha = "Qual a nova senha desejada? Deseja fazer a alteração no nome da rede também? (Lembrando que não recomendamos caracteres especiais como: @, $, &, espaço e e.t.c, os mesmos podem apresentar incompatibilidade em alguns dispositivos."
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
        var novoend = "Me confirme os dados do novo endereço: Avenida/Rua, Número, Bairro, Cep, Cidade, Ponto de referência e telefone para contato."
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
        var teste = "O teste de velocidade deve ser realizado no computador/notebook conectado ao cabo de rede ou em último caso pelo Wi-Fi, porém, conectado na rede 5G, no momento do teste se faz necessário estar próximo do equipamento (caso feito via Wi-Fi) e garantir que somente o computador/celular seja o único conectado na rede."
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



}