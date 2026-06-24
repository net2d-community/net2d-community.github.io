/*
 * data.js
 * Conteúdo trilíngue (PT/ES/EN) do site de apresentação do mestrado.
 * Fonte: dissertação "Do estado desejado ao estado operacional" (Jerônimo Menezes, UNIPAMPA, 2026)
 * e repositórios públicos da organização net2d-community.
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

/*
 * Artigo (SOL/SBC), artefato/repositório (link extraído de dentro do PDF do artigo)
 * e print da parte inicial do PDF (título, autores e resumo/abstract) por fase.
 * Comum aos três idiomas; indexado pelo id da fase.
 * url/artifact/thumb = null quando o artigo ainda não foi publicado (submetido).
 */
const PAPERS = {
  1: { url: "https://sol.sbc.org.br/index.php/errc/article/view/35439", artifact: null, thumb: "img/papers/fase1.png" },
  2: { url: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/35869", artifact: "https://github.com/net2d-community/net2d", thumb: "img/papers/fase2.png" },
  3: { url: "https://sol.sbc.org.br/index.php/sbseg/article/view/36682", artifact: "https://github.com/SBSeg25/DynSecNet", thumb: "img/papers/fase3.png" },
  4: { url: "https://sol.sbc.org.br/index.php/errc/article/view/39181", artifact: "https://gitlab.com/net2d-community/net2d-labs", thumb: "img/papers/fase4.png" },
  5: { url: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/42581", artifact: "https://github.com/net2d-community/dsm2cli", thumb: "img/papers/fase5.png" },
  6: { url: null, artifact: null, thumb: null }
};

/* Vídeo de apresentação do Net2d (YouTube). */
const VIDEO_ID = "kPi7YJsS7k0";

const SITE = {
  /* =========================== PORTUGUÊS =========================== */
  pt: {
    meta: { lang: "pt", label: "PT", dir: "ltr" },
    theme: { light: "Mudar para tema claro", dark: "Mudar para tema escuro" },
    nav: {
      brand: "Net2d",
      home: "Início",
      timeline: "Trajetória",
      architecture: "Arquitetura",
      product: "Produto final",
      backHome: "Voltar ao início"
    },
    home: {
      kicker: "Dissertação de Mestrado · PPGES · UNIPAMPA · 2026",
      title: "Do estado desejado ao estado operacional",
      subtitle: "Um ecossistema modular para automação observável e reprodutível de redes heterogêneas",
      author: "Jerônimo Soares de Castro Menezes",
      advisors: "Orientador: Diego Kreutz · Coorientador: Rodrigo Brandão Mansilha",
      lede: "Este site apresenta a trajetória de pesquisa do mestrado de Jerônimo como uma sequência de fases. Cada fase corresponde a um artigo publicado ou submetido e a uma ferramenta do ecossistema Net2d. Em conjunto, elas constroem, de forma incremental, uma cadeia de software que transforma o estado desejado da rede, registrado em uma Fonte de Verdade, em configurações operacionalizáveis em dispositivos e serviços heterogêneos.",
      ctaTimeline: "Explorar a trajetória",
      ctaArch: "Ver a arquitetura",
      problemTitle: "O problema",
      problem: "Redes institucionais reúnem dispositivos, serviços e fabricantes de muitas gerações. Manter coerência entre o que foi planejado, o que está documentado e o que está realmente configurado é difícil e propenso a erros. A pergunta central da pesquisa: como conceber, implementar e avaliar um ecossistema modular, logicamente centralizado e observável que organize a passagem do estado desejado para configurações operacionalizáveis em redes heterogêneas?",
      axisTitle: "O eixo organizador",
      axisDesired: "Estado desejado",
      axisDesiredDesc: "O que a rede deve ser: endereços, interfaces, VLANs, políticas, reservas e serviços, registrados em uma Fonte de Verdade da Rede.",
      axisOperational: "Estado operacional",
      axisOperationalDesc: "O que está efetivamente configurado nos dispositivos e serviços. A automação é o esforço de transformar, manter e verificar a relação entre os dois.",
      archTitle: "Como tudo se encaixa",
      archLede: "A figura abaixo integra todas as peças, fases e ferramentas. O net2d atua como orquestrador logicamente centralizado. A Fonte de Verdade da Rede é a origem autoritativa do estado desejado; os dispositivos e serviços são os alvos operacionais. Clique em um componente ou em uma fase para abrir os detalhes.",
      archChainTitle: "A cadeia conceitual",
      timelineTitle: "Trajetória em seis fases",
      timelineLede: "Da automação baseada em Fonte de Verdade da Rede até o benchmark semântico reprodutível. Escolha uma fase para ver objetivos, ferramentas e resultados.",
      videoTitle: "Net2d em ação",
      videoLede: "Apresentação em vídeo do laboratório Net2d, mostrando a automação de dispositivos a partir da Fonte de Verdade da Rede.",
      heroArtDesired: "Estado desejado",
      heroArtOperational: "Estado operacional",
      threeMovesTitle: "Três movimentos complementares",
      threeMoves: [
        { t: "Arquitetural", d: "De uma integração com a Fonte de Verdade da Rede para uma arquitetura modular de serviços especializados." },
        { t: "Metodológico", d: "A tradução evolui de código e templates para DSMs, modelos de linguagem, avaliação semântica e benchmark." },
        { t: "Experimental", d: "De provas de conceito para protocolos comparáveis e reprodutíveis, com artefatos preservados." }
      ]
    },
    phaseUi: {
      objectives: "Objetivos",
      tools: "Ferramenta(s) desenvolvida(s)",
      results: "Resultados atingidos",
      fit: "Como esta fase se encaixa no todo",
      venue: "Publicação",
      repo: "Repositório",
      paperTitle: "Artigo e artefato",
      paperLink: "Ler o artigo (SOL/SBC) ↗",
      artifactLink: "Repositório / artefato do artigo ↗",
      paperThumbAlt: "Primeira página do artigo: título, autores e resumo",
      paperPending: "Artigo submetido; ainda não publicado na biblioteca SOL/SBC.",
      prev: "Fase anterior",
      next: "Próxima fase",
      phaseOf: "Fase {n} de 6",
      allPhases: "Todas as fases",
      seals: {
        title: "Selos de avaliação de artefatos",
        link: "Edição da avaliação de artefatos ↗",
        names: { D: "Artefatos Disponíveis", F: "Artefatos Funcionais", S: "Artefatos Sustentáveis", R: "Experimentos Reprodutíveis" }
      }
    },
    product: {
      title: "O produto final: o ecossistema Net2d",
      lede: "O produto técnico-científico consolidado é o ecossistema Net2d: uma composição modular de serviços, contratos e artefatos. Logicamente centralizado (uma Fonte de Verdade da Rede como referência autoritativa) e operacionalmente modular (serviços que evoluem de forma independente).",
      chain: "Fonte de Verdade da Rede → DSM → tradução → avaliação semântica → artefatos → execução controlada",
      components: [
        { name: "net2d", role: "Orquestrador logicamente centralizado: recebe eventos, cria execuções rastreáveis (PipelineRun) e articula os demais serviços.", repo: REPOS.net2d },
        { name: "nsot2dsm", role: "Normaliza dados e eventos da Fonte de Verdade da Rede em modelos estruturados de estado desejado (DSM).", repo: null },
        { name: "dsm2cli", role: "Traduz DSMs em CLI multivendor e realiza avaliação semântica independente com votos, vereditos e evidências.", repo: REPOS.dsm2cli },
        { name: "cli2exec", role: "Apoia a execução controlada dos comandos em dispositivos, preservando saídas, falhas e evidências operacionais.", repo: null },
        { name: "dsm2cli-bench", role: "Organiza experimentos reprodutíveis: cenários, perfis, repetições, juízes fixos e taxonomia de falhas.", repo: REPOS.bench }
      ],
      instTitle: "Adoção institucional e transferência tecnológica",
      inst: "Princípios do ecossistema foram aplicados na UFRGS, com destaque para a modernização do serviço DHCP. Nesse arranjo, o CASCO atua como governança, o Netbox como Fonte de Verdade da Rede, o netbox2kea3 como integração e o Kea como serviço operacional (DHCPv4/DHCPv6). Validações laboratoriais cobriram switches H3C, Huawei e Cisco IOS.",
      scopeTitle: "Escopo e limitações",
      scope: "A contribuição empírica mais aprofundada concentra-se na representação DSM, na tradução DSM-CLI e na avaliação semântica independente. A execução controlada integra a arquitetura, mas a reconciliação completa de estado, checkpoint e rollback permanecem como direções de evolução. A avaliação semântica por juízes LLM apoia inspeção e comparação; não substitui verificação formal, testes em dispositivos reais nem revisão humana."
    },
    footer: {
      text: "Ecossistema Net2d · Programa de Pós-Graduação em Engenharia de Software (PPGES) · Universidade Federal do Pampa (UNIPAMPA) · Alegrete, 2026",
      repos: "Repositórios da organização",
      credit: "Desenvolvido por"
    }
  },

  /* =========================== ESPAÑOL =========================== */
  es: {
    meta: { lang: "es", label: "ES", dir: "ltr" },
    theme: { light: "Cambiar a tema claro", dark: "Cambiar a tema oscuro" },
    nav: {
      brand: "Net2d",
      home: "Inicio",
      timeline: "Trayectoria",
      architecture: "Arquitectura",
      product: "Producto final",
      backHome: "Volver al inicio"
    },
    home: {
      kicker: "Tesis de Maestría · PPGES · UNIPAMPA · 2026",
      title: "Del estado deseado al estado operacional",
      subtitle: "Un ecosistema modular para la automatización observable y reproducible de redes heterogéneas",
      author: "Jerônimo Soares de Castro Menezes",
      advisors: "Director: Diego Kreutz · Codirector: Rodrigo Brandão Mansilha",
      lede: "Este sitio presenta la trayectoria de investigación de la maestría de Jerônimo como una secuencia de fases. Cada fase corresponde a un artículo publicado o enviado y a una herramienta del ecosistema Net2d. En conjunto, construyen de forma incremental una cadena de software que transforma el estado deseado de la red, registrado en una Fuente de Verdad, en configuraciones operacionalizables en dispositivos y servicios heterogéneos.",
      ctaTimeline: "Explorar la trayectoria",
      ctaArch: "Ver la arquitectura",
      problemTitle: "El problema",
      problem: "Las redes institucionales reúnen dispositivos, servicios y fabricantes de muchas generaciones. Mantener la coherencia entre lo planificado, lo documentado y lo realmente configurado es difícil y propenso a errores. La pregunta central de la investigación: ¿cómo concebir, implementar y evaluar un ecosistema modular, lógicamente centralizado y observable que organice el paso del estado deseado a configuraciones operacionalizables en redes heterogéneas?",
      axisTitle: "El eje organizador",
      axisDesired: "Estado deseado",
      axisDesiredDesc: "Lo que la red debe ser: direcciones, interfaces, VLANs, políticas, reservas y servicios, registrados en una Fuente de Verdad de la Red.",
      axisOperational: "Estado operacional",
      axisOperationalDesc: "Lo que está efectivamente configurado en los dispositivos y servicios. La automatización es el esfuerzo de transformar, mantener y verificar la relación entre ambos.",
      archTitle: "Cómo encaja todo",
      archLede: "La figura siguiente integra todas las piezas, fases y herramientas. net2d actúa como orquestador lógicamente centralizado. La Fuente de Verdad de la Red es el origen autoritativo del estado deseado; los dispositivos y servicios son los objetivos operacionales. Haz clic en un componente o en una fase para abrir los detalles.",
      archChainTitle: "La cadena conceptual",
      timelineTitle: "Trayectoria en seis fases",
      timelineLede: "De la automatización basada en Fuente de Verdad de la Red hasta el benchmark semántico reproducible. Elige una fase para ver objetivos, herramientas y resultados.",
      videoTitle: "Net2d en acción",
      videoLede: "Presentación en video del laboratorio Net2d, mostrando la automatización de dispositivos a partir de la Fuente de Verdad de la Red.",
      heroArtDesired: "Estado deseado",
      heroArtOperational: "Estado operacional",
      threeMovesTitle: "Tres movimientos complementarios",
      threeMoves: [
        { t: "Arquitectónico", d: "De una integración con la Fuente de Verdad de la Red a una arquitectura modular de servicios especializados." },
        { t: "Metodológico", d: "La traducción evoluciona de código y plantillas a DSMs, modelos de lenguaje, evaluación semántica y benchmark." },
        { t: "Experimental", d: "De pruebas de concepto a protocolos comparables y reproducibles, con artefactos preservados." }
      ]
    },
    phaseUi: {
      objectives: "Objetivos",
      tools: "Herramienta(s) desarrollada(s)",
      results: "Resultados alcanzados",
      fit: "Cómo encaja esta fase en el conjunto",
      venue: "Publicación",
      repo: "Repositorio",
      paperTitle: "Artículo y artefacto",
      paperLink: "Leer el artículo (SOL/SBC) ↗",
      artifactLink: "Repositorio / artefacto del artículo ↗",
      paperThumbAlt: "Primera página del artículo: título, autores y resumen",
      paperPending: "Artículo enviado; aún no publicado en la biblioteca SOL/SBC.",
      prev: "Fase anterior",
      next: "Fase siguiente",
      phaseOf: "Fase {n} de 6",
      allPhases: "Todas las fases",
      seals: {
        title: "Sellos de evaluación de artefactos",
        link: "Edición de la evaluación de artefactos ↗",
        names: { D: "Artefactos Disponibles", F: "Artefactos Funcionales", S: "Artefactos Sostenibles", R: "Experimentos Reproducibles" }
      }
    },
    product: {
      title: "El producto final: el ecosistema Net2d",
      lede: "El producto técnico-científico consolidado es el ecosistema Net2d: una composición modular de servicios, contratos y artefactos. Lógicamente centralizado (una Fuente de Verdad de la Red como referencia autoritativa) y operacionalmente modular (servicios que evolucionan de forma independiente).",
      chain: "Fuente de Verdad de la Red → DSM → traducción → evaluación semántica → artefactos → ejecución controlada",
      components: [
        { name: "net2d", role: "Orquestador lógicamente centralizado: recibe eventos, crea ejecuciones rastreables (PipelineRun) y articula los demás servicios.", repo: REPOS.net2d },
        { name: "nsot2dsm", role: "Normaliza datos y eventos de la Fuente de Verdad de la Red en modelos estructurados de estado deseado (DSM).", repo: null },
        { name: "dsm2cli", role: "Traduce DSMs en CLI multivendor y realiza evaluación semántica independiente con votos, veredictos y evidencias.", repo: REPOS.dsm2cli },
        { name: "cli2exec", role: "Apoya la ejecución controlada de los comandos en dispositivos, preservando salidas, fallos y evidencias operacionales.", repo: null },
        { name: "dsm2cli-bench", role: "Organiza experimentos reproducibles: escenarios, perfiles, repeticiones, jueces fijos y taxonomía de fallos.", repo: REPOS.bench }
      ],
      instTitle: "Adopción institucional y transferencia tecnológica",
      inst: "Principios del ecosistema se aplicaron en la UFRGS, con énfasis en la modernización del servicio DHCP. En ese arreglo, CASCO actúa como gobernanza, Netbox como Fuente de Verdad de la Red, netbox2kea3 como integración y Kea como servicio operacional (DHCPv4/DHCPv6). Las validaciones de laboratorio cubrieron switches H3C, Huawei y Cisco IOS.",
      scopeTitle: "Alcance y limitaciones",
      scope: "La contribución empírica más profunda se concentra en la representación DSM, la traducción DSM-CLI y la evaluación semántica independiente. La ejecución controlada integra la arquitectura, pero la reconciliación completa de estado, checkpoint y rollback siguen siendo direcciones de evolución. La evaluación semántica por jueces LLM apoya la inspección y la comparación; no sustituye la verificación formal, las pruebas en dispositivos reales ni la revisión humana."
    },
    footer: {
      text: "Ecosistema Net2d · Programa de Posgrado en Ingeniería de Software (PPGES) · Universidad Federal de Pampa (UNIPAMPA) · Alegrete, 2026",
      repos: "Repositorios de la organización",
      credit: "Desarrollado por"
    }
  },

  /* =========================== ENGLISH =========================== */
  en: {
    meta: { lang: "en", label: "EN", dir: "ltr" },
    theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
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
      author: "Jerônimo Soares de Castro Menezes",
      advisors: "Advisor: Diego Kreutz · Co-advisor: Rodrigo Brandão Mansilha",
      lede: "This site presents Jerônimo's master's research as a sequence of phases. Each phase maps to a published or submitted paper and to a tool of the Net2d ecosystem. Together they incrementally build a software chain that turns the network's desired state, stored in a Source of Truth, into operational configurations applied to heterogeneous devices and services.",
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
      videoTitle: "Net2d in action",
      videoLede: "Video presentation of the Net2d lab, showing device automation driven by the Network Source of Truth.",
      heroArtDesired: "Desired state",
      heroArtOperational: "Operational state",
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
      paperTitle: "Paper and artifact",
      paperLink: "Read the paper (SOL/SBC) ↗",
      artifactLink: "Paper repository / artifact ↗",
      paperThumbAlt: "First page of the paper: title, authors and abstract",
      paperPending: "Paper submitted; not yet published in the SOL/SBC library.",
      prev: "Previous phase",
      next: "Next phase",
      phaseOf: "Phase {n} of 6",
      allPhases: "All phases",
      seals: {
        title: "Artifact evaluation badges",
        link: "Artifact evaluation edition ↗",
        names: { D: "Artifacts Available", F: "Artifacts Functional", S: "Artifacts Sustainable", R: "Results Reproduced" }
      }
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
      repos: "Organization repositories",
      credit: "Built by"
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
      title: "Gerenciamento de serviços e dispositivos de rede a partir da Fonte de Verdade da Rede (SoT)",
      summary: "O ponto de partida: usar a Fonte de Verdade da Rede como referência central do estado desejado e acionar, a partir dela, a automação de dispositivos e serviços.",
      objectives: [
        "Reduzir a dispersão de informações operacionais entre planilhas, sistemas legados e conhecimento tácito.",
        "Transformar a Fonte de Verdade da Rede de documentação passiva em parte de um fluxo operacional.",
        "Organizar a automação como uma cadeia de software em camadas, com responsabilidades separadas."
      ],
      tools: [
        { name: "Protótipo Net2d (inicial)", desc: "Integração de ferramentas de código aberto (Netbox, Django REST Framework e bibliotecas de automação) para refletir alterações da Fonte de Verdade no ambiente operacional.", repo: REPOS.net2d }
      ],
      results: [
        "Protótipo funcional demonstrando viabilidade da abordagem.",
        "Experimento comparando configuração manual versus automatizada, com ganhos operacionais na ativação e documentação de redes.",
        "Identificação das limitações (sem DSMs, sem avaliação semântica, sem benchmark) que motivaram os trabalhos seguintes."
      ],
      fit: "Marco inicial da trajetória. Introduz o eixo conceitual que orienta toda a dissertação: a passagem do estado desejado ao estado operacional. A organização em camadas (aplicação, Fonte de Verdade, interface de serviço, tradução, conectores, objetos gerenciados) antecipa a visão modular consolidada depois no ecossistema Net2d."
    },
    {
      id: 2, year: "2025", venue: "SBRC-SF 2025", venueFull: "Salão de Ferramentas do SBRC 2025",
      tag: "SSoT", color: "p2",
      seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2025/",
      short: "TrueState-SNA e generalização baseada em SSoT",
      title: "TrueState-SNA: uma solução baseada em SSoT para automação de redes heterogêneas",
      summary: "Generaliza e nomeia a arquitetura: uma solução aberta, modular e extensível baseada em Fonte Única de Verdade (SSoT), com a tradução ganhando relevância própria.",
      objectives: [
        "Consolidar a automação baseada em Fonte de Verdade da Rede como solução em camadas, aberta e extensível.",
        "Reduzir a dependência de fornecedores específicos com software de código aberto.",
        "Padronizar a geração de configurações na camada de tradução."
      ],
      tools: [
        { name: "TrueState-SNA", desc: "Cadeia de automação integrando Netbox (SSoT), Net2d e Ansible. Passa a usar templates Jinja e playbooks Ansible para padronizar a geração de configurações.", repo: REPOS.net2d }
      ],
      results: [
        "Experimento de configuração de endereçamento IPv4 e IPv6 em roteadores, comparando execução manual e automatizada.",
        "Redução de esforço operacional, com vantagem crescente em cenários que exigem mais comandos.",
        "Evidência de um novo desafio: a manutenção de templates específicos cresce com fabricantes, serviços e cenários."
      ],
      fit: "Etapa de consolidação arquitetural e transição metodológica. Mantém o eixo estado desejado -> estado operacional, mas a camada de tradução deixa de ser detalhe interno e passa a ser objeto de investigação. Esse deslocamento motiva diretamente o uso posterior de DSMs, modelos de linguagem e avaliação semântica."
    },
    {
      id: 3, year: "2025", venue: "SBSeg 2025", venueFull: "SBSeg 2025",
      tag: "Firewalls", color: "p3",
      seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbseg-2025/",
      short: "DynSecNet e automação reativa de firewalls",
      title: "Gerenciamento integrado e adaptativo de firewalls baseado na SSoT da rede",
      summary: "Leva a arquitetura ao domínio de segurança: políticas de firewall como estado desejado, com reatividade a eventos operacionais e de segurança.",
      objectives: [
        "Aplicar a cadeia estado desejado-tradução-execução a políticas de firewall.",
        "Introduzir operação orientada por eventos (reatividade operacional, não autonomia preditiva).",
        "Manter as políticas de segurança vinculadas à Fonte de Verdade, favorecendo rastreabilidade e inspeção."
      ],
      tools: [
        { name: "DynSecNet", desc: "Solução em camadas (Fonte Única de Verdade, controle, tradução, execução) que reage a eventos registrados na SSoT ou notificados por sistemas externos e aplica regras nos firewalls.", repo: null }
      ],
      results: [
        "Cenário 1: a ativação de um novo serviço gera, automaticamente, uma regra de liberação no firewall.",
        "Cenário 2: um evento de tráfego anômalo aciona uma regra de bloqueio, simulando mitigação reativa de negação de serviço.",
        "Demonstração de que a mesma arquitetura modular se aplica a um domínio sensível, onde tempo de reação e coerência são críticos."
      ],
      fit: "Amplia o escopo da arquitetura para além de interfaces, endereços e VLANs, alcançando políticas de segurança. Introduz a reatividade a eventos na trajetória e reforça rastreabilidade e separação de responsabilidades, preocupações que se tornam centrais nas fases seguintes."
    },
    {
      id: 4, year: "2025", venue: "ERRC 2025", venueFull: "XXII Escola Regional de Redes de Computadores (ERRC 2025)",
      tag: "DSM + LLM", color: "p4",
      short: "Net2d-LLM, DSMs e execução em Network Digital Twin",
      title: "Net2d-LLM: traduzindo intenções estruturadas de rede em CLI com LLMs e execução em Network Digital Twin",
      summary: "Vira a chave para a camada de tradução: introduz DSMs como contrato intermediário e investiga modelos de linguagem para traduzir DSM em CLI.",
      objectives: [
        "Introduzir DSMs (Desired State Models) como representação estruturada do estado desejado.",
        "Investigar a viabilidade de usar modelos de linguagem para traduzir DSM em comandos CLI.",
        "Avaliar as configurações geradas executando-as em um Network Digital Twin."
      ],
      tools: [
        { name: "Net2d-LLM", desc: "Pipeline reprodutível DSM -> prompt -> LLM -> CLI -> execução em Network Digital Twin, em passagem única (sem ciclos automáticos de correção).", repo: null }
      ],
      results: [
        "Comparação de diferentes modelos de linguagem sob condições equivalentes (latência, uso de tokens, eficiência e consistência).",
        "Demonstração da viabilidade inicial da tradução DSM-CLI com LLMs em operações de Camada 2.",
        "Preservação de artefatos de execução (DSMs, prompts, respostas, comandos, retornos e métricas) para análise posterior."
      ],
      fit: "Transição da automação baseada em templates para a investigação sistemática da tradução DSM-CLI com LLMs. O DSM passa a funcionar como contrato intermediário entre estado desejado e configuração, ideia central das fases finais. Também expõe a lacuna: ainda falta avaliação semântica independente."
    },
    {
      id: 5, year: "2026", venue: "SBRC 2026", venueFull: "Anais Estendidos do SBRC 2026: Salão de Ferramentas",
      tag: "Avaliação semântica", color: "p5",
      seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2026/",
      short: "dsm2cli e avaliação semântica independente",
      title: "dsm2cli: um pipeline observável para traduzir intenções de rede em CLI multivendor com avaliação semântica independente",
      summary: "Posição central da pesquisa: separa tradução de avaliação. Gerar comandos plausíveis não basta; juízes independentes verificam se a CLI preserva a intenção do DSM.",
      objectives: [
        "Separar explicitamente a etapa de tradução da etapa de avaliação semântica.",
        "Introduzir avaliadores (juízes) independentes que analisam a aderência entre DSM e CLI gerada.",
        "Produzir artefatos observáveis: votos, vereditos, evidências de rastreabilidade e telemetria."
      ],
      tools: [
        { name: "dsm2cli", desc: "Pipeline modular e verificável com Web API e interface web. Recebe dispositivo-alvo, DSM, modelo tradutor e juízes; devolve CLI, votos, veredito agregado, evidências e telemetria.", repo: REPOS.dsm2cli }
      ],
      results: [
        "Avaliação em seis cenários multivendor, quatro configurações de pipeline e 72 execuções.",
        "Exposição de falhas semânticas que ficam ocultas em fluxos baseados apenas na geração de comandos.",
        "Análise de trade-offs entre robustez, custo e latência, sob um contrato unificado."
      ],
      fit: "Posição central: conecta DSM, tradução multivendor, LLMs, avaliação semântica, rastreabilidade e reprodutibilidade. A tradução vira etapa observável, comparável e inspecionável, aproximando o Net2d de uma plataforma de avaliação, e não apenas de execução. Prepara o benchmark da fase seguinte."
    },
    {
      id: 6, year: "2026", venue: "WIARC 2026", venueFull: "WIARC 2026 (submetido)",
      tag: "Benchmark", color: "p6",
      short: "dsm2cli-bench e benchmark semântico reprodutível",
      title: "Um benchmark semântico reprodutível para tradução DSM-CLI multivendor",
      summary: "Fechamento experimental: transforma a avaliação em um benchmark reprodutível, com matriz controlada de tradutores, fabricantes, casos de uso e repetições.",
      objectives: [
        "Transformar a avaliação da tradução DSM-CLI em um benchmark semântico reprodutível.",
        "Definir uma matriz experimental controlada com juízes fixos e taxonomia de falhas.",
        "Avaliar não só corretude, mas estabilidade, concordância entre juízes, sensibilidade a fabricante, custo e latência."
      ],
      tools: [
        { name: "dsm2cli-bench", desc: "Arcabouço que orquestra execuções contra a API do dsm2cli, organiza cenários, perfis e manifests, e consolida resultados agregados.", repo: REPOS.bench },
        { name: "wiarc2026-experiment", desc: "Pacote de reprodutibilidade com a definição do benchmark congelada, saídas brutas, figuras e metadados do experimento WIARC 2026.", repo: REPOS.wiarc }
      ],
      results: [
        "Protocolo com 3 fabricantes, 5 casos de uso, 5 tradutores e 10 repetições por célula: 750 execuções, com painel fixo de 3 juízes.",
        "Análise multidimensional que revela efeitos ocultos em métricas agregadas (estabilidade, divergência entre juízes, custo).",
        "Achado relevante: concentração de falhas semânticas em cenários Huawei VRP, com hipótese ligada à documentação técnica predominantemente em chinês."
      ],
      fit: "Fechamento experimental da trajetória. Retoma Fonte de Verdade da Rede, DSMs, tradução multivendor, avaliação semântica e reprodutibilidade, articulando-os num protocolo de benchmark. Consolida o ponto de maior maturidade da camada de tradução e oferece base reprodutível e extensível para estudos futuros."
    }
  ]
};

/* Reaproveita a estrutura PT como base e traduz campos textuais para ES e EN. */
PHASES.es = [
  {
    id: 1, year: "2024", venue: "XXI ERRC 2024", venueFull: "XXI Escola Regional de Redes de Computadores (ERRC 2024) · doi:10.5753/errc.2024.4692",
    tag: "SoT", color: "p1",
    short: "Arquitectura inicial basada en la Fuente de Verdad de la Red",
    title: "Gestión de servicios y dispositivos de red a partir de la Fuente de Verdad de la Red (SoT)",
    summary: "El punto de partida: usar la Fuente de Verdad de la Red como referencia central del estado deseado y, desde ella, accionar la automatización de dispositivos y servicios.",
    objectives: [
      "Reducir la dispersión de información operativa entre planillas, sistemas heredados y conocimiento tácito.",
      "Transformar la Fuente de Verdad de la Red de documentación pasiva en parte de un flujo operativo.",
      "Organizar la automatización como una cadena de software en capas, con responsabilidades separadas."
    ],
    tools: [
      { name: "Prototipo Net2d (inicial)", desc: "Integración de herramientas de código abierto (Netbox, Django REST Framework y librerías de automatización) para reflejar cambios de la Fuente de Verdad en el entorno operativo.", repo: REPOS.net2d }
    ],
    results: [
      "Prototipo funcional que demuestra la viabilidad del enfoque.",
      "Experimento que compara configuración manual versus automatizada, con ganancias operativas en la activación y documentación de redes.",
      "Identificación de las limitaciones (sin DSMs, sin evaluación semántica, sin benchmark) que motivaron los trabajos siguientes."
    ],
    fit: "Hito inicial de la trayectoria. Introduce el eje conceptual que guía toda la tesis: el paso del estado deseado al estado operacional. La organización en capas (aplicación, Fuente de Verdad, interfaz de servicio, traducción, conectores, objetos gestionados) anticipa la visión modular consolidada después en el ecosistema Net2d."
  },
  {
    id: 2, year: "2025", venue: "SBRC-SF 2025", venueFull: "Salón de Herramientas del SBRC 2025",
    tag: "SSoT", color: "p2",
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2025/",
    short: "TrueState-SNA y generalización basada en SSoT",
    title: "TrueState-SNA: una solución basada en SSoT para automatización de redes heterogéneas",
    summary: "Generaliza y nombra la arquitectura: una solución abierta, modular y extensible basada en Fuente Única de Verdad (SSoT), donde la traducción gana relevancia propia.",
    objectives: [
      "Consolidar la automatización basada en Fuente de Verdad de la Red como solución en capas, abierta y extensible.",
      "Reducir la dependencia de fabricantes específicos con software de código abierto.",
      "Estandarizar la generación de configuraciones en la capa de traducción."
    ],
    tools: [
      { name: "TrueState-SNA", desc: "Cadena de automatización que integra Netbox (SSoT), Net2d y Ansible. Adopta plantillas Jinja y playbooks Ansible para estandarizar la generación de configuraciones.", repo: REPOS.net2d }
    ],
    results: [
      "Experimento de configuración de direccionamiento IPv4 e IPv6 en routers, comparando ejecución manual y automatizada.",
      "Reducción de esfuerzo operativo, con ventaja creciente en escenarios que exigen más comandos.",
      "Evidencia de un nuevo desafío: el mantenimiento de plantillas específicas crece con fabricantes, servicios y escenarios."
    ],
    fit: "Etapa de consolidación arquitectónica y transición metodológica. Mantiene el eje estado deseado -> estado operacional, pero la capa de traducción deja de ser un detalle interno y pasa a ser objeto de investigación. Ese desplazamiento motiva directamente el uso posterior de DSMs, modelos de lenguaje y evaluación semántica."
  },
  {
    id: 3, year: "2025", venue: "SBSeg 2025", venueFull: "SBSeg 2025",
    tag: "Firewalls", color: "p3",
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbseg-2025/",
    short: "DynSecNet y automatización reactiva de firewalls",
    title: "Gestión integrada y adaptativa de firewalls basada en la SSoT de la red",
    summary: "Lleva la arquitectura al dominio de seguridad: políticas de firewall como estado deseado, con reactividad a eventos operativos y de seguridad.",
    objectives: [
      "Aplicar la cadena estado deseado-traducción-ejecución a políticas de firewall.",
      "Introducir operación orientada a eventos (reactividad operativa, no autonomía predictiva).",
      "Mantener las políticas de seguridad vinculadas a la Fuente de Verdad, favoreciendo trazabilidad e inspección."
    ],
    tools: [
      { name: "DynSecNet", desc: "Solución en capas (Fuente Única de Verdad, control, traducción, ejecución) que reacciona a eventos registrados en la SSoT o notificados por sistemas externos y aplica reglas en los firewalls.", repo: null }
    ],
    results: [
      "Escenario 1: la activación de un nuevo servicio genera automáticamente una regla de liberación en el firewall.",
      "Escenario 2: un evento de tráfico anómalo dispara una regla de bloqueo, simulando mitigación reactiva de denegación de servicio.",
      "Demostración de que la misma arquitectura modular se aplica a un dominio sensible, donde el tiempo de reacción y la coherencia son críticos."
    ],
    fit: "Amplía el alcance de la arquitectura más allá de interfaces, direcciones y VLANs, alcanzando políticas de seguridad. Introduce la reactividad a eventos en la trayectoria y refuerza trazabilidad y separación de responsabilidades, preocupaciones que se vuelven centrales en las fases siguientes."
  },
  {
    id: 4, year: "2025", venue: "ERRC 2025", venueFull: "XXII Escola Regional de Redes de Computadores (ERRC 2025)",
    tag: "DSM + LLM", color: "p4",
    short: "Net2d-LLM, DSMs y ejecución en Network Digital Twin",
    title: "Net2d-LLM: traduciendo intenciones estructuradas de red en CLI con LLMs y ejecución en Network Digital Twin",
    summary: "Gira hacia la capa de traducción: introduce DSMs como contrato intermedio e investiga modelos de lenguaje para traducir DSM en CLI.",
    objectives: [
      "Introducir DSMs (Desired State Models) como representación estructurada del estado deseado.",
      "Investigar la viabilidad de usar modelos de lenguaje para traducir DSM en comandos CLI.",
      "Evaluar las configuraciones generadas ejecutándolas en un Network Digital Twin."
    ],
    tools: [
      { name: "Net2d-LLM", desc: "Pipeline reproducible DSM -> prompt -> LLM -> CLI -> ejecución en Network Digital Twin, en una sola pasada (sin ciclos automáticos de corrección).", repo: null }
    ],
    results: [
      "Comparación de diferentes modelos de lenguaje bajo condiciones equivalentes (latencia, uso de tokens, eficiencia y consistencia).",
      "Demostración de la viabilidad inicial de la traducción DSM-CLI con LLMs en operaciones de Capa 2.",
      "Preservación de artefactos de ejecución (DSMs, prompts, respuestas, comandos, retornos y métricas) para análisis posterior."
    ],
    fit: "Transición de la automatización basada en plantillas hacia la investigación sistemática de la traducción DSM-CLI con LLMs. El DSM pasa a funcionar como contrato intermedio entre estado deseado y configuración, idea central de las fases finales. También expone la brecha: aún falta evaluación semántica independiente."
  },
  {
    id: 5, year: "2026", venue: "SBRC 2026", venueFull: "Anais Estendidos do SBRC 2026: Salón de Herramientas",
    tag: "Evaluación semántica", color: "p5",
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2026/",
    short: "dsm2cli y evaluación semántica independiente",
    title: "dsm2cli: un pipeline observable para traducir intenciones de red en CLI multivendor con evaluación semántica independiente",
    summary: "Posición central de la investigación: separa traducción de evaluación. Generar comandos plausibles no basta; jueces independientes verifican si la CLI preserva la intención del DSM.",
    objectives: [
      "Separar explícitamente la etapa de traducción de la etapa de evaluación semántica.",
      "Introducir evaluadores (jueces) independientes que analizan la adherencia entre DSM y CLI generada.",
      "Producir artefactos observables: votos, veredictos, evidencias de trazabilidad y telemetría."
    ],
    tools: [
      { name: "dsm2cli", desc: "Pipeline modular y verificable con Web API e interfaz web. Recibe dispositivo-objetivo, DSM, modelo traductor y jueces; devuelve CLI, votos, veredicto agregado, evidencias y telemetría.", repo: REPOS.dsm2cli }
    ],
    results: [
      "Evaluación en seis escenarios multivendor, cuatro configuraciones de pipeline y 72 ejecuciones.",
      "Exposición de fallos semánticos que quedan ocultos en flujos basados solo en la generación de comandos.",
      "Análisis de trade-offs entre robustez, costo y latencia, bajo un contrato unificado."
    ],
    fit: "Posición central: conecta DSM, traducción multivendor, LLMs, evaluación semántica, trazabilidad y reproducibilidad. La traducción se vuelve etapa observable, comparable e inspeccionable, acercando Net2d a una plataforma de evaluación y no solo de ejecución. Prepara el benchmark de la fase siguiente."
  },
  {
    id: 6, year: "2026", venue: "WIARC 2026", venueFull: "WIARC 2026 (enviado)",
    tag: "Benchmark", color: "p6",
    short: "dsm2cli-bench y benchmark semántico reproducible",
    title: "Un benchmark semántico reproducible para traducción DSM-CLI multivendor",
    summary: "Cierre experimental: transforma la evaluación en un benchmark reproducible, con matriz controlada de traductores, fabricantes, casos de uso y repeticiones.",
    objectives: [
      "Transformar la evaluación de la traducción DSM-CLI en un benchmark semántico reproducible.",
      "Definir una matriz experimental controlada con jueces fijos y taxonomía de fallos.",
      "Evaluar no solo correctitud, sino estabilidad, concordancia entre jueces, sensibilidad al fabricante, costo y latencia."
    ],
    tools: [
      { name: "dsm2cli-bench", desc: "Marco que orquesta ejecuciones contra la API de dsm2cli, organiza escenarios, perfiles y manifests, y consolida resultados agregados.", repo: REPOS.bench },
      { name: "wiarc2026-experiment", desc: "Paquete de reproducibilidad con la definición del benchmark congelada, salidas crudas, figuras y metadatos del experimento WIARC 2026.", repo: REPOS.wiarc }
    ],
    results: [
      "Protocolo con 3 fabricantes, 5 casos de uso, 5 traductores y 10 repeticiones por celda: 750 ejecuciones, con panel fijo de 3 jueces.",
      "Análisis multidimensional que revela efectos ocultos en métricas agregadas (estabilidad, divergencia entre jueces, costo).",
      "Hallazgo relevante: concentración de fallos semánticos en escenarios Huawei VRP, con hipótesis ligada a documentación técnica predominantemente en chino."
    ],
    fit: "Cierre experimental de la trayectoria. Retoma Fuente de Verdad de la Red, DSMs, traducción multivendor, evaluación semántica y reproducibilidad, articulándolos en un protocolo de benchmark. Consolida el punto de mayor madurez de la capa de traducción y ofrece base reproducible y extensible para estudios futuros."
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
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2025/",
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
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbseg-2025/",
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
    id: 5, year: "2026", venue: "SBRC 2026", venueFull: "SBRC 2026 Extended Proceedings: Tools Track",
    tag: "Semantic assessment", color: "p5",
    seals: ["D", "F", "S", "R"], evalUrl: "https://artifact-eval.github.io/pt/sbrc-2026/",
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
