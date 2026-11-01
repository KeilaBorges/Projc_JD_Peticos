
/* =================================
   INFORMAÇÕES DO NEGÓCIO
================================= */

const negocio = {

    nome: "JD Petiscos",

    descricao: "Conheça nossos produtos!",

    links: {
        ifood: "",
        food99: "",
        whatsapp: "",
        localizacao: ""
    },

    rodape: {
        mensagem: "Obrigado pela preferência!",
        desenvolvedor: "Seu Nome",
        link: "https://seuportfolio.com"
    }

};


/* =================================
   SELECIONANDO OS BOTÕES
================================= */

const botaoIfood = document.getElementById("ifood");

const botao99 = document.getElementById("food99");

const botaoWhatsapp = document.getElementById("whatsapp");

const botaoLocalizacao = document.getElementById("localizacao");


/* =================================
   INSERINDO OS LINKS
================================= */

botaoIfood.href = negocio.links.ifood;

botao99.href = negocio.links.food99;

botaoWhatsapp.href = negocio.links.whatsapp;

botaoLocalizacao.href = negocio.links.localizacao;


/* =================================
   CONFIGURANDO O RODAPÉ
================================= */

document.getElementById("mensagem-rodape").textContent =
    negocio.rodape.mensagem;

document.getElementById("nome-desenvolvedor").textContent =
    negocio.rodape.desenvolvedor;

document.getElementById("link-desenvolvedor").href =
    negocio.rodape.link;
