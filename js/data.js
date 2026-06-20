/*
 * data.js
 * Conteudo trilingue (PT/ES/EN) do site de apresentacao do mestrado.
 * Fonte: dissertacao "Do estado desejado ao estado operacional" (Jeronimo Menezes, UNIPAMPA, 2026)
 * e repositorios publicos da organizacao net2d-community.
 *
 * Estrutura: SITE[lang] = { meta, nav, home, phases:[...], product, footer }
 * Cada fase tem: id, year, venue, short, title, objectives[], tools[], results[], fit
 */

const REPOS = {
  net2d: "https://github.com/net2d-community/net2d",
  dsm2cli: "https://github.com/net2d-community/dsm2cli",
  bench: "https://github.com/net2d-community/dsm2cli-bench",
  wiarc: "https://github.com/net2d-community/wiarc2026-experiment",
  org: "https://github.com/orgs/net2d-community/repositories"
};

const SITE = {
  /* =========================== PORTUGUES =========================== */
  pt: {
    meta: { lang: "pt", label: "PT", dir: "ltr" },
    nav: {
      brand: "Net2d",
      home: "Inicio",
      timeline: "Trajetoria",
      architecture: "Arquitetura",
      product: "Produto final",
      backHome: "Voltar ao inicio"
    },
    home: {
      kicker: "Dissertacao de Mestrado · PPGES · UNIPAMPA · 2026",
      title: "Do estado desejado ao estado operacional",
      subtitle: "Um ecossistema modular para automacao observavel e reprodutivel de redes heterogeneas",
      author: "Jeronimo Soares de Castro Menezes",
      advisors: "Orientacao: Diego Kreutz e Rodrigo Brandao Mansilha",
      lede: "Este site apresenta a trajetoria de pesquisa do mestrado de Jeronimo como uma sequencia de fases. Cada fase corresponde a um artigo publicado ou submetido e a uma ferramenta do ecossistema Net2d. Em conjunto, elas constroem, de forma incremental, uma cadeia de software que transforma o estado desejado da rede, registrado em uma Fonte de Verdade, em configuracoes operacionalizaveis em dispositivos e servicos heterogeneos.",
      ctaTimeline: "Explorar a trajetoria",
      ctaArch: "Ver a arquitetura",
      problemTitle: "O problema",
      problem: "Redes institucionais reunem dispositivos, servicos e fabricantes de muitas geracoes. Manter coerencia entre o que foi planejado, o que esta documentado e o que esta realmente configurado e dificil e propenso a erros. A pergunta central da pesquisa: como conceber, implementar e avaliar um ecossistema modular, logicamente centralizado e observavel que organize a passagem do estado desejado para configuracoes operacionalizaveis em redes heterogeneas?",
      axisTitle: "O eixo organizador",
      axisDesired: "Estado desejado",
      axisDesiredDesc: "O que a rede deve ser: enderecos, interfaces, VLANs, politicas, reservas e servicos, registrados em uma Fonte de Verdade da Rede.",
      axisOperational: "Estado operacional",
      axisOperationalDesc: "O que esta efetivamente configurado nos dispositivos e servicos. A automacao e o esforco de transformar, manter e verificar a relacao entre os dois.",
      archTitle: "Como tudo se encaixa",
      archLede: "A figura abaixo integra todas as pecas, fases e ferramentas. O net2d atua como orquestrador logicamente centralizado. A Fonte de Verdade da Rede e a origem autoritativa do estado desejado; os dispositivos e servicos sao os alvos operacionais. Clique em um componente ou em uma fase para abrir os detalhes.",
      archChainTitle: "A cadeia conceitual",
      timelineTitle: "Trajetoria em seis fases",
      timelineLede: "Da automacao baseada em Fonte de Verdade da Rede ate o benchmark semantico reprodutivel. Escolha uma fase para ver objetivos, ferramentas e resultados.",
      threeMovesTitle: "Tres movimentos complementares",
      threeMoves: [
        { t: "Arquitetural", d: "De uma integracao com a Fonte de Verdade da Rede para uma arquitetura modular de servicos especializados." },
        { t: "Metodologico", d: "A traducao evolui de codigo e templates para DSMs, modelos de linguagem, avaliacao semantica e benchmark." },
        { t: "Experimental", d: "De provas de conceito para protocolos comparaveis e reprodutiveis, com artefatos preservados." }
      ]
    },
    phaseUi: {
      objectives: "Objetivos",
      tools: "Ferramenta(s) desenvolvida(s)",
      results: "Resultados atingidos",
      fit: "Como esta fase se encaixa no todo",
      venue: "Publicacao",
      repo: "Repositorio",
      prev: "Fase anterior",
      next: "Proxima fase",
      phaseOf: "Fase {n} de 6",
      allPhases: "Todas as fases"
    },
    product: {
      title: "O produto final: o ecossistema Net2d",
      lede: "O produto tecnico-cientifico consolidado e o ecossistema Net2d: uma composicao modular de servicos, contratos e artefatos. Logicamente centralizado (uma Fonte de Verdade da Rede como referencia autoritativa) e operacionalmente modular (servicos que evoluem de forma independente).",
      chain: "Fonte de Verdade da Rede → DSM → traducao → avaliacao semantica → artefatos → execucao controlada",
      components: [
        { name: "net2d", role: "Orquestrador logicamente centralizado: recebe eventos, cria execucoes rastreaveis (PipelineRun) e articula os demais servicos.", repo: REPOS.net2d },
        { name: "nsot2dsm", role: "Normaliza dados e eventos da Fonte de Verdade da Rede em modelos estruturados de estado desejado (DSM).", repo: null },
        { name: "dsm2cli", role: "Traduz DSMs em CLI multivendor e realiza avaliacao semantica independente com votos, vereditos e evidencias.", repo: REPOS.dsm2cli },
        { name: "cli2exec", role: "Apoia a execucao controlada dos comandos em dispositivos, preservando saidas, falhas e evidencias operacionais.", repo: null },
        { name: "dsm2cli-bench", role: "Organiza experimentos reprodutiveis: cenarios, perfis, repeticoes, juizes fixos e taxonomia de falhas.", repo: REPOS.bench }
      ],
      instTitle: "Adocao institucional e transferencia tecnologica",
      inst: "Principios do ecossistema foram aplicados na UFRGS, com destaque para a modernizacao do servico DHCP. Nesse arranjo, o CASCO atua como governanca, o Netbox como Fonte de Verdade da Rede, o netbox2kea3 como integracao e o Kea como servico operacional (DHCPv4/DHCPv6). Validacoes laboratoriais cobriram switches H3C, Huawei e Cisco IOS.",
      scopeTitle: "Escopo e limitacoes",
      scope: "A contribuicao empirica mais aprofundada concentra-se na representacao DSM, na traducao DSM-CLI e na avaliacao semantica independente. A execucao controlada integra a arquitetura, mas reconciliacao completa de estado, checkpoint e rollback permanecem como direcoes de evolucao. A avaliacao semantica por juizes LLM apoia inspecao e comparacao; nao substitui verificacao formal, testes em dispositivos reais nem revisao humana."
    },
    footer: {
      text: "Ecossistema Net2d · Programa de Pos-Graduacao em Engenharia de Software (PPGES) · Universidade Federal do Pampa (UNIPAMPA) · Alegrete, 2026",
      repos: "Repositorios da organizacao"
    }
  },

  /* =========================== ESPANOL =========================== */
  es: {
    meta: { lang: "es", label: "ES", dir: "ltr" },
    nav: {
      brand: "Net2d",
      home: "Inicio",
      timeline: "Trayectoria",
      architecture: "Arquitectura",
      product: "Producto final",
      backHome: "Volver al inicio"
    },
    home: {
      kicker: "Tesis de Maestria · PPGES · UNIPAMPA · 2026",
      title: "Del estado deseado al estado operacional",
      subtitle: "Un ecosistema modular para la automatizacion observable y reproducible de redes heterogeneas",
      author: "Jeronimo Soares de Castro Menezes",
      advisors: "Direccion: Diego Kreutz y Rodrigo Brandao Mansilha",
      lede: "Este sitio presenta la trayectoria de investigacion de la maestria de Jeronimo como una secuencia de fases. Cada fase corresponde a un articulo publicado o enviado y a una herramienta del ecosistema Net2d. En conjunto, construyen de forma incremental una cadena de software que transforma el estado deseado de la red, registrado en una Fuente de Verdad, en configuraciones operacionalizables en dispositivos y servicios heterogeneos.",
      ctaTimeline: "Explorar la trayectoria",
      ctaArch: "Ver la arquitectura",
      problemTitle: "El problema",
      problem: "Las redes institucionales reunen dispositivos, servicios y fabricantes de muchas generaciones. Mantener la coherencia entre lo planificado, lo documentado y lo realmente configurado es dificil y propenso a errores. La pregunta central de la investigacion: como concebir, implementar y evaluar un ecosistema modular, logicamente centralizado y observable que organice el paso del estado deseado a configuraciones operacionalizables en redes heterogeneas?",
      axisTitle: "El eje organizador",
      axisDesired: "Estado deseado",
      axisDesiredDesc: "Lo que la red debe ser: direcciones, interfaces, VLANs, politicas, reservas y servicios, registrados en una Fuente de Verdad de la Red.",
      axisOperational: "Estado operacional",
      axisOperationalDesc: "Lo que esta efectivamente configurado en los dispositivos y servicios. La automatizacion es el esfuerzo de transformar, mantener y verificar la relacion entre ambos.",
      archTitle: "Como encaja todo",
      archLede: "La figura siguiente integra todas las piezas, fases y herramientas. net2d actua como orquestador logicamente centralizado. La Fuente de Verdad de la Red es el origen autoritativo del estado deseado; los dispositivos y servicios son los objetivos operacionales. Haz clic en un componente o en una fase para abrir los detalles.",
      archChainTitle: "La cadena conceptual",
      timelineTitle: "Trayectoria en seis fases",
      timelineLede: "De la automatizacion basada en Fuente de Verdad de la Red hasta el benchmark semantico reproducible. Elige una fase para ver objetivos, herramientas y resultados.",
      threeMovesTitle: "Tres movimientos complementarios",
      threeMoves: [
        { t: "Arquitectonico", d: "De una integracion con la Fuente de Verdad de la Red a una arquitectura modular de servicios especializados." },
        { t: "Metodologico", d: "La traduccion evoluciona de codigo y plantillas a DSMs, modelos de lenguaje, evaluacion semantica y benchmark." },
        { t: "Experimental", d: "De pruebas de concepto a protocolos comparables y reproducibles, con artefactos preservados." }
      ]
    },
    phaseUi: {
      objectives: "Objetivos",
      tools: "Herramienta(s) desarrollada(s)",
      results: "Resultados alcanzados",
      fit: "Como encaja esta fase en el conjunto",
      venue: "Publicacion",
      repo: "Repositorio",
      prev: "Fase anterior",
      next: "Fase siguiente",
      phaseOf: "Fase {n} de 6",
      allPhases: "Todas las fases"
    },
    product: {
      title: "El producto final: el ecosistema Net2d",
      lede: "El producto tecnico-cientifico consolidado es el ecosistema Net2d: una composicion modular de servicios, contratos y artefactos. Logicamente centralizado (una Fuente de Verdad de la Red como referencia autoritativa) y operacionalmente modular (servicios que evolucionan de forma independiente).",
      chain: "Fuente de Verdad de la Red → DSM → traduccion → evaluacion semantica → artefactos → ejecucion controlada",
      components: [
        { name: "net2d", role: "Orquestador logicamente centralizado: recibe eventos, crea ejecuciones rastreables (PipelineRun) y articula los demas servicios.", repo: REPOS.net2d },
        { name: "nsot2dsm", role: "Normaliza datos y eventos de la Fuente de Verdad de la Red en modelos estructurados de estado deseado (DSM).", repo: null },
        { name: "dsm2cli", role: "Traduce DSMs en CLI multivendor y realiza evaluacion semantica independiente con votos, veredictos y evidencias.", repo: REPOS.dsm2cli },
        { name: "cli2exec", role: "Apoya la ejecucion controlada de los comandos en dispositivos, preservando salidas, fallos y evidencias operacionales.", repo: null },
        { name: "dsm2cli-bench", role: "Organiza experimentos reproducibles: escenarios, perfiles, repeticiones, jueces fijos y taxonomia de fallos.", repo: REPOS.bench }
      ],
      instTitle: "Adopcion institucional y transferencia tecnologica",
      inst: "Principios del ecosistema se aplicaron en la UFRGS, con enfasis en la modernizacion del servicio DHCP. En ese arreglo, CASCO actua como gobernanza, Netbox como Fuente de Verdad de la Red, netbox2kea3 como integracion y Kea como servicio operacional (DHCPv4/DHCPv6). Las validaciones de laboratorio cubrieron switches H3C, Huawei y Cisco IOS.",
      scopeTitle: "Alcance y limitaciones",
      scope: "La contribucion empirica mas profunda se concentra en la representacion DSM, la traduccion DSM-CLI y la evaluacion semantica independiente. La ejecucion controlada integra la arquitectura, pero la reconciliacion completa de estado, checkpoint y rollback siguen siendo direcciones de evolucion. La evaluacion semantica por jueces LLM apoya la inspeccion y la comparacion; no sustituye la verificacion formal, las pruebas en dispositivos reales ni la revision humana."
    },
    footer: {
      text: "Ecosistema Net2d · Programa de Posgrado en Ingenieria de Software (PPGES) · Universidad Federal de Pampa (UNIPAMPA) · Alegrete, 2026",
      repos: "Repositorios de la organizacion"
    }
  },

  /* =========================== ENGLISH =========================== */
  en: {
    meta: { lang: "en", label: "EN", dir: "ltr" },
    nav: {
      brand: "Net2d",
      home: "Home",
      timeline: "Journey",
      architecture: "Architecture",
      product: "Final product",
      backHome: "Back to home"
    },
    home: {
      kicker: "Master's Dissertation · PPGES · UNIPAMPA · 2026",
      title: "From desired state to operational state",
      subtitle: "A modular ecosystem for observable and reproducible automation of heterogeneous networks",
      author: "Jeronimo Soares de Castro Menezes",
      advisors: "Advisors: Diego Kreutz and Rodrigo Brandao Mansilha",
      lede: "This site presents Jeronimo's master's research as a sequence of phases. Each phase maps to a published or submitted paper and to a tool of the Net2d ecosystem. Together they incrementally build a software chain that turns the network's desired state, stored in a Source of Truth, into operational configurations applied to heterogeneous devices and services.",
      ctaTimeline: "Explore the journey",
      ctaArch: "See the architecture",
      problemTitle: "The problem",
      problem: "Institutional networks combine devices, services and vendors from many generations. Keeping coherence between what was planned, what is documented and what is actually configured is hard and error-prone. The core research question: how to design, implement and evaluate a modular, logically centralized and observable ecosystem that organizes the path from desired state to operational configurations in heterogeneous networks?",
      axisTitle: "The organizing axis",
      axisDesired: "Desired state",
      axisDesiredDesc: "What the network should be: addresses, interfaces, VLANs, policies, reservations and services, stored in a Network Source of Truth.",
      axisOperational: "Operational state",
      axisOperationalDesc: "What is actually configured on devices and services. Automation is the effort to transform, maintain and verify the relationship between the two.",
      archTitle: "How it all fits together",
      archLede: "The figure below integrates all pieces, phases and tools. net2d acts as a logically centralized orchestrator. The Network Source of Truth is the authoritative origin of the desired state; devices and services are the operational targets. Click a component or a phase to open its details.",
      archChainTitle: "The conceptual chain",
      timelineTitle: "A journey in six phases",
      timelineLede: "From Source-of-Truth-based automation to a reproducible semantic benchmark. Pick a phase to see its goals, tools and results.",
      threeMovesTitle: "Three complementary movements",
      threeMoves: [
        { t: "Architectural", d: "From an integration with the Network Source of Truth to a modular architecture of specialized services." },
        { t: "Methodological", d: "Translation evolves from code and templates to DSMs, language models, semantic assessment and benchmarking." },
        { t: "Experimental", d: "From proofs of concept to comparable, reproducible protocols with preserved artifacts." }
      ]
    },
    phaseUi: {
      objectives: "Goals",
      tools: "Tool(s) developed",
      results: "Results achieved",
      fit: "How this phase fits the whole",
      venue: "Publication",
      repo: "Repository",
      prev: "Previous phase",
      next: "Next phase",
      phaseOf: "Phase {n} of 6",
      allPhases: "All phases"
    },
    product: {
      title: "The final product: the Net2d ecosystem",
      lede: "The consolidated technical-scientific product is the Net2d ecosystem: a modular composition of services, contracts and artifacts. Logically centralized (a Network Source of Truth as authoritative reference) and operationally modular (services that evolve independently).",
      chain: "Network Source of Truth → DSM → translation → semantic assessment → artifacts → controlled execution",
      components: [
        { name: "net2d", role: "Logically centralized orchestrator: receives events, creates traceable runs (PipelineRun) and coordinates the other services.", repo: REPOS.net2d },
        { name: "nsot2dsm", role: "Normalizes data and events from the Network Source of Truth into structured desired-state models (DSM).", repo: null },
        { name: "dsm2cli", role: "Translates DSMs into multivendor CLI and performs independent semantic assessment with votes, verdicts and evidence.", repo: REPOS.dsm2cli },
        { name: "cli2exec", role: "Supports controlled execution of commands on devices, preserving outputs, failures and operational evidence.", repo: null },
        { name: "dsm2cli-bench", role: "Organizes reproducible experiments: scenarios, profiles, repetitions, fixed judges and a failure taxonomy.", repo: REPOS.bench }
      ],
      instTitle: "Institutional adoption and technology transfer",
      inst: "Ecosystem principles were applied at UFRGS, notably in modernizing the DHCP service. There, CASCO acts as governance, Netbox as the Network Source of Truth, netbox2kea3 as integration, and Kea as the operational service (DHCPv4/DHCPv6). Lab validations covered H3C, Huawei and Cisco IOS switches.",
      scopeTitle: "Scope and limitations",
      scope: "The deepest empirical contribution focuses on DSM representation, DSM-to-CLI translation and independent semantic assessment. Controlled execution is part of the architecture, but full state reconciliation, checkpointing and rollback remain future directions. LLM-based semantic assessment supports inspection and comparison; it does not replace formal verification, testing on real devices or human review."
    },
    footer: {
      text: "Net2d ecosystem · Software Engineering Graduate Program (PPGES) · Federal University of Pampa (UNIPAMPA) · Alegrete, 2026",
      repos: "Organization repositories"
    }
  }
};

/* ============================ FASES ============================ */
/* Cada fase em 3 idiomas. Mantidas em estrutura paralela por id. */

const PHASES = {
  pt: [
    {
      id: 1, year: "2024", venue: "XXI ERRC 2024", venueFull: "XXI Escola Regional de Redes de Computadores (ERRC 2024) · doi:10.5753/errc.2024.4692",
      tag: "SoT", color: "p1",
      short: "Arquitetura inicial baseada na Fonte de Verdade da Rede",
      title: "Gerenciamento de servicos e dispositivos de rede a partir da Fonte de Verdade da Rede (SoT)",
      summary: "O ponto de partida: usar a Fonte de Verdade da Rede como referencia central do estado desejado e acionar, a partir dela, a automacao de dispositivos e servicos.",
      objectives: [
        "Reduzir a dispersao de informacoes operacionais entre planilhas, sistemas legados e conhecimento tacito.",
        "Transformar a Fonte de Verdade da Rede de documentacao passiva em parte de um fluxo operacional.",
        "Organizar a automacao como uma cadeia de software em camadas, com responsabilidades separadas."
      ],
      tools: [
        { name: "Prototipo Net2d (inicial)", desc: "Integracao de ferramentas de codigo aberto (Netbox, Django REST Framework e bibliotecas de automacao) para refletir alteracoes da Fonte de Verdade no ambiente operacional.", repo: REPOS.net2d }
      ],
      results: [
        "Prototipo funcional demonstrando viabilidade da abordagem.",
        "Experimento comparando configuracao manual versus automatizada, com ganhos operacionais na ativacao e documentacao de redes.",
        "Identificacao das limitacoes (sem DSMs, sem avaliacao semantica, sem benchmark) que motivaram os trabalhos seguintes."
      ],
      fit: "Marco inicial da trajetoria. Introduz o eixo conceitual que orienta toda a dissertacao: a passagem do estado desejado ao estado operacional. A organizacao em camadas (aplicacao, Fonte de Verdade, interface de servico, traducao, conectores, objetos gerenciados) antecipa a visao modular consolidada depois no ecossistema Net2d."
    },
    {
      id: 2, year: "2025", venue: "SBRC-SF 2025", venueFull: "Salao de Ferramentas do SBRC 2025",
      tag: "SSoT", color: "p2",
      short: "TrueState-SNA e generalizacao baseada em SSoT",
      title: "TrueState-SNA: uma solucao baseada em SSoT para automacao de redes heterogeneas",
      summary: "Generaliza e nomeia a arquitetura: uma solucao aberta, modular e extensivel baseada em Fonte Unica de Verdade (SSoT), com a traducao ganhando relevancia propria.",
      objectives: [
        "Consolidar a automacao baseada em Fonte de Verdade da Rede como solucao em camadas, aberta e extensivel.",
        "Reduzir a dependencia de fornecedores especificos com software de codigo aberto.",
        "Padronizar a geracao de configuracoes na camada de traducao."
      ],
      tools: [
        { name: "TrueState-SNA", desc: "Cadeia de automacao integrando Netbox (SSoT), Net2d e Ansible. Passa a usar templates Jinja e playbooks Ansible para padronizar a geracao de configuracoes.", repo: REPOS.net2d }
      ],
      results: [
        "Experimento de configuracao de enderecamento IPv4 e IPv6 em roteadores, comparando execucao manual e automatizada.",
        "Reducao de esforco operacional, com vantagem crescente em cenarios que exigem mais comandos.",
        "Evidencia de um novo desafio: a manutencao de templates especificos cresce com fabricantes, servicos e cenarios."
      ],
      fit: "Etapa de consolidacao arquitetural e transicao metodologica. Mantem o eixo estado desejado -> estado operacional, mas a camada de traducao deixa de ser detalhe interno e passa a ser objeto de investigacao. Esse deslocamento motiva diretamente o uso posterior de DSMs, modelos de linguagem e avaliacao semantica."
    },
    {
      id: 3, year: "2025", venue: "SBSeg 2025", venueFull: "SBSeg 2025",
      tag: "Firewalls", color: "p3",
      short: "DynSecNet e automacao reativa de firewalls",
      title: "Gerenciamento integrado e adaptativo de firewalls baseado na SSoT da rede",
      summary: "Leva a arquitetura ao dominio de seguranca: politicas de firewall como estado desejado, com reatividade a eventos operacionais e de seguranca.",
      objectives: [
        "Aplicar a cadeia estado desejado-traducao-execucao a politicas de firewall.",
        "Introduzir operacao orientada por eventos (reatividade operacional, nao autonomia preditiva).",
        "Manter as politicas de seguranca vinculadas a Fonte de Verdade, favorecendo rastreabilidade e inspecao."
      ],
      tools: [
        { name: "DynSecNet", desc: "Solucao em camadas (Fonte Unica de Verdade, controle, traducao, execucao) que reage a eventos registrados na SSoT ou notificados por sistemas externos e aplica regras nos firewalls.", repo: null }
      ],
      results: [
        "Cenario 1: a ativacao de um novo servico gera, automaticamente, uma regra de liberacao no firewall.",
        "Cenario 2: um evento de trafego anomalo aciona uma regra de bloqueio, simulando mitigacao reativa de negacao de servico.",
        "Demonstracao de que a mesma arquitetura modular se aplica a um dominio sensivel, onde tempo de reacao e coerencia sao criticos."
      ],
      fit: "Amplia o escopo da arquitetura para alem de interfaces, enderecos e VLANs, alcancando politicas de seguranca. Introduz a reatividade a eventos na trajetoria e reforca rastreabilidade e separacao de responsabilidades, preocupacoes que se tornam centrais nas fases seguintes."
    },
    {
      id: 4, year: "2025", venue: "ERRC 2025", venueFull: "XXII Escola Regional de Redes de Computadores (ERRC 2025)",
      tag: "DSM + LLM", color: "p4",
      short: "Net2d-LLM, DSMs e execucao em Network Digital Twin",
      title: "Net2d-LLM: traduzindo intencoes estruturadas de rede em CLI com LLMs e execucao em Network Digital Twin",
      summary: "Vira a chave para a camada de traducao: introduz DSMs como contrato intermediario e investiga modelos de linguagem para traduzir DSM em CLI.",
      objectives: [
        "Introduzir DSMs (Desired State Models) como representacao estruturada do estado desejado.",
        "Investigar a viabilidade de usar modelos de linguagem para traduzir DSM em comandos CLI.",
        "Avaliar as configuracoes geradas executando-as em um Network Digital Twin."
      ],
      tools: [
        { name: "Net2d-LLM", desc: "Pipeline reprodutivel DSM -> prompt -> LLM -> CLI -> execucao em Network Digital Twin, em passagem unica (sem ciclos automaticos de correcao).", repo: null }
      ],
      results: [
        "Comparacao de diferentes modelos de linguagem sob condicoes equivalentes (latencia, uso de tokens, eficiencia e consistencia).",
        "Demonstracao da viabilidade inicial da traducao DSM-CLI com LLMs em operacoes de Camada 2.",
        "Preservacao de artefatos de execucao (DSMs, prompts, respostas, comandos, retornos e metricas) para analise posterior."
      ],
      fit: "Transicao da automacao baseada em templates para a investigacao sistematica da traducao DSM-CLI com LLMs. O DSM passa a funcionar como contrato intermediario entre estado desejado e configuracao, ideia central das fases finais. Tambem expoe a lacuna: ainda falta avaliacao semantica independente."
    },
    {
      id: 5, year: "2026", venue: "SBRC 2026", venueFull: "Anais Estendidos do SBRC 2026: Salao de Ferramentas (submetido)",
      tag: "Avaliacao semantica", color: "p5",
      short: "dsm2cli e avaliacao semantica independente",
      title: "dsm2cli: um pipeline observavel para traduzir intencoes de rede em CLI multivendor com avaliacao semantica independente",
      summary: "Posicao central da pesquisa: separa traducao de avaliacao. Gerar comandos plausiveis nao basta; juizes independentes verificam se a CLI preserva a intencao do DSM.",
      objectives: [
        "Separar explicitamente a etapa de traducao da etapa de avaliacao semantica.",
        "Introduzir avaliadores (juizes) independentes que analisam a aderencia entre DSM e CLI gerada.",
        "Produzir artefatos observaveis: votos, vereditos, evidencias de rastreabilidade e telemetria."
      ],
      tools: [
        { name: "dsm2cli", desc: "Pipeline modular e verificavel com Web API e interface web. Recebe dispositivo-alvo, DSM, modelo tradutor e juizes; devolve CLI, votos, veredito agregado, evidencias e telemetria.", repo: REPOS.dsm2cli }
      ],
      results: [
        "Avaliacao em seis cenarios multivendor, quatro configuracoes de pipeline e 72 execucoes.",
        "Exposicao de falhas semanticas que ficam ocultas em fluxos baseados apenas na geracao de comandos.",
        "Analise de trade-offs entre robustez, custo e latencia, sob um contrato unificado."
      ],
      fit: "Posicao central: conecta DSM, traducao multivendor, LLMs, avaliacao semantica, rastreabilidade e reprodutibilidade. A traducao vira etapa observavel, comparavel e inspecionavel, aproximando o Net2d de uma plataforma de avaliacao, e nao apenas de execucao. Prepara o benchmark da fase seguinte."
    },
    {
      id: 6, year: "2026", venue: "WIARC 2026", venueFull: "WIARC 2026 (submetido)",
      tag: "Benchmark", color: "p6",
      short: "dsm2cli-bench e benchmark semantico reprodutivel",
      title: "Um benchmark semantico reprodutivel para traducao DSM-CLI multivendor",
      summary: "Fechamento experimental: transforma a avaliacao em um benchmark reprodutivel, com matriz controlada de tradutores, fabricantes, casos de uso e repeticoes.",
      objectives: [
        "Transformar a avaliacao da traducao DSM-CLI em um benchmark semantico reprodutivel.",
        "Definir uma matriz experimental controlada com juizes fixos e taxonomia de falhas.",
        "Avaliar nao so corretude, mas estabilidade, concordancia entre juizes, sensibilidade a fabricante, custo e latencia."
      ],
      tools: [
        { name: "dsm2cli-bench", desc: "Arcabouco que orquestra execucoes contra a API do dsm2cli, organiza cenarios, perfis e manifests, e consolida resultados agregados.", repo: REPOS.bench },
        { name: "wiarc2026-experiment", desc: "Pacote de reprodutibilidade com a definicao do benchmark congelada, saidas brutas, figuras e metadados do experimento WIARC 2026.", repo: REPOS.wiarc }
      ],
      results: [
        "Protocolo com 3 fabricantes, 5 casos de uso, 5 tradutores e 10 repeticoes por celula: 750 execucoes, com painel fixo de 3 juizes.",
        "Analise multidimensional que revela efeitos ocultos em metricas agregadas (estabilidade, divergencia entre juizes, custo).",
        "Achado relevante: concentracao de falhas semanticas em cenarios Huawei VRP, com hipotese ligada a documentacao tecnica predominantemente em chines."
      ],
      fit: "Fechamento experimental da trajetoria. Retoma Fonte de Verdade da Rede, DSMs, traducao multivendor, avaliacao semantica e reprodutibilidade, articulando-os num protocolo de benchmark. Consolida o ponto de maior maturidade da camada de traducao e oferece base reprodutivel e extensivel para estudos futuros."
    }
  ]
};

/* Reaproveita a estrutura PT como base e traduz campos textuais para ES e EN. */
PHASES.es = [
  {
    id: 1, year: "2024", venue: "XXI ERRC 2024", venueFull: "XXI Escola Regional de Redes de Computadores (ERRC 2024) · doi:10.5753/errc.2024.4692",
    tag: "SoT", color: "p1",
    short: "Arquitectura inicial basada en la Fuente de Verdad de la Red",
    title: "Gestion de servicios y dispositivos de red a partir de la Fuente de Verdad de la Red (SoT)",
    summary: "El punto de partida: usar la Fuente de Verdad de la Red como referencia central del estado deseado y, desde ella, accionar la automatizacion de dispositivos y servicios.",
    objectives: [
      "Reducir la dispersion de informacion operativa entre planillas, sistemas heredados y conocimiento tacito.",
      "Transformar la Fuente de Verdad de la Red de documentacion pasiva en parte de un flujo operativo.",
      "Organizar la automatizacion como una cadena de software en capas, con responsabilidades separadas."
    ],
    tools: [
      { name: "Prototipo Net2d (inicial)", desc: "Integracion de herramientas de codigo abierto (Netbox, Django REST Framework y librerias de automatizacion) para reflejar cambios de la Fuente de Verdad en el entorno operativo.", repo: REPOS.net2d }
    ],
    results: [
      "Prototipo funcional que demuestra la viabilidad del enfoque.",
      "Experimento que compara configuracion manual versus automatizada, con ganancias operativas en la activacion y documentacion de redes.",
      "Identificacion de las limitaciones (sin DSMs, sin evaluacion semantica, sin benchmark) que motivaron los trabajos siguientes."
    ],
    fit: "Hito inicial de la trayectoria. Introduce el eje conceptual que guia toda la tesis: el paso del estado deseado al estado operacional. La organizacion en capas (aplicacion, Fuente de Verdad, interfaz de servicio, traduccion, conectores, objetos gestionados) anticipa la vision modular consolidada despues en el ecosistema Net2d."
  },
  {
    id: 2, year: "2025", venue: "SBRC-SF 2025", venueFull: "Salon de Herramientas del SBRC 2025",
    tag: "SSoT", color: "p2",
    short: "TrueState-SNA y generalizacion basada en SSoT",
    title: "TrueState-SNA: una solucion basada en SSoT para automatizacion de redes heterogeneas",
    summary: "Generaliza y nombra la arquitectura: una solucion abierta, modular y extensible basada en Fuente Unica de Verdad (SSoT), donde la traduccion gana relevancia propia.",
    objectives: [
      "Consolidar la automatizacion basada en Fuente de Verdad de la Red como solucion en capas, abierta y extensible.",
      "Reducir la dependencia de fabricantes especificos con software de codigo abierto.",
      "Estandarizar la generacion de configuraciones en la capa de traduccion."
    ],
    tools: [
      { name: "TrueState-SNA", desc: "Cadena de automatizacion que integra Netbox (SSoT), Net2d y Ansible. Adopta plantillas Jinja y playbooks Ansible para estandarizar la generacion de configuraciones.", repo: REPOS.net2d }
    ],
    results: [
      "Experimento de configuracion de direccionamiento IPv4 e IPv6 en routers, comparando ejecucion manual y automatizada.",
      "Reduccion de esfuerzo operativo, con ventaja creciente en escenarios que exigen mas comandos.",
      "Evidencia de un nuevo desafio: el mantenimiento de plantillas especificas crece con fabricantes, servicios y escenarios."
    ],
    fit: "Etapa de consolidacion arquitectonica y transicion metodologica. Mantiene el eje estado deseado -> estado operacional, pero la capa de traduccion deja de ser un detalle interno y pasa a ser objeto de investigacion. Ese desplazamiento motiva directamente el uso posterior de DSMs, modelos de lenguaje y evaluacion semantica."
  },
  {
    id: 3, year: "2025", venue: "SBSeg 2025", venueFull: "SBSeg 2025",
    tag: "Firewalls", color: "p3",
    short: "DynSecNet y automatizacion reactiva de firewalls",
    title: "Gestion integrada y adaptativa de firewalls basada en la SSoT de la red",
    summary: "Lleva la arquitectura al dominio de seguridad: politicas de firewall como estado deseado, con reactividad a eventos operativos y de seguridad.",
    objectives: [
      "Aplicar la cadena estado deseado-traduccion-ejecucion a politicas de firewall.",
      "Introducir operacion orientada a eventos (reactividad operativa, no autonomia predictiva).",
      "Mantener las politicas de seguridad vinculadas a la Fuente de Verdad, favoreciendo trazabilidad e inspeccion."
    ],
    tools: [
      { name: "DynSecNet", desc: "Solucion en capas (Fuente Unica de Verdad, control, traduccion, ejecucion) que reacciona a eventos registrados en la SSoT o notificados por sistemas externos y aplica reglas en los firewalls.", repo: null }
    ],
    results: [
      "Escenario 1: la activacion de un nuevo servicio genera automaticamente una regla de liberacion en el firewall.",
      "Escenario 2: un evento de trafico anomalo dispara una regla de bloqueo, simulando mitigacion reactiva de denegacion de servicio.",
      "Demostracion de que la misma arquitectura modular se aplica a un dominio sensible, donde el tiempo de reaccion y la coherencia son criticos."
    ],
    fit: "Amplia el alcance de la arquitectura mas alla de interfaces, direcciones y VLANs, alcanzando politicas de seguridad. Introduce la reactividad a eventos en la trayectoria y refuerza trazabilidad y separacion de responsabilidades, preocupaciones que se vuelven centrales en las fases siguientes."
  },
  {
    id: 4, year: "2025", venue: "ERRC 2025", venueFull: "XXII Escola Regional de Redes de Computadores (ERRC 2025)",
    tag: "DSM + LLM", color: "p4",
    short: "Net2d-LLM, DSMs y ejecucion en Network Digital Twin",
    title: "Net2d-LLM: traduciendo intenciones estructuradas de red en CLI con LLMs y ejecucion en Network Digital Twin",
    summary: "Gira hacia la capa de traduccion: introduce DSMs como contrato intermedio e investiga modelos de lenguaje para traducir DSM en CLI.",
    objectives: [
      "Introducir DSMs (Desired State Models) como representacion estructurada del estado deseado.",
      "Investigar la viabilidad de usar modelos de lenguaje para traducir DSM en comandos CLI.",
      "Evaluar las configuraciones generadas ejecutandolas en un Network Digital Twin."
    ],
    tools: [
      { name: "Net2d-LLM", desc: "Pipeline reproducible DSM -> prompt -> LLM -> CLI -> ejecucion en Network Digital Twin, en una sola pasada (sin ciclos automaticos de correccion).", repo: null }
    ],
    results: [
      "Comparacion de diferentes modelos de lenguaje bajo condiciones equivalentes (latencia, uso de tokens, eficiencia y consistencia).",
      "Demostracion de la viabilidad inicial de la traduccion DSM-CLI con LLMs en operaciones de Capa 2.",
      "Preservacion de artefactos de ejecucion (DSMs, prompts, respuestas, comandos, retornos y metricas) para analisis posterior."
    ],
    fit: "Transicion de la automatizacion basada en plantillas hacia la investigacion sistematica de la traduccion DSM-CLI con LLMs. El DSM pasa a funcionar como contrato intermedio entre estado deseado y configuracion, idea central de las fases finales. Tambien expone la brecha: aun falta evaluacion semantica independiente."
  },
  {
    id: 5, year: "2026", venue: "SBRC 2026", venueFull: "Anais Estendidos do SBRC 2026: Salon de Herramientas (enviado)",
    tag: "Evaluacion semantica", color: "p5",
    short: "dsm2cli y evaluacion semantica independiente",
    title: "dsm2cli: un pipeline observable para traducir intenciones de red en CLI multivendor con evaluacion semantica independiente",
    summary: "Posicion central de la investigacion: separa traduccion de evaluacion. Generar comandos plausibles no basta; jueces independientes verifican si la CLI preserva la intencion del DSM.",
    objectives: [
      "Separar explicitamente la etapa de traduccion de la etapa de evaluacion semantica.",
      "Introducir evaluadores (jueces) independientes que analizan la adherencia entre DSM y CLI generada.",
      "Producir artefactos observables: votos, veredictos, evidencias de trazabilidad y telemetria."
    ],
    tools: [
      { name: "dsm2cli", desc: "Pipeline modular y verificable con Web API e interfaz web. Recibe dispositivo-objetivo, DSM, modelo traductor y jueces; devuelve CLI, votos, veredicto agregado, evidencias y telemetria.", repo: REPOS.dsm2cli }
    ],
    results: [
      "Evaluacion en seis escenarios multivendor, cuatro configuraciones de pipeline y 72 ejecuciones.",
      "Exposicion de fallos semanticos que quedan ocultos en flujos basados solo en la generacion de comandos.",
      "Analisis de trade-offs entre robustez, costo y latencia, bajo un contrato unificado."
    ],
    fit: "Posicion central: conecta DSM, traduccion multivendor, LLMs, evaluacion semantica, trazabilidad y reproducibilidad. La traduccion se vuelve etapa observable, comparable e inspeccionable, acercando Net2d a una plataforma de evaluacion y no solo de ejecucion. Prepara el benchmark de la fase siguiente."
  },
  {
    id: 6, year: "2026", venue: "WIARC 2026", venueFull: "WIARC 2026 (enviado)",
    tag: "Benchmark", color: "p6",
    short: "dsm2cli-bench y benchmark semantico reproducible",
    title: "Un benchmark semantico reproducible para traduccion DSM-CLI multivendor",
    summary: "Cierre experimental: transforma la evaluacion en un benchmark reproducible, con matriz controlada de traductores, fabricantes, casos de uso y repeticiones.",
    objectives: [
      "Transformar la evaluacion de la traduccion DSM-CLI en un benchmark semantico reproducible.",
      "Definir una matriz experimental controlada con jueces fijos y taxonomia de fallos.",
      "Evaluar no solo correctitud, sino estabilidad, concordancia entre jueces, sensibilidad al fabricante, costo y latencia."
    ],
    tools: [
      { name: "dsm2cli-bench", desc: "Marco que orquesta ejecuciones contra la API de dsm2cli, organiza escenarios, perfiles y manifests, y consolida resultados agregados.", repo: REPOS.bench },
      { name: "wiarc2026-experiment", desc: "Paquete de reproducibilidad con la definicion del benchmark congelada, salidas crudas, figuras y metadatos del experimento WIARC 2026.", repo: REPOS.wiarc }
    ],
    results: [
      "Protocolo con 3 fabricantes, 5 casos de uso, 5 traductores y 10 repeticiones por celda: 750 ejecuciones, con panel fijo de 3 jueces.",
      "Analisis multidimensional que revela efectos ocultos en metricas agregadas (estabilidad, divergencia entre jueces, costo).",
      "Hallazgo relevante: concentracion de fallos semanticos en escenarios Huawei VRP, con hipotesis ligada a documentacion tecnica predominantemente en chino."
    ],
    fit: "Cierre experimental de la trayectoria. Retoma Fuente de Verdad de la Red, DSMs, traduccion multivendor, evaluacion semantica y reproducibilidad, articulandolos en un protocolo de benchmark. Consolida el punto de mayor madurez de la capa de traduccion y ofrece base reproducible y extensible para estudios futuros."
  }
];

PHASES.en = [
  {
    id: 1, year: "2024", venue: "XXI ERRC 2024", venueFull: "21st Regional School of Computer Networks (ERRC 2024) · doi:10.5753/errc.2024.4692",
    tag: "SoT", color: "p1",
    short: "Initial architecture based on the Network Source of Truth",
    title: "Management of network services and devices from the Network Source of Truth (SoT)",
    summary: "The starting point: use the Network Source of Truth as the central reference for the desired state and, from it, drive the automation of devices and services.",
    objectives: [
      "Reduce the scattering of operational information across spreadsheets, legacy systems and tacit knowledge.",
      "Turn the Network Source of Truth from passive documentation into part of an operational flow.",
      "Organize automation as a layered software chain with separated responsibilities."
    ],
    tools: [
      { name: "Net2d prototype (initial)", desc: "Integration of open-source tools (Netbox, Django REST Framework and automation libraries) to reflect Source-of-Truth changes in the operational environment.", repo: REPOS.net2d }
    ],
    results: [
      "A functional prototype demonstrating the feasibility of the approach.",
      "An experiment comparing manual versus automated configuration, with operational gains in network activation and documentation.",
      "Identification of the limitations (no DSMs, no semantic assessment, no benchmark) that motivated the following work."
    ],
    fit: "The opening milestone. It introduces the conceptual axis that guides the whole dissertation: the path from desired state to operational state. The layered organization (management app, Source of Truth, service interface, translation, connectors, managed objects) anticipates the modular vision later consolidated in the Net2d ecosystem."
  },
  {
    id: 2, year: "2025", venue: "SBRC-SF 2025", venueFull: "SBRC 2025 Tools Track",
    tag: "SSoT", color: "p2",
    short: "TrueState-SNA and SSoT-based generalization",
    title: "TrueState-SNA: an SSoT-based solution for heterogeneous network automation",
    summary: "Generalizes and names the architecture: an open, modular and extensible solution based on a Single Source of Truth (SSoT), where translation gains its own weight.",
    objectives: [
      "Consolidate Source-of-Truth-based automation as a layered, open and extensible solution.",
      "Reduce vendor lock-in using open-source software.",
      "Standardize configuration generation in the translation layer."
    ],
    tools: [
      { name: "TrueState-SNA", desc: "An automation chain integrating Netbox (SSoT), Net2d and Ansible. It adopts Jinja templates and Ansible playbooks to standardize configuration generation.", repo: REPOS.net2d }
    ],
    results: [
      "An IPv4 and IPv6 addressing experiment on routers, comparing manual and automated execution.",
      "Reduced operational effort, with a growing advantage in scenarios that require more commands.",
      "Evidence of a new challenge: maintaining vendor-specific templates grows with vendors, services and scenarios."
    ],
    fit: "A stage of architectural consolidation and methodological transition. It keeps the desired-state -> operational-state axis, but the translation layer stops being an internal detail and becomes a research object. That shift directly motivates the later use of DSMs, language models and semantic assessment."
  },
  {
    id: 3, year: "2025", venue: "SBSeg 2025", venueFull: "SBSeg 2025",
    tag: "Firewalls", color: "p3",
    short: "DynSecNet and reactive firewall automation",
    title: "Integrated and adaptive firewall management based on the network SSoT",
    summary: "Brings the architecture to the security domain: firewall policies as desired state, with reactivity to operational and security events.",
    objectives: [
      "Apply the desired-state / translation / execution chain to firewall policies.",
      "Introduce event-driven operation (operational reactivity, not predictive autonomy).",
      "Keep security policies tied to the Source of Truth, favoring traceability and inspection."
    ],
    tools: [
      { name: "DynSecNet", desc: "A layered solution (Single Source of Truth, control, translation, execution) that reacts to events recorded in the SSoT or notified by external systems and applies rules on firewalls.", repo: null }
    ],
    results: [
      "Scenario 1: activating a new service automatically generates an allow rule on the firewall.",
      "Scenario 2: an anomalous-traffic event triggers a block rule, simulating reactive denial-of-service mitigation.",
      "Demonstration that the same modular architecture applies to a sensitive domain, where reaction time and coherence are critical."
    ],
    fit: "It widens the architecture's scope beyond interfaces, addresses and VLANs to security policies. It introduces event reactivity into the journey and reinforces traceability and separation of responsibilities, concerns that become central in the following phases."
  },
  {
    id: 4, year: "2025", venue: "ERRC 2025", venueFull: "22nd Regional School of Computer Networks (ERRC 2025)",
    tag: "DSM + LLM", color: "p4",
    short: "Net2d-LLM, DSMs and execution in a Network Digital Twin",
    title: "Net2d-LLM: translating structured network intents into CLI using LLMs with execution in a Network Digital Twin",
    summary: "Turns the focus to the translation layer: it introduces DSMs as an intermediate contract and investigates language models for translating DSM into CLI.",
    objectives: [
      "Introduce DSMs (Desired State Models) as a structured representation of the desired state.",
      "Investigate the feasibility of using language models to translate DSM into CLI commands.",
      "Evaluate the generated configurations by executing them in a Network Digital Twin."
    ],
    tools: [
      { name: "Net2d-LLM", desc: "A reproducible DSM -> prompt -> LLM -> CLI -> execution pipeline on a Network Digital Twin, single-pass (no automatic correction loops).", repo: null }
    ],
    results: [
      "Comparison of different language models under equivalent conditions (latency, token usage, efficiency and consistency).",
      "Demonstration of the initial feasibility of DSM-to-CLI translation with LLMs for Layer 2 operations.",
      "Preservation of execution artifacts (DSMs, prompts, responses, commands, returns and metrics) for later analysis."
    ],
    fit: "The transition from template-based automation to a systematic investigation of DSM-to-CLI translation with LLMs. The DSM becomes an intermediate contract between desired state and configuration, a central idea of the final phases. It also exposes the gap: independent semantic assessment is still missing."
  },
  {
    id: 5, year: "2026", venue: "SBRC 2026", venueFull: "SBRC 2026 Extended Proceedings: Tools Track (submitted)",
    tag: "Semantic assessment", color: "p5",
    short: "dsm2cli and independent semantic assessment",
    title: "dsm2cli: an observable pipeline for translating network intents into multivendor CLI with independent semantic assessment",
    summary: "The central position of the research: it separates translation from assessment. Plausible commands are not enough; independent judges check whether the CLI preserves the DSM intent.",
    objectives: [
      "Explicitly separate the translation step from the semantic assessment step.",
      "Introduce independent evaluators (judges) that analyze the adherence between DSM and generated CLI.",
      "Produce observable artifacts: votes, verdicts, traceability evidence and telemetry."
    ],
    tools: [
      { name: "dsm2cli", desc: "A modular, verifiable pipeline with a Web API and a web interface. It takes a target device, a DSM, a translator model and judges; it returns CLI, individual votes, an aggregated verdict, evidence and telemetry.", repo: REPOS.dsm2cli }
    ],
    results: [
      "Evaluation across six multivendor scenarios, four pipeline configurations and 72 executions.",
      "Exposure of semantic failures that stay hidden in command-generation-only flows.",
      "Analysis of trade-offs between robustness, cost and latency, under a unified contract."
    ],
    fit: "A central position: it connects DSM, multivendor translation, LLMs, semantic assessment, traceability and reproducibility. Translation becomes an observable, comparable and inspectable step, moving Net2d closer to an evaluation platform rather than just an execution one. It sets up the next phase's benchmark."
  },
  {
    id: 6, year: "2026", venue: "WIARC 2026", venueFull: "WIARC 2026 (submitted)",
    tag: "Benchmark", color: "p6",
    short: "dsm2cli-bench and a reproducible semantic benchmark",
    title: "A reproducible semantic benchmark for multivendor DSM-to-CLI translation",
    summary: "The experimental close: it turns assessment into a reproducible benchmark, with a controlled matrix of translators, vendors, use cases and repetitions.",
    objectives: [
      "Turn DSM-to-CLI translation assessment into a reproducible semantic benchmark.",
      "Define a controlled experimental matrix with fixed judges and a failure taxonomy.",
      "Evaluate not only correctness, but stability, inter-judge agreement, vendor sensitivity, cost and latency."
    ],
    tools: [
      { name: "dsm2cli-bench", desc: "A framework that orchestrates runs against the dsm2cli API, organizes scenarios, profiles and manifests, and consolidates aggregated results.", repo: REPOS.bench },
      { name: "wiarc2026-experiment", desc: "A reproducibility package with the frozen benchmark definition, raw outputs, figures and metadata of the WIARC 2026 experiment.", repo: REPOS.wiarc }
    ],
    results: [
      "A protocol with 3 vendors, 5 use cases, 5 translators and 10 repetitions per cell: 750 executions, with a fixed panel of 3 judges.",
      "A multidimensional analysis revealing effects hidden by aggregate metrics (stability, inter-judge divergence, cost).",
      "A notable finding: semantic failures concentrate in Huawei VRP scenarios, with a hypothesis linked to technical documentation predominantly in Chinese."
    ],
    fit: "The experimental close of the journey. It revisits Network Source of Truth, DSMs, multivendor translation, semantic assessment and reproducibility, weaving them into a benchmark protocol. It consolidates the highest-maturity point of the translation layer and offers a reproducible, extensible basis for future studies."
  }
];
