/*
 * home.js
 * Renderiza a pagina inicial (hero, problema, eixo, figura arquitetural,
 * timeline, tres movimentos, produto final, rodape) a partir de SITE/PHASES.
 * Tudo e re-renderizado ao trocar de idioma.
 */

(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Cores das fases em hex: var() do CSS nao resolve em atributos de apresentacao SVG.
  const PHASE_HEX = { p1: "#38bdf8", p2: "#22d3ee", p3: "#f472b6", p4: "#a78bfa", p5: "#34d399", p6: "#fbbf24" };

  function svg(tag, attrs) {
    const n = document.createElementNS(SVG_NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  function svgText(x, y, text, attrs) {
    const t = svg("text", Object.assign({ x: x, y: y }, attrs || {}));
    t.textContent = text;
    return t;
  }

  /* ---- Figura arquitetural interativa ---- */
  /* Integra Fonte de Verdade -> net2d -> servicos especializados -> dispositivos,
     com repositorio de artefatos e badges de fase indicando a contribuicao. */
  function buildArchSVG(lang) {
    const L = {
      pt: { nsot: "Fonte de Verdade da Rede", nsotSub: "NSoT / Netbox · estado desejado",
            orch: "net2d", orchSub: "Orquestrador logicamente centralizado · cria PipelineRun",
            artifacts: "Repositorio de artefatos", artifactsSub: "CLI gerada · votos · vereditos · evidencias · telemetria",
            devices: "Dispositivos e servicos de rede", devicesSub: "Cisco NX-OS · Huawei VRP · Arista EOS · Kea DHCP",
            event: "evento / intencao", apply: "aplica comandos",
            s1: "NSoT → DSM", s2: "DSM → CLI + avaliacao", s3: "CLI → dispositivo",
            legend: "Clique em um bloco ou badge para abrir a fase", contrib: "contribuicao por fase" },
      es: { nsot: "Fuente de Verdad de la Red", nsotSub: "NSoT / Netbox · estado deseado",
            orch: "net2d", orchSub: "Orquestador logicamente centralizado · crea PipelineRun",
            artifacts: "Repositorio de artefactos", artifactsSub: "CLI generada · votos · veredictos · evidencias · telemetria",
            devices: "Dispositivos y servicios de red", devicesSub: "Cisco NX-OS · Huawei VRP · Arista EOS · Kea DHCP",
            event: "evento / intencion", apply: "aplica comandos",
            s1: "NSoT → DSM", s2: "DSM → CLI + evaluacion", s3: "CLI → dispositivo",
            legend: "Haz clic en un bloque o badge para abrir la fase", contrib: "contribucion por fase" },
      en: { nsot: "Network Source of Truth", nsotSub: "NSoT / Netbox · desired state",
            orch: "net2d", orchSub: "Logically centralized orchestrator · creates PipelineRun",
            artifacts: "Artifact repository", artifactsSub: "generated CLI · votes · verdicts · evidence · telemetry",
            devices: "Network devices and services", devicesSub: "Cisco NX-OS · Huawei VRP · Arista EOS · Kea DHCP",
            event: "event / intent", apply: "applies commands",
            s1: "NSoT → DSM", s2: "DSM → CLI + assessment", s3: "CLI → device",
            legend: "Click a block or badge to open the phase", contrib: "contribution per phase" }
    }[lang];

    const W = 980, H = 600;
    const root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "arch-svg", role: "img" });

    // defs: arrow marker + gradients
    const defs = svg("defs");
    const marker = svg("marker", { id: "arrow", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
    marker.appendChild(svg("path", { d: "M0,0 L10,5 L0,10 z", fill: "#5b6b95" }));
    defs.appendChild(marker);
    root.appendChild(defs);

    // helper: container band (ecossistema)
    root.appendChild(svg("rect", { x: 40, y: 150, width: 900, height: 300, rx: 16, fill: "rgba(56,189,248,0.04)", stroke: "#26304f", "stroke-dasharray": "6 6" }));
    root.appendChild(svgText(56, 174, "Ecossistema Net2d", { fill: "#7e88a6", "font-size": "12", "font-family": "monospace", "font-weight": "700" }));

    // ---- node factory (clickable) ----
    function node(opts) {
      // opts: x,y,w,h, title, sub, color, phase(id|null), accent
      const g = svg("g", { class: opts.phase ? "node" : "" });
      if (opts.phase) {
        g.setAttribute("role", "link");
        g.setAttribute("tabindex", "0");
        g.style.cursor = "pointer";
        const go = function () { window.location.href = "fase.html?id=" + opts.phase + "&lang=" + lang; };
        g.addEventListener("click", go);
        g.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
        const tt = svg("title");
        tt.textContent = opts.tip || "";
        g.appendChild(tt);
      }
      const rect = svg("rect", {
        x: opts.x, y: opts.y, width: opts.w, height: opts.h, rx: 12,
        fill: opts.fill || "#151d38", stroke: opts.stroke || "#26304f", "stroke-width": opts.sw || 1.4,
        class: "node-rect"
      });
      g.appendChild(rect);
      const cx = opts.x + opts.w / 2;
      g.appendChild(svgText(cx, opts.y + (opts.sub ? 28 : opts.h / 2 + 5), opts.title, {
        fill: opts.color || "#e8ecf6", "font-size": opts.fs || "16", "font-weight": "750",
        "text-anchor": "middle", "font-family": opts.mono ? "monospace" : "inherit"
      }));
      if (opts.sub) {
        g.appendChild(svgText(cx, opts.y + 48, opts.sub, {
          fill: "#aab3cc", "font-size": "11.5", "text-anchor": "middle"
        }));
      }
      // phase badges
      if (opts.badges) {
        opts.badges.forEach(function (b, i) {
          const bx = opts.x + 14 + i * 30;
          const by = opts.y + opts.h - 16;
          const bg = svg("g", { class: "node" });
          bg.style.cursor = "pointer";
          bg.setAttribute("tabindex", "0");
          const go = function (e) { e.stopPropagation(); window.location.href = "fase.html?id=" + b.id + "&lang=" + lang; };
          bg.addEventListener("click", go);
          bg.addEventListener("keydown", function (e) { if (e.key === "Enter") go(e); });
          bg.appendChild(svg("circle", { cx: bx, cy: by, r: 11, fill: PHASE_HEX[b.c], opacity: "0.92" }));
          bg.appendChild(svgText(bx, by + 4, "P" + b.id, { fill: "#06121f", "font-size": "10.5", "font-weight": "800", "text-anchor": "middle", "font-family": "monospace" }));
          const tt = svg("title"); tt.textContent = b.tip; bg.appendChild(tt);
          g.appendChild(bg);
        });
      }
      root.appendChild(g);
      return { cx: cx, x: opts.x, y: opts.y, w: opts.w, h: opts.h, bottom: opts.y + opts.h, right: opts.x + opts.w };
    }

    function arrow(x1, y1, x2, y2, label, labelDx, labelDy) {
      root.appendChild(svg("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: "#5b6b95", "stroke-width": 1.8, "marker-end": "url(#arrow)" }));
      if (label) {
        root.appendChild(svgText(((x1 + x2) / 2) + (labelDx || 0), ((y1 + y2) / 2) + (labelDy || 0), label, { fill: "#7e88a6", "font-size": "11", "text-anchor": "middle" }));
      }
    }

    // ---- NSoT (top) ----
    const nsot = node({ x: 340, y: 30, w: 300, h: 66, title: L.nsot, sub: L.nsotSub, color: "#38bdf8", fill: "#11203a", stroke: "#2a4a78" });

    // ---- net2d orchestrator (band top) ----
    const orch = node({
      x: 90, y: 180, w: 800, h: 70, title: L.orch, sub: L.orchSub, color: "#818cf8",
      fill: "#1a1f44", stroke: "#3b3f86", sw: 2, mono: true, phase: 1, tip: "P1-P2: fundacao arquitetural e orquestracao",
      badges: [
        { id: 1, c: "p1", tip: "P1 · ERRC 2024: arquitetura inicial em camadas" },
        { id: 2, c: "p2", tip: "P2 · SBRC-SF 2025: generalizacao SSoT" },
        { id: 3, c: "p3", tip: "P3 · SBSeg 2025: reatividade a eventos (DynSecNet)" }
      ]
    });

    // event arrow NSoT -> orch
    arrow(nsot.cx, nsot.bottom, orch.cx, orch.y, L.event, 70, -4);

    // ---- specialized services row ----
    const sy = 300, sh = 80;
    const s1 = node({ x: 90, y: sy, w: 240, h: sh, title: "nsot2dsm", sub: L.s1, color: "#22d3ee", mono: true, phase: 4, tip: "Normalizacao NSoT -> DSM (conceito de DSM em P4)",
      badges: [{ id: 4, c: "p4", tip: "P4 · ERRC 2025: DSM como contrato intermediario" }] });
    const s2 = node({ x: 370, y: sy, w: 240, h: sh, title: "dsm2cli", sub: L.s2, color: "#34d399", mono: true, phase: 5, tip: "Traducao DSM->CLI + avaliacao semantica",
      badges: [
        { id: 4, c: "p4", tip: "P4 · ERRC 2025: traducao DSM->CLI com LLMs" },
        { id: 5, c: "p5", tip: "P5 · SBRC 2026: avaliacao semantica independente" },
        { id: 6, c: "p6", tip: "P6 · WIARC 2026: benchmark reprodutivel" }
      ] });
    const s3 = node({ x: 650, y: sy, w: 240, h: sh, title: "cli2exec", sub: L.s3, color: "#fbbf24", mono: true, phase: 3, tip: "Execucao controlada nos dispositivos",
      badges: [{ id: 3, c: "p3", tip: "P3 · SBSeg 2025: execucao reativa de politicas" }] });

    // orch -> services
    arrow(s1.cx, orch.bottom, s1.cx, s1.y, "1");
    arrow(s2.cx, orch.bottom, s2.cx, s2.y, "2");
    arrow(s3.cx, orch.bottom, s3.cx, s3.y, "3");

    // ---- artifacts repo (left/bottom) ----
    const art = node({ x: 90, y: 470, w: 380, h: 60, title: L.artifacts, sub: L.artifactsSub, color: "#aab3cc", fill: "#131a30", stroke: "#26304f" });
    // dsm2cli -> artifacts
    arrow(s2.cx, s2.bottom, art.cx, art.y, "");

    // ---- devices (bottom right) ----
    const dev = node({ x: 510, y: 470, w: 380, h: 60, title: L.devices, sub: L.devicesSub, color: "#34d399", fill: "#10241c", stroke: "#2f6b50" });
    // cli2exec -> devices
    arrow(s3.cx, s3.bottom, dev.cx, dev.y, L.apply, 70, 0);

    // legend (contribution colors)
    const legY = 560;
    const lg = svg("g");
    lg.appendChild(svgText(56, legY, L.contrib + ":", { fill: "#7e88a6", "font-size": "11.5", "font-family": "monospace" }));
    ["p1", "p2", "p3", "p4", "p5", "p6"].forEach(function (c, i) {
      const x = 200 + i * 86;
      lg.appendChild(svg("circle", { cx: x, cy: legY - 4, r: 7, fill: PHASE_HEX[c] }));
      lg.appendChild(svgText(x + 13, legY, "P" + (i + 1) + " " + PHASES[lang][i].venue, { fill: "#aab3cc", "font-size": "10.5" }));
    });
    root.appendChild(lg);

    return root;
  }

  /* ---- Figura de capa do hero (adapta ao tema via classes CSS) ---- */
  function buildHeroArt(lang) {
    const S = SITE[lang].home;
    const W = 460, H = 380;
    const root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "hero-art", role: "img", "aria-label": "Net2d" });

    const defs = svg("defs");
    const m = svg("marker", { id: "ha-arrow", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
    m.appendChild(svg("path", { d: "M0,0 L10,5 L0,10 z", fill: "#38bdf8" }));
    defs.appendChild(m);
    root.appendChild(defs);

    // chips topo/baixo (estado desejado / operacional)
    function chip(y, label, dotColor) {
      const g = svg("g");
      g.appendChild(svg("rect", { x: 70, y: y, width: 320, height: 44, rx: 12, class: "ha-card" }));
      g.appendChild(svg("circle", { cx: 96, cy: y + 22, r: 7, fill: dotColor }));
      const t = svgText(116, y + 27, label, { class: "ha-title" });
      g.appendChild(t);
      root.appendChild(g);
    }
    chip(20, S.heroArtDesired, "#38bdf8");
    chip(316, S.heroArtOperational, "#34d399");

    // pilha de servicos no meio
    const services = [
      { y: 100, name: "net2d", sub: "orquestrador" },
      { y: 162, name: "nsot2dsm  ·  dsm2cli  ·  cli2exec", sub: "servicos" },
      { y: 224, name: "DSM → CLI → exec", sub: "pipeline observavel" }
    ];
    services.forEach(function (s) {
      const g = svg("g");
      g.appendChild(svg("rect", { x: 70, y: s.y, width: 320, height: 50, rx: 12, class: "ha-card" }));
      g.appendChild(svgText(90, s.y + 22, s.name, { class: "ha-title", "font-family": "monospace" }));
      g.appendChild(svgText(90, s.y + 40, s.sub, { class: "ha-label" }));
      root.appendChild(g);
    });

    // linha vertical de fluxo com setas
    const xline = 230;
    [
      [64, 100], [150, 162], [212, 224], [274, 316]
    ].forEach(function (seg) {
      root.appendChild(svg("line", { x1: xline, y1: seg[0], x2: xline, y2: seg[1], class: "ha-flow", "stroke-width": 2, "marker-end": "url(#ha-arrow)" }));
    });

    return root;
  }

  /* ---- Timeline ---- */
  function buildTimeline(lang) {
    const phases = PHASES[lang];
    const ui = SITE[lang].phaseUi;
    const tl = el("div", { class: "timeline" });
    phases.forEach(function (p) {
      const item = el("div", { class: "tl-item" });
      item.style.setProperty("--c", "var(--" + p.color + ")");
      const node = el("div", { class: "tl-node", text: "P" + p.id });
      const card = el("a", { class: "tl-card", href: "fase.html?id=" + p.id + "&lang=" + lang });
      const meta = el("div", { class: "tl-meta", children: [
        el("span", { class: "tl-year", text: p.year }),
        el("span", { class: "tag", text: p.tag }),
        el("span", { class: "tl-venue", text: p.venue })
      ] });
      card.appendChild(meta);
      card.appendChild(el("h3", { text: p.short }));
      card.appendChild(el("p", { text: p.summary }));
      const go = { pt: "Ver detalhes da fase →", es: "Ver detalles de la fase →", en: "See phase details →" }[lang];
      card.appendChild(el("div", { class: "tl-go", text: go }));
      item.appendChild(node);
      item.appendChild(card);
      tl.appendChild(item);
    });
    return tl;
  }

  /* ---- Render completo ---- */
  function render(lang) {
    const S = SITE[lang];
    const app = document.getElementById("app");
    app.innerHTML = "";
    setLang(lang);

    // HERO (duas colunas: texto + figura de capa)
    const hero = el("section", { class: "hero", attrs: { id: "top" } });
    const hw = el("div", { class: "wrap" });
    const heroGrid = el("div", { class: "hero-grid" });
    const heroLeft = el("div");
    heroLeft.appendChild(el("span", { class: "kicker", text: S.home.kicker }));
    heroLeft.appendChild(el("h1", { text: S.home.title }));
    heroLeft.appendChild(el("p", { class: "subtitle", text: S.home.subtitle }));
    heroLeft.appendChild(el("div", { class: "byline", children: [
      el("span", { html: "<strong>" + S.home.author + "</strong>" }),
      el("span", { text: S.home.advisors })
    ] }));
    heroLeft.appendChild(el("p", { class: "lede", text: S.home.lede }));
    heroLeft.appendChild(el("div", { class: "btn-row", children: [
      el("a", { class: "btn btn-primary", href: "#timeline", text: S.home.ctaTimeline }),
      el("a", { class: "btn btn-ghost", href: "#architecture", text: S.home.ctaArch })
    ] }));
    const heroArtCard = el("div", { class: "hero-art-card" });
    heroArtCard.appendChild(buildHeroArt(lang));
    heroGrid.appendChild(heroLeft);
    heroGrid.appendChild(heroArtCard);
    hw.appendChild(heroGrid);
    hero.appendChild(hw);
    app.appendChild(hero);

    // PROBLEM + AXIS
    const probSec = el("section", { attrs: { id: "problem" } });
    const pw = el("div", { class: "wrap split" });
    pw.appendChild(el("div", { class: "panel", children: [
      el("span", { class: "eyebrow", text: S.home.problemTitle }),
      el("h3", { text: S.home.axisTitle }),
      el("p", { text: S.home.problem })
    ] }));
    const axis = el("div", { class: "axis" });
    axis.appendChild(el("div", { class: "axis-card desired", children: [
      el("h4", { text: S.home.axisDesired }), el("p", { text: S.home.axisDesiredDesc })
    ] }));
    axis.appendChild(el("div", { class: "axis-arrow", text: "↓" }));
    axis.appendChild(el("div", { class: "axis-card operational", children: [
      el("h4", { text: S.home.axisOperational }), el("p", { text: S.home.axisOperationalDesc })
    ] }));
    pw.appendChild(axis);
    probSec.appendChild(pw);
    app.appendChild(probSec);

    // ARCHITECTURE
    const archSec = el("section", { attrs: { id: "architecture" } });
    const aw = el("div", { class: "wrap" });
    aw.appendChild(el("div", { class: "section-head", children: [
      el("h2", { text: S.home.archTitle }),
      el("p", { text: S.home.archLede })
    ] }));
    const archWrap = el("div", { class: "arch-wrap" });
    archWrap.appendChild(buildArchSVG(lang));
    aw.appendChild(archWrap);
    // conceptual chain
    const chain = el("div", { class: "chain-bar" });
    const chainParts = S.product.chain.split("→");
    chainParts.forEach(function (part, i) {
      chain.appendChild(el("span", { class: "chain-step", text: part.trim() }));
      if (i < chainParts.length - 1) chain.appendChild(el("span", { class: "chain-sep", text: "→" }));
    });
    aw.appendChild(chain);
    archSec.appendChild(aw);
    app.appendChild(archSec);

    // TIMELINE
    const tlSec = el("section", { attrs: { id: "timeline" } });
    const tw = el("div", { class: "wrap" });
    tw.appendChild(el("div", { class: "section-head", children: [
      el("h2", { text: S.home.timelineTitle }),
      el("p", { text: S.home.timelineLede })
    ] }));
    tw.appendChild(buildTimeline(lang));
    tlSec.appendChild(tw);
    app.appendChild(tlSec);

    // VIDEO
    const vidSec = el("section", { attrs: { id: "video" } });
    const vw = el("div", { class: "wrap" });
    vw.appendChild(el("div", { class: "section-head", children: [
      el("h2", { text: S.home.videoTitle }),
      el("p", { text: S.home.videoLede })
    ] }));
    const vwrap = el("div", { class: "video-wrap" });
    const vframe = el("div", { class: "video-frame" });
    const iframe = el("iframe", { attrs: {
      src: "https://www.youtube-nocookie.com/embed/" + VIDEO_ID,
      title: S.home.videoTitle,
      loading: "lazy",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: ""
    } });
    vframe.appendChild(iframe);
    vwrap.appendChild(vframe);
    vw.appendChild(vwrap);
    vidSec.appendChild(vw);
    app.appendChild(vidSec);

    // THREE MOVES
    const mvSec = el("section");
    const mw = el("div", { class: "wrap" });
    mw.appendChild(el("div", { class: "section-head", children: [ el("h2", { text: S.home.threeMovesTitle }) ] }));
    const moves = el("div", { class: "moves" });
    S.home.threeMoves.forEach(function (m, i) {
      moves.appendChild(el("div", { class: "move-card", children: [
        el("span", { class: "num", text: "0" + (i + 1) }),
        el("h4", { text: m.t }),
        el("p", { text: m.d })
      ] }));
    });
    mw.appendChild(moves);
    mvSec.appendChild(mw);
    app.appendChild(mvSec);

    // FINAL PRODUCT
    const prSec = el("section", { attrs: { id: "product" } });
    const prw = el("div", { class: "wrap" });
    prw.appendChild(el("div", { class: "section-head", children: [
      el("h2", { text: S.product.title }),
      el("p", { text: S.product.lede })
    ] }));
    const pchain = el("div", { class: "product-chain", text: S.product.chain });
    prw.appendChild(pchain);
    const comps = el("div", { class: "components" });
    S.product.components.forEach(function (c) {
      const card = el("div", { class: "comp", children: [
        el("h4", { text: c.name }), el("p", { text: c.role })
      ] });
      if (c.repo) {
        card.appendChild(el("a", { class: "repo-link", href: c.repo, attrs: { target: "_blank", rel: "noopener" }, text: "GitHub ↗" }));
      }
      comps.appendChild(card);
    });
    prw.appendChild(comps);
    const notes = el("div", { class: "note-cards", children: [
      el("div", { class: "note", children: [ el("h3", { text: S.product.instTitle }), el("p", { text: S.product.inst }) ] }),
      el("div", { class: "note", children: [ el("h3", { text: S.product.scopeTitle }), el("p", { text: S.product.scope }) ] })
    ] });
    prw.appendChild(notes);
    prSec.appendChild(prw);
    app.appendChild(prSec);

    // header nav text + lang switcher
    renderChrome(lang);
  }

  function renderChrome(lang) {
    const S = SITE[lang];
    document.getElementById("nav-home").textContent = S.nav.home;
    document.getElementById("nav-arch").textContent = S.nav.architecture;
    document.getElementById("nav-timeline").textContent = S.nav.timeline;
    document.getElementById("nav-product").textContent = S.nav.product;
    document.getElementById("footer-text").textContent = S.footer.text;
    document.getElementById("footer-repos").textContent = S.footer.repos;
    document.getElementById("footer-credit-label").textContent = S.footer.credit;
    buildLangSwitcher(document.getElementById("lang-switch"), lang, function (newLang) { render(newLang); });
    buildThemeToggle(document.getElementById("theme-toggle"), S.theme);
  }

  document.addEventListener("DOMContentLoaded", function () {
    render(getLang());
  });
})();
