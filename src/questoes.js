const questions = {
    matematica: [
      {
        id: 1,
        question: "Qual é a raiz quadrada de 144?",
        options: ["10", "12", "14", "16"],
        answer: "12"
      },
      {
        id: 2,
        question: "O que é 7 × 8?",
        options: ["54", "56", "58", "60"],
        answer: "56"
      },
      {
        id: 3,
        question: "Qual é o valor de π (pi) aproximadamente?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        answer: "3.14"
      },
      {
        id: 4,
        question: "Quanto é 25% de 200?",
        options: ["40", "50", "60", "70"],
        answer: "50"
      }
    ],
    portugues: [
      {
        id: 1,
        question: " Os veículos espaciais apresentam estrutura externa constituída por um conjunto de blocos que formam um escudo térmico, cuja função é proteger motores e demais componentes de possíveis danos causados pelo calor, além de reduzir a temperatura interna do veículo. Esses escudos térmicos são consturidos com material:",
        options: ["metálico, dada sua leveza e elevada resistência ao calor.", "polimérico, dada sua baixa resistência ao calor e à corrosão.", "cerâmico poroso, dada sua elevada resistência mecânica à tração.", "polimérico, em razão de sua alta massa específica e de sua resistência ao calor.", "cerâmico poroso, em razão de seu baixo coeficiente de dilatação térmica e de sua baixa condutividade térmica."],
        answer: "cerâmico poroso, em razão de seu baixo coeficiente de dilatação térmica e de sua baixa condutividade térmica."
      },
      {
        id: 2,
        question: "Um microcontrolador controla o dispositivo em que ele se encontra embutido através da sua interface de programação de aplicativos (API). Essencialmente, essa interface consiste em um conjunto de registradores de dados, de controle e de estado. Em um microcontrolador hipotético, os bits 5, 4 e 3 do registrador de controle MODOEVENTO de 16 bits controlam a configuração do tipo de evento que gera um gatilho em um pino específico, conforme a seguinte codificação binária: 000 = desabilitado; 001 = sensível a borda de subida; 010 = sensível a borda de descida; 011 = sensível a ambas as bordas; 100 = sensível a nível alto; 101 = sensível a nível baixo. O bit 0, à extrema direita, é o menos significativo, e o bit 15, o mais significativo. Considerando-se essa situação e sabendo-se que, em linguagem C, os símbolos |, & e ~ correspondem aos operadores lógicos bit a bit OR, AND e NOT, respectivamente, qual instrução em C deve ser utilizada para configurar o pino, de forma que ele fique sensível a ambas as bordas?",
        options: ["MODOEVENTO = 0x0018", "MODOEVENTO |= 0x0018", "MODOEVENTO &= ~0x0018", "MODOEVENTO = (MODOEVENTO | 0x0018)", "MODOEVENTO = (MODOEVENTO & ~0x0038)"],
        answer: "MODOEVENTO = (MODOEVENTO & ~0x0038)"
      },
      {
        id: 3,
        question: "Um provedor de serviços de segurança de redes e sistemas distribuídos enumerou três componentes de rede essenciais para a garantia da segurança dos dados corporativos: firewall de rede; sistemas de prevenção e detecção de intrusão; e gateways antivírus. Acerca desses componentes de rede, assinale a:",
        options: ["Os gateways antivírus trabalham no nível da camada de rede e verificam o fluxo de dados em busca de assinaturas de vírus conhecidas.", "O firewall de rede deve ser configurado para detectar transferência de informação através de um canal camuflado (covert channel) baseado em túneis.", "Um firewall de camada de rede (network layer firewall) permite uma filtragem mais detalhada dos dados que um firewall de camada de aplicação (application layer firewall) ao custo de um pior desempenho.", "Os sistemas de prevenção de intrusão são vistos como uma extensão do firewall e são capazes de detectar anomalias de tráfego ou conteúdo malicioso antes que eles alcancem a rede.", "O sistema de detecção de intrusão é capaz de identificar ataques iniciados dentro da rede protegida e agir proativamente para neutralizar"],
        answer: "Os sistemas de prevenção de intrusão são vistos como uma extensão do firewall e são capazes de detectar anomalias de tráfego ou conteúdo malicioso antes que eles alcancem a rede."
      },
      {
        id: 4,
        question: "Considere que tenha ocorrido o vazamento de imagens íntimas, por meio de aplicativo de comunicação instantânea de celular, disponibilizado por provedor de aplicações, sem autorização das pessoas que aparecem nas imagens. Nesse contexto, de acordo coma Lei n. 12.965/2014, conhecida popularmente como Marco Civil da Internet, o provedor de aplicações de internet poderá:",
        options: ["ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos.", "ser declarado inocente, caso fique provado que as imagens foram disponibilizadas à pedido da vítima.", "mover uma ação contra a vítima, pelo uso indevido de seus serviços, por ela ter disponibilizado imagens íntimas na rede.", "tornar indisponíveis todas as imagens da vítima compartilhadas e disponíveis na internet.", "encerrar seu contrato com a vítima devido à falha de segurança ocorrida."],
        answer: "ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos."
      }
    ],
    ciencias: [
      {
        id: 1,
        question: "Qual é o elemento químico representado pelo símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Ósmio", "Odin"],
        answer: "Oxigênio"
      },
      {
        id: 2,
        question: "Quem é conhecido como o pai da teoria da evolução?",
        options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileu Galilei"],
        answer: "Charles Darwin"
      },
      {
        id: 3,
        question: "Qual é o principal órgão responsável pela respiração no corpo humano?",
        options: ["Coração", "Fígado", "Rins", "Pulmões"],
        answer: "Pulmões"
      },
      {
        id: 4,
        question: "Qual é a unidade básica da vida?",
        options: ["Átomo", "Molécula", "Célula", "Órgão"],
        answer: "Célula"
      },
      {
        id: 5,
        question: "O que é fotossíntese?",
        options: ["Processo de respiração das plantas", "Processo de absorção de água pelas raízes", "Processo de produção de alimento pelas plantas usando luz solar", "Processo de divisão celular das plantas"],
        answer: "Processo de produção de alimento pelas plantas usando luz solar"
      }
    ]
  };
  
  module.exports = { questions };
  