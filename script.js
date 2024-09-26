const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A liberação da maconha é debatida quanto à legalização para uso medicinal e revreativo, apoio a legalização inclui beneficios medicos e redução da criminalidade, enquanto os opositores citam preocupações de saude e segurança. Voçê acga que a maconha deve ser liberada para uso recreativo?",
        alternativas: [
            {
                texto: "Sim, a legalização pode gerar impostos e regular o consumo de forma mais segura"
            },
            {
                texto: "Não, isso pode aumentar o consumo entre jovens e trazer problemas de saúde pública"
            }
        ]
    },
    {
        enunciado: "A legalização da maconha pode ajudar a combater p trafico de drogas no brasil?",
        alternativas: [
            {
                texto: "Sim, ao legalizar, o governos pode desmatelar o comercio ilegal e reduzir a violencia associada"
            },
            {
                texto: "Não, isso pode não eliminar o trafico pois outras drogas ainda seriam lucrativas para os criminosos"
            }
        ]
    },
    {
        enunciado: "A legalisação da maconha poderia gerar receita para o governo Brasileiro através de impostos?",
        alternativas: [
            {
                texto: "Sim, com a venda legalizada,o governo poderia arrecadar impostos que poderiam ser investidos em saúde e educação"
            },
            {
                texto: "Não, isso pode não ser suficiente para cobrir os custos sociais e de saúde relacionadas ao consumo"
            }
        ]
    },
    {
        enunciado: "Deve o Brasil segir o exemplo de países que ja legalizaram a maconha?",
        alternativas: [
            {
                texto: "Sim, experiencias internacionais podem fornecer licões valiosas sobre regulamentação econtrole"
            },
            {
                texto: "Não, cada pais tem suas particularidades e o brasil pode enfrentar desafios únicos que não foram considerados"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
