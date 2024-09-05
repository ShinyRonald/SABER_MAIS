const questoesSimulado = [
    {
      id: 1,
      disciplina: "Sociologia",
      enunciadoum: `Recentemente, a população carcerária feminina do Brasil tornou-se a terceira maior do mundo. A situação do encarceramento feminino por tráfico de drogas e outras situações que circundam o assunto foi tema de discussão da Secretaria de Políticas sobre Drogas do Ministério da Justiça e Segurança Pública (Senad/MJSP), em seminário realizado em abril de 2023. O evento contou com a participação de 23 países. Segundo os dados apresentados pela Senad, a incidência penal sobre drogas no Brasil é uma das principais causas de prisão de mulheres, chegando a 54% dos casos de encarceramento, contra 28% dos homens, índice que impacta em aspectos como maternidade e primeira infância.`,
      enunciadodois: `Disponível em: https://www.gov.br/mj/pt-br/assuntos/noticias/senad-discute-situacao-de-mulheres-encarceradas-no-contexto-de-drogas-no-brasil. Acesso em: 15 jun. 2023 (adaptado).`,
      enunciadotres: `Acerca do tema apresentado, avalie as asserções a seguir e a relação proposta entre elas.`,
      enunciadoquatro: `I. A maioria das mulheres envolvidas em atividades do tráfico encontra-se em posições hierarquicamente inferiores, sendo classificadas como “mulas e aviões”, o que revela a reprodução, no mercado ilegal, da divisão sexual do trabalho observada no mercado formal.`,
      enunciadocinco: `PORQUE`,
      enunciadoseis: `II. O sistema penal agrava a situação de vulnerabilidade das mulheres encarceradas, seja pela invisibilização com que as trata, seja por meio da violência institucional que reproduz a violência estrutural das relações sociais patriarcais.`,
      enunciadosete: `A respeito dessas asserções, assinale a opção correta.`,
      alternativas: [
        "A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        "B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
        "C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        "D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
        "E) As asserções I e II são proposições falsas."
      ],
      respostaCorreta: "B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
    },
    {
      id: 2,
      disciplina: "Filosofia",
      enunciadoum: `A sociedade do século XXI não é mais uma sociedade disciplinar, mas, sim, uma sociedade do desempenho. Os seus habitantes também não se chamam mais sujeitos de obediência, mas, sim, sujeitos de desempenho e produção. São empresários de si mesmos.`,
      enunciadodois: `BYUNG-CHUL HAN. Sociedade do Cansaço. Petrópolis: Vozes, 2015 (adaptado).`,
      enunciadotres: `Considerando o texto apresentado, avalie as afirmações a seguir.`,
      enunciadoquatro: `I. Os recursos tecnológicos, como notificações de mensagens em tempo real e controle da velocidade de áudio em redes de mensagens, são fatores que podem contribuir para a precarização das relações de trabalho na sociedade contemporânea.`,
      enunciadocinco: `II. As medidas pessoais de proteção à saúde mental e de promoção da qualidade de vida incluem a desativação de aplicativos e mecanismos de notificações instantâneas, bem como a fixação de horários para uso profissional e uso recreativo das tecnologias digitais.`,
      enunciadoseis: `III. As medidas públicas de prevenção das doenças e dos danos sociais associados ao uso excessivo dos recursos tecnológicos de comunicação envolvem estímulos ao letramento digital, à alfabetização midiática e à regulamentação do uso de plataformas digitais no ambiente de trabalho.`,
      enunciadosete: `É correto o que se afirma em:`,
      alternativas: [
        "A) I, apenas.",
        "B) III, apenas.",
        "C) I e II, apenas.",
        "D) II e III, apenas.",
        "E) I, II e III."
      ],
      respostaCorreta: "E) I, II e III."
    },
    {
      id: 3,
      disciplina: "Redes de Computadores",
      enunciadoum: `Cada roteador em redes de computadores precisa implementar alguma estratégia de enfileiramento para controlar como os pacotes são armazenados em buffer enquanto esperam para serem transmitidos, independentemente do mecanismo de alocação de recursos. O algoritmo de enfileiramento aloca tanto largura de banda, ao transmitir pacotes, quanto espaço de buffer, ao decidir quais pacotes são descartados.`,
      enunciadodois: `PETERSON, L. L.; DAVIE, B. S. Redes de Computadores: uma abordagem de sistemas. Rio de Janeiro: Elsevier, 2013 (adaptado).`,
      enunciadotres: `Considerando as informações apresentadas, avalie as afirmações a seguir.`,
      enunciadoquatro: `I. O algoritmo FIFO (First-In, First-Out) é adequado para situações em que o tráfego de dados com rajadas de longa duração provoca descarte de pacotes.`,
      enunciadocinco: `II. O algoritmo de enfileiramento justo ponderado (WFQ, do inglês Weighted Fair Queuing) permite definir um peso para cada fila, definindo quantos bits são transmitidos sempre que o roteador atender a uma determinada fila.`,
      enunciadoseis: `III. O algoritmo de enfileiramento por prioridade (PQ, do inglês Priority Queuing) evita que uma fila de menor prioridade fique indefinidamente sem ser atendida (starvation), utilizando o algoritmo Round-Robin para servir a todas as filas.`,
      enunciadosete: `IV. Os roteadores que implementam o algoritmo de detecção antecipada aleatória (RED, do inglês Random Early Detection) mantêm a média acumulada do tamanho de suas filas e, quando esse tamanho ultrapassa, em algum enlace, um determinado limiar, uma fração dos pacotes é descartada aleatoriamente.`,
      enunciadooito: `É correto apenas o que se afirma em:`,
      alternativas: [
        "A) I e III.",
        "B) I e IV.",
        "C) II e IV.",
        "D) I, II e III.",
        "E) II, III e IV."
      ],
      respostaCorreta: "C) II e IV."
    },
    {
        id: 4,
        disciplina: "Engenharia Espacial",
        enunciadoum: "Os veículos espaciais apresentam estrutura externa constituída por um conjunto de blocos que formam um escudo térmico, cuja função é proteger motores e demais componentes de possíveis danos causados pelo calor, além de reduzir a temperatura interna do veículo. Esses escudos térmicos são construídos com material:",
        alternativas: [
          "A) metálico, dada sua leveza e elevada resistência ao calor.",
          "B) polimérico, dada sua baixa resistência ao calor e à corrosão.",
          "C) cerâmico poroso, dada sua elevada resistência mecânica à tração.",
          "D) polimérico, em razão de sua alta massa específica e de sua resistência ao calor.",
          "E) cerâmico poroso, em razão de seu baixo coeficiente de dilatação térmica e de sua baixa condutividade térmica."
        ],
        respostaCorreta: "E) cerâmico poroso, em razão de seu baixo coeficiente de dilatação térmica e de sua baixa condutividade térmica."
      },
      {
        id: 5,
        disciplina: "Microcontroladores",
        enunciadoum: "Um microcontrolador controla o dispositivo em que ele se encontra embutido através da sua interface de programação de aplicativos (API). Essencialmente, essa interface consiste em um conjunto de registradores de dados, de controle e de estado. Em um microcontrolador hipotético, os bits 5, 4 e 3 do registrador de controle MODOEVENTO de 16 bits controlam a configuração do tipo de evento que gera um gatilho em um pino específico, conforme a seguinte codificação binária: 000 = desabilitado; 001 = sensível a borda de subida; 010 = sensível a borda de descida; 011 = sensível a ambas as bordas; 100 = sensível a nível alto; 101 = sensível a nível baixo. O bit 0, à extrema direita, é o menos significativo, e o bit 15, o mais significativo.",
        enunciadodois: "Considerando-se essa situação e sabendo-se que, em linguagem C, os símbolos |, & e ~ correspondem aos operadores lógicos bit a bit OR, AND e NOT, respectivamente, qual instrução em C deve ser utilizada para configurar o pino, de forma que ele fique sensível a ambas as bordas?",
        alternativas: [
          "A) MODOEVENTO = 0x0018",
          "B) MODOEVENTO |= 0x0018",
          "C) MODOEVENTO &= ~0x0018",
          "D) MODOEVENTO = (MODOEVENTO | 0x0018)",
          "E) MODOEVENTO = (MODOEVENTO & ~0x0038)"
        ],
        respostaCorreta: "E) MODOEVENTO = (MODOEVENTO & ~0x0038)"
      },
      {
        id: 6,
        disciplina: "Segurança de Redes",
        enunciadoum: "Um provedor de serviços de segurança de redes e sistemas distribuídos enumerou três componentes de rede essenciais para a garantia da segurança dos dados corporativos: firewall de rede; sistemas de prevenção e detecção de intrusão; e gateways antivírus. Acerca desses componentes de rede, assinale a:",
        alternativas: [
          "A) Os gateways antivírus trabalham no nível da camada de rede e verificam o fluxo de dados em busca de assinaturas de vírus conhecidas.",
          "B) O firewall de rede deve ser configurado para detectar transferência de informação através de um canal camuflado (covert channel) baseado em túneis.",
          "C) Um firewall de camada de rede (network layer firewall) permite uma filtragem mais detalhada dos dados que um firewall de camada de aplicação (application layer firewall) ao custo de um pior desempenho.",
          "D) Os sistemas de prevenção de intrusão são vistos como uma extensão do firewall e são capazes de detectar anomalias de tráfego ou conteúdo malicioso antes que eles alcancem a rede.",
          "E) O sistema de detecção de intrusão é capaz de identificar ataques iniciados dentro da rede protegida e agir proativamente para neutralizar"
        ],
        respostaCorreta: "D) Os sistemas de prevenção de intrusão são vistos como uma extensão do firewall e são capazes de detectar anomalias de tráfego ou conteúdo malicioso antes que eles alcancem a rede."
      },
      {
        id: 7,
        disciplina: "Direito Digital",
        enunciadoum: "Considere que tenha ocorrido o vazamento de imagens íntimas, por meio de aplicativo de comunicação instantânea de celular, disponibilizado por provedor de aplicações, sem autorização das pessoas que aparecem nas imagens. Nesse contexto, de acordo com a Lei n. 12.965/2014, conhecida popularmente como Marco Civil da Internet, o provedor de aplicações de internet poderá:",
        alternativas: [
          "A) ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos.",
          "B) ser declarado inocente, caso fique provado que as imagens foram disponibilizadas à pedido da vítima.",
          "C) mover uma ação contra a vítima, pelo uso indevido de seus serviços, por ela ter disponibilizado imagens íntimas na rede.",
          "D) tornar indisponíveis todas as imagens da vítima compartilhadas e disponíveis na internet.",
          "E) encerrar seu contrato com a vítima devido à falha de segurança ocorrida."
        ],
        respostaCorreta: "A) ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos."
      },
      {
        id: 8,
        disciplina: "Engenharia de Computação",
        enunciadoum: `Alguns sistemas com memória virtual utilizam uma técnica chamada de paginação. Nesses sistemas, existe um conjunto de endereços de memória, denominados endereços virtuais, que são gerados durante a execução dos programas, com o uso de indexação, de registradores-base, de registradores-segmento ou de outras técnicas. Um endereço virtual é dividido em número de página virtual e deslocamento. O número de página virtual é usado como índice dentro da tabela de páginas para encontrar o quadro correspondente. O endereço físico de memória é a concatenação entre o endereço do quadro com o deslocamento do endereço virtual.`,
        enunciadodois: `Um mecanismo denominado TLB (do inglês, translation lookaside buffer), tipicamente implementado em hardware, fornece auxílio durante a atividade de mapeamento de endereços virtuais para endereços físicos sem passar pela tabela de página. A função do TLB é agilizar o processo de tradução de endereços lógicos para físicos.`,
        enunciadotres: `TANENBAUM, A. S. Sistemas Operacionais Modernos. 3. ed. São Paulo: Pearson Prentice Hall, 2009 (adaptado).`,
        enunciadoquatro: `Com relação à memória paginada, avalie as assertivas a seguir e a relação proposta entre elas.`,
        enunciadocinco: `I. Quando um processo é escalonado para execução, tanto a MMU (Memory Management Unit) quanto o TLB são reconfigurados para o novo processo.`,
        enunciadoseis: `PORQUE`,
        enunciadosete: `II. Para livrar-se de resíduos do processo executado anteriormente, a tabela de páginas do novo processo deve tornar-se a tabela atual, o que, em geral, é feito por meio da cópia da tabela ou de um ponteiro para ela em registradores em hardware.`,
        enunciadooito: `Assinale a opção correta.`,
        alternativas: [
          "A) I e III.",
          "B) I e IV.",
          "C) II e IV.",
          "D) I, II e III.",
          "E) II, III e IV."
        ],
        respostaCorreta: "C) II e IV."
      },
    {
        id: 9,
        disciplina: "Engenharia de Computação",
        enunciadoum: "Considere um cenário em que um computador seja organizado com múltiplos processadores, os quais compartilham a mesma memória RAM. Cada processador possui múltiplos núcleos. Nesse arranjo, o sistema operacional permite múltiplas threads, as quais podem ser dinamicamente alocadas para execução em diferentes núcleos e processadores. A partir das informações apresentadas nessa situação, assinale a opção correta.",
        alternativas: [
            "A) Sistemas com múltiplos processadores devem alocar a mesma quantidade de memória RAM para cada processador do arranjo.",
            "B) Como há múltiplos processadores, são desnecessários os semáforos, uma vez que não há acessos concorrentes a recursos compartilhados.",
            "C) Como a exclusão mútua não é possível em arquitetura de múltiplos processadores, apenas uma aplicação pode ser executada de cada vez, mas com múltiplas threads.",
            "D) Os processos que possuem múltiplas threads em execução são mantidos por meio de funções da biblioteca no código da aplicação e dispensam serviços do sistema operacional.",
            "E) Dados trocados durante a comunicação entre processos podem ser armazenados nas áreas de memória compartilhada, mas o acesso a essas áreas é intermediado pelo sistema operacional."
        ],
        respostaCorreta: "E) Dados trocados durante a comunicação entre processos podem ser armazenados nas áreas de memória compartilhada, mas o acesso a essas áreas é intermediado pelo sistema operacional."
    },
    {
        id: 10,
        disciplina: "Engenharia de Computação",
        enunciadoum: "A técnica de virtualização de hardware consiste em emular um computador no qual a camada de software é executada sem que detalhes do computador físico e de seus componentes sejam expostos. Em um ambiente de computação distribuída, a técnica pode ser útil para que o sistema operacional e os softwares do usuário sejam executados em uma máquina virtual com características permanentes, em conformidade com o que foi projetado, verificado e validado, mesmo que um computador físico diferente seja empregado. Com base nesse contexto, é correto afirmar que:",
        alternativas: [
            "A) adquirir licenças de software do usuário no volume de uma licença para cada computador físico, o que favorece a economia de licenças, pois softwares em máquinas virtuais não correspondem a cópias extras.",
            "B) utilizar um computador com capacidade extra de comunicação de dados para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais consome mais recursos de rede do que o mesmo sistema distribuído sendo executado em um computador físico.",
            "C) utilizar um computador com capacidade extra de memória principal para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais requer mais espaço de memória física do que o mesmo sistema distribuído sendo executado em um computador físico.",
            "D) adquirir computadores físicos com processadores similares para favorecer a compatibilidade, pois sistemas distribuídos fortemente acoplados compartilham recursos intensamente, funcionando de forma mais eficiente em máquinas virtuais quando os computadores físicos são compatíveis.",
            "E) adquirir dispositivos de armazenamento físico com, pelo menos, o dobro da capacidade do dispositivo virtual a ser usado a fim de favorecer a disponibilidade, pois os sistemas operacionais da máquina virtual e da máquina física devem ter espaço equivalente de dados para que exista o mapeamento direto entre o dispositivo virtual e o dispositivo físico."
        ],
        respostaCorreta: "C) utilizar um computador com capacidade extra de memória principal para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais requer mais espaço de memória física do que o mesmo sistema distribuído sendo executado em um computador físico."
    },
    {
      id: 11,
      disciplina: "Engenharia de Computação",
      enunciadoum: `O TCP (Transmission Control Protocol) e o UDP (User Datagram Protocol) são opções frequentemente usadas em sistemas distribuídos para realizar transferência de dados entre máquinas, ainda que não sejam os únicos protocolos que funcionam com base no protocolo IP (Internet Protocol).`,
      enunciadodois: `Com relação a esses protocolos, avalie as afirmações a seguir:`,
      enunciadotres: `I. O protocolo TCP é usado para implementar o mecanismo de sockets utilizado em sistemas distribuídos, como mecanismo de troca de mensagens confiável.`,
      enunciadoquatro: `II. O protocolo UDP é mais eficiente do que o protocolo TCP quanto ao tempo de envio de dados entre os nós de um sistema distribuído, pois gera menor overhead.`,
      enunciadocinco: `III. O protocolo UDP é uma escolha adequada para fluxos de dados em tempo real, especialmente daqueles dados que admitem perda ou corrupção de parte de seu conteúdo, tais como vídeos ou voz.`,
      enunciadosete: `É correto o que se afirma em:`,
      alternativas: [
        "A) II, apenas.",
        "B) III, apenas.",
        "C) I e II, apenas.",
        "D) I e III, apenas.",
        "E) I, II e III."
      ],
      respostaCorreta: "E) I, II e III."
    },
    {
        id: 12,
        disciplina: "Engenharia de Computação",
        enunciadoum: "A análise de desempenho de sistemas computacionais é uma atividade crítica para identificar gargalos, otimizar recursos e garantir a eficiência do hardware e do software utilizados. Nesse contexto, a respeito do impacto de desempenho gerado pelo número de threads e de núcleos de processamento em hardware e em software, assinale a opção correta:",
        alternativas: [
            "A) O desempenho do sistema aumenta de maneira linear em relação ao aumento do número de threads e de núcleos de processamento.",
            "B) O número de threads tem um impacto direto no desempenho do sistema, enquanto a influência do número de núcleos de processamento é insignificante.",
            "C) O desempenho do sistema é afetado positivamente pelo aumento do número de threads e de núcleos de processamento até um certo limite dependente da aplicação.",
            "D) O número de núcleos de processamento tem um impacto direto no desempenho do sistema, independentemente do número de threads utilizado.",
            "E) O número de threads e de núcleos de processamento não possui relação direta com o desempenho do sistema, pois esse resultado é determinado, exclusivamente, por técnicas e por algoritmos utilizados no software."
        ],
        respostaCorreta: "C) O desempenho do sistema é afetado positivamente pelo aumento do número de threads e de núcleos de processamento até um certo limite dependente da aplicação."
    },
    {
      id: 13,
      disciplina: "Engenharia de Computação",
      enunciadoum: `O crescimento das cidades promove o aumento da demanda por serviços de água tratada, esgotamento sanitário, manejo das águas pluviais, limpeza urbana e coleta de resíduos sólidos. No Brasil, o processo de urbanização ocorreu de forma rápida e desigual, o que resultou no agravamento de injustiças sociais e econômicas. Os serviços de saneamento básico considerados direitos humanos fundamentais não são acessíveis a uma parcela significativa da população, principalmente àquela em que se concentram os segmentos populacionais em situação de vulnerabilidade.`,
      enunciadodois: `O atendimento integral e universalizado junto às populações periféricas e em situação de vulnerabilidade constitui um grande desafio, por demandar políticas públicas e investimentos subsidiados e permanentes.`,
      enunciadotres: `Disponível em: https://www.periodicos.unimontes.br/index.php/verdegrande/article/view/6018. Acesso em: 22 jun. 2023 (adaptado).`,
      enunciadoquatro: `Acerca do saneamento básico no Brasil, avalie as afirmações a seguir.`,
      enunciadocinco: `I. A grave desigualdade social, evidenciada pela segregação nos espaços urbanos, é uma das barreiras para a universalização do acesso aos serviços de saneamento básico.`,
      enunciadoseis: `II. O serviço de abastecimento de água no Brasil situa-se no mesmo patamar de fornecimento e de infraestrutura que o sistema de coleta e tratamento de esgoto.`,
      enunciadosete: `III. A universalização do acesso aos serviços de saneamento básico requer investimentos em políticas públicas e em tecnologias sociais que priorizem a democratização e o atendimento às populações em situação de vulnerabilidade.`,
      enunciadooito: `IV. O aumento da incidência de doenças transmitidas pela água resulta não somente da inadequação dos serviços de saneamento, mas também da precariedade das condições de moradia da população em situação de vulnerabilidade.`,
      enunciadonove: `É correto apenas o que se afirma em:`,
      alternativas: [
        "A) I e II.",
        "B) I e IV.",
        "C) II e III.",
        "D) I, III e IV.",
        "E) II, III e IV."
      ],
      respostaCorreta: "D) I, III e IV."
    },
    {
      id: 14,
      disciplina: "Engenharia de Controle",
      enunciadoum: `Considere que uma empresa planeje desenvolver um sistema de controle automático para manter, em um ambiente industrial, a temperatura constante por meio de um controlador proporcional-integral-derivativo (PID). O controlador PID pode ser implementado em qualquer linguagem que possua estruturas de dados adequadas para a manutenção do histórico e da taxa de mudança do sinal de erro.`,
      enunciadodois: `Considerando essa situação, avalie as afirmações a seguir.`,
      enunciadotres: `I. A implementação do componente Integral requer a soma de todos os erros acumulados desde o início da operação do sistema, o que torna necessário o uso de uma estrutura de dados do tipo fila.`,
      enunciadoquatro: `II. A parte Proporcional do controlador PID é implementada ao ajustar, proporcionalmente, a variável de controle à diferença entre a temperatura desejada e a temperatura atual.`,
      enunciadocinco: `III. Uma pilha é adequada para o componente Derivativo, pois a taxa de mudança do erro é calculada apenas com a amostra mais recente e a anterior do sinal de erro.`,
      enunciadoseis: `É correto o que se afirma em:`,
      alternativas: [
        "A) I, apenas.",
        "B) II, apenas.",
        "C) I e III, apenas.",
        "D) II e III, apenas.",
        "E) I, II e III."
      ],
      respostaCorreta: "D) II e III, apenas."
    },
    {
      id: 15,
      disciplina: "Engenharia de Computação",
      enunciadoum: `O protocolo de roteamento interno OSPF (open shortest path first) representa um sistema autônomo (SA) como um grafo ponderado, em que roteadores são os vértices, conexões entre os roteadores são as arestas e atrasos nas conexões são os pesos.`,
      enunciadodois: `No OSPF, a identificação de cada conexão e seu respectivo atraso são passados de roteador em roteador até que todos os roteadores formem uma base de dados com o grafo que descreve o SA. O OSPF utiliza uma versão distribuída do algoritmo de caminhos mínimos de Dijkstra para computar as melhores rotas para todos os possíveis destinos e para produzir as tabelas de rotas para cada roteador. Cada rota computada é a que apresenta o menor valor para a soma dos atrasos nas conexões usadas na rota entre a rede de origem e a rede de destino.`,
      enunciadotres: `Acerca do protocolo OSPF e com base nas informações apresentadas no texto, avalie as afirmações a seguir.`,
      enunciadoquatro: `I. Quando há diferentes caminhos possíveis entre uma origem e um destino, a rota selecionada é a que apresenta o menor número de conexões.`,
      enunciadocinco: `II. Há uma instância da base de dados relativa a conexões e a atrasos, formando o grafo que descreve o SA em cada roteador que compõe o SA.`,
      enunciadoseis: `III. O algoritmo de Dijkstra é executado por um único roteador dentro do SA e a tabela de rotas resultante é passada para todos os roteadores no SA.`,
      enunciadosete: `IV. Para todos os roteadores dentro de um SA, há a necessidade de tráfego de informações acerca de atrasos e de conexões entre roteadores.`,
      enunciadooito: `É correto apenas o que se afirma em:`,
      alternativas: [
        "A) I e III.",
        "B) II e III.",
        "C) I e IV.",
        "D) II e IV.",
        "E) III e IV."
      ],
      respostaCorreta: "C) II e IV."
    },
    {
      id: 16,
      disciplina: "Engenharia de Computação",
      enunciadoum: `Computação em nuvem representa um conceito relativo ao compartilhamento de recursos, tais como capacidade de processamento, armazenamento, comunicação de dados e pessoal qualificado para manter sistemas computacionais disponíveis na internet.`,
      enunciadodois: `Quando esse compartilhamento constitui um serviço disponível para qualquer pessoa, o serviço é conhecido como nuvem pública. Quando as mesmas tecnologias são empregadas para uma única empresa, não permitindo que terceiros utilizem parte dos recursos, temos uma nuvem privada.`,
      enunciadotres: `Considerando as vantagens que o gerente de uma empresa espera obter na contratação de um serviço de nuvem pública, avalie as afirmações a seguir.`,
      enunciadoquatro: `I. Um serviço de nuvem pública proporciona a redução de custos operacionais, pois é possível dimensionar a necessidade desses recursos com base na demanda, visto que há momentos em que a empresa precisa de mais recursos e há momentos em que ela precisa de menos recursos.`,
      enunciadocinco: `II. Um serviço de nuvem pública gera aumento da velocidade de execução do software e de acesso ao software a partir de qualquer localidade, pois a nuvem pública garante acesso rápido em qualquer parte do mundo, o que contrasta com um servidor localizado na cidade da empresa.`,
      enunciadoseis: `III. Um serviço de nuvem pública viabiliza a redução do investimento inicial com equipamentos, com infraestrutura e com pessoal para iniciar a operação, visto que torna possível adiar a instalação desses recursos na empresa até que a operação se demonstre economicamente viável.`,
      enunciadosete: `IV. Um serviço de nuvem pública propicia aumento de segurança da informação, pois as rotinas de segurança são responsabilidade do administrador da nuvem pública, não do contratante, o que contrasta com um servidor localizado dentro da empresa.`,
      enunciadooito: `É correto apenas o que se afirma em:`,
      alternativas: [
        "A) I e II.",
        "B) I e III.",
        "C) II e IV.",
        "D) III e IV.",
        "E) II, III e IV."
      ],
      respostaCorreta: "D) I, III e IV."
    },
    {
      id: 17,
      disciplina: "Engenharia de Computação",
      enunciadoum: `A Inteligência Artificial (IA) generativa é capaz de criar novos dados, únicos, que possibilitam aprender por conta própria, indo além do que a tecnologia tradicional proporciona, visto que esta precisa de intervenção humana. Um exemplo da IA generativa é o ChatGPT, que pode gerar imagens, músicas e textos completamente novos. Entre outras coisas, por meio da IA generativa, é possível elaborar modelos de previsão de testes clínicos, realizar a identificação de padrões em exames médicos e, ainda, auxiliar no diagnóstico de doenças.`,
      enunciadodois: `Disponível em: https://olhardigital.com.br/2023/07/12/internet-e-redes-sociais/ inteligencia-artificial-generativa-o-que-e-como-funciona-e-onde-usar/. Acesso em: 2 ago. 2023 (adaptado).`,
      enunciadotres: `Acredita-se que a tecnologia de IA generativa será disruptiva e, portanto, capaz de alterar drasticamente a maneira como o ser humano se relaciona com as máquinas. O uso da IA generativa pode causar importante revolução no segmento de produção de conteúdo. Muitas dessas consequências poderão ser maléficas para diversos setores da sociedade. Além do mau uso dessa tecnologia e das questões éticas, avalia-se que ela pode agravar a desigualdade econômico-social, tanto entre nações quanto entre indivíduos da mesma nação.`,
      enunciadoquatro: `Disponível em: https://canaltech.com.br/inteligencia-artificial/o-que-e-ia-generativa/. Acesso em: 2 ago. 2023 (adaptado).`,
      enunciadocinco: `Considerando os textos apresentados, é correto afirmar que a IA generativa`,
      alternativas: [
        "A) proporciona novos recursos de linguagem que geram tecnologias capazes de realizar interações próprias dos seres humanos.",
        "B) restringe o aprendizado ao que é legalmente estabelecido e útil ao ser humano, o que facilita seu modo de agir no mundo do conhecimento e do trabalho.",
        "C) promove a igualdade econômico-social ao substituir o ser humano no exercício de profissões cujas atividades sejam repetitivas e exijam pouco conhecimento.",
        "D) gera pouco impacto socioeconômico em países com elevado desenvolvimento tecnológico, pois, neles, os processos de criação e inovação já estão bem consolidados.",
        "E) estimula o desenvolvimento intelectual dos seres humanos, uma vez que ela assume parte do conhecimento, resolvendo problemas antes delegados a especialistas."
      ],
      respostaCorreta: "A) proporciona novos recursos de linguagem que geram tecnologias capazes de realizar interações próprias dos seres humanos."
    },
    {
      id: 18,
      disciplina: "Engenharia de Computação",
      enunciadoum: `Um sinal em tempo contínuo pode ser processado, a partir de suas amostras, por um sistema que opere em tempo discreto. Para isso, é importante manter a taxa de amostragem do sinal suficientemente alta para permitir a reconstrução do sinal original sem erro ou com um erro dentro de uma dada tolerância.`,
      enunciadodois: `Nesse contexto, considerando o teorema da amostragem, avalie as asserções a seguir e a relação proposta entre elas.`,
      enunciadotres: `I. Para que um sinal contínuo seja reconstruído a partir de suas amostras é necessário que ele possua um espectro em frequência limitado e que a frequência de amostragem seja maior do que duas vezes a largura de faixa do sinal.`,
      enunciadoquatro: `PORQUE`,
      enunciadocinco: `II. Na situação proposta, o espectro do sinal amostrado, será limitado em frequência, o que permitirá a reconstrução do sinal original antes da amostragem.`,
      alternativas: [
        "A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        "B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
        "C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        "D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
        "E) As asserções I e II são proposições falsas."
      ],
      respostaCorreta: "C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
    },
    {
      id: 19,
      disciplina: "Engenharia de Computação",
      enunciadoum: `Os sistemas distribuídos consistem em múltiplos componentes de software que se comunicam e que cooperam entre si para realizar tarefas complexas. Um padrão arquitetural comumente utilizado em sistemas distribuídos é o de microsserviços, o qual divide o sistema em componentes independentes e escaláveis, cada um executando sua própria funcionalidade específica. Essa abordagem facilita a manutenção, o teste e a escalabilidade do sistema como um todo.`,
      enunciadodois: `Em relação a esse tema, qual dos seguintes benefícios é associado à arquitetura de microsserviços em sistemas distribuídos?`,
      alternativas: [
        "A) Capacidade de escalabilidade.",
        "B) Garantia de consistência de dados.",
        "C) Melhor desempenho de processamento.",
        "D) Menor consumo de recursos de hardware.",
        "E) Redução da complexidade de comunicação entre os componentes."
      ],
      respostaCorreta: "A) Capacidade de escalabilidade."
    },
    {
      id: 20,
      disciplina: "Engenharia de Computação",
      enunciadoum: "No Brasil, os idosos têm sido cada vez mais obrigados a permanecer no trabalho formal ou informal, mesmo após a aposentadoria, visto que os recursos provenientes desta, na maioria dos casos, são insuficientes para a manutenção dos indivíduos. Um fator que pode ter agravado essa situação foi a aprovação da reforma previdenciária de 2019, que modificou as regras de idade e contribuição para o acesso ao direito ao benefício da aposentadoria. Tal mudança pode ter resultado em um número ainda maior de idosos que disputam com as populações jovens e com sistemas de automação, no mercado atual, o trabalho precarizado. Essa situação contribui para o acirramento do preconceito contra essa faixa etária, denominado etarismo.",
      enunciadodois: "Considerando o texto apresentado, avalie as afirmações a seguir.",
      enunciadotres: "I. O conceito de etarismo fundamenta-se no fato de os idosos terem capacidade de trabalho reduzida e imporem custo elevado à previdência social, o que compromete a sua sustentabilidade econômica.",
      enunciadoquatro: "II. As ações legislativas que visem ao prolongamento do tempo de atuação da população idosa no mercado de trabalho devem ser acompanhadas por uma política de promoção da saúde e da qualidade de vida.",
      enunciadocinco: "III. As ações intergeracionais no mercado de trabalho têm como premissa o desenvolvimento de tecnologias que dotem o idoso de capacidade de trabalho equivalente à de seus colegas jovens.",
      enunciadoseis: "É correto o que se afirma em:",
      alternativas: [
        "A) II, apenas.",
        "B) III, apenas.",
        "C) I e II, apenas.",
        "D) I e III, apenas.",
        "E) I, II e III."
      ],
      respostaCorreta: "A) II, apenas."
    },
    {
      "id": 21,
      disciplina: "Engenharia de Computação",
      enunciadoum: "A segurança de sistemas de computação é uma preocupação crescente devido à constante evolução das ameaças e das vulnerabilidades presentes no ambiente digital. Garantir a integridade, a confidencialidade e a disponibilidade de dados e de recursos é essencial para proteger os sistemas e as informações sensíveis. A segurança abrange, também, aspectos como autenticação, controle de acesso, criptografia, detecção e prevenção de intrusões, entre outros mecanismos de proteção.",
      enunciadodois: "A respeito da segurança de sistemas de computação, avalie as afirmações a seguir.",
      enunciadotres: "I. A criptografia é um mecanismo que permite detectar a vulnerabilidade dos dados, tornando-os ilegíveis para usuários não autorizados.",
      enunciadoquatro: "II. A auditoria de segurança é o processo de verificação de identidade de um usuário ou de um sistema, garantindo que apenas entidades confiáveis tenham acesso aos recursos.",
      enunciadocinco: "III. O controle de acesso consiste em definir e em gerenciar as permissões de usuários e de sistemas para acessar recursos e para realizar operações específicas.",
      enunciadoseis: "IV. A detecção e a prevenção de intrusão são técnicas utilizadas para identificar atividades maliciosas em um sistema e para tomar medidas a fim de evitar a ocorrência dessas atividades.",
      enunciadosete: "É correto apenas o que se afirma em:",
      alternativas: [
        "A) I e II.",
        "B) I e IV.",
        "C) III e IV.",
        "D) II e III.",
        "E) III, IV e I."
      ],
      respostaCorreta: "C) III e IV."
    }
  ];
  
  export default questoesSimulado;