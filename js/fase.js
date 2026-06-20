/*
 * fase.js
 * Renderiza a pagina de detalhe de uma fase. Le ?id=N (1..6) e ?lang da URL.
 * Estrutura por fase: objetivos, ferramentas, resultados e o encaixe no todo.
 */

(function () {
  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function fmt(str, n) { return str.replace("{n}", n); }

  function render(lang) {
    setLang(lang);
    const S = SITE[lang];
    const ui = S.phaseUi;
    const phases = PHASES[lang];

    let id = parseInt(qs("id"), 10);
    if (isNaN(id) || id < 1 || id > phases.length) id = 1;
    const p = phases[id - 1];
    const prev = id > 1 ? phases[id - 2] : null;
    const next = id < phases.length ? phases[id] : null;

    document.title = "Fase " + id + " · " + p.short + " · Net2d";

    const app = document.getElementById("app");
    app.innerHTML = "";

    // HERO
    const hero = el("section", { class: "phase-hero" });
    const hw = el("div", { class: "wrap" });
    hw.appendChild(el("div", { class: "crumbs", children: [
      el("a", { href: "index.html?lang=" + lang, text: S.nav.home }),
      el("span", { text: "  /  " + ui.allPhases + "  /  " }),
      el("span", { text: fmt(ui.phaseOf, id) })
    ] }));
    const badge = el("div", { class: "phase-badge", children: [
      el("span", { class: "pn", text: "P" + id }),
      el("span", { text: p.venue }),
      el("span", { class: "tag", text: p.tag })
    ] });
    badge.style.setProperty("--c", "var(--" + p.color + ")");
    hw.appendChild(badge);
    hw.appendChild(el("h1", { text: p.title }));
    hw.appendChild(el("p", { class: "summary", text: p.summary }));
    const metaline = el("div", { class: "phase-metaline", children: [
      el("span", { html: "<strong style='color:var(--text)'>" + ui.venue + ":</strong> " + p.venueFull })
    ] });
    metaline.style.setProperty("--c", "var(--" + p.color + ")");
    hw.appendChild(metaline);
    hero.appendChild(hw);
    app.appendChild(hero);

    // BODY GRID
    const sec = el("section");
    const sw = el("div", { class: "wrap" });
    const grid = el("div", { class: "phase-grid" });
    grid.style.setProperty("--c", "var(--" + p.color + ")");

    // Objectives
    grid.appendChild(el("div", { class: "block", children: [
      el("h3", { class: "block-title", children: [ el("span", { class: "ic", text: "◎" }), document.createTextNode(ui.objectives) ] }),
      listFrom(p.objectives)
    ] }));

    // Results
    grid.appendChild(el("div", { class: "block", children: [
      el("h3", { class: "block-title", children: [ el("span", { class: "ic", text: "✓" }), document.createTextNode(ui.results) ] }),
      listFrom(p.results)
    ] }));

    // Tools (full width)
    const toolsBlock = el("div", { class: "block full" });
    toolsBlock.appendChild(el("h3", { class: "block-title", children: [ el("span", { class: "ic", text: "⚙" }), document.createTextNode(ui.tools) ] }));
    p.tools.forEach(function (t) {
      const tcard = el("div", { class: "tool", children: [
        el("h4", { text: t.name }),
        el("p", { text: t.desc })
      ] });
      if (t.repo) {
        tcard.appendChild(el("a", { class: "repo-link", href: t.repo, attrs: { target: "_blank", rel: "noopener" }, text: ui.repo + ": GitHub ↗" }));
      }
      toolsBlock.appendChild(tcard);
    });
    grid.appendChild(toolsBlock);

    // Fit (full width, highlighted)
    grid.appendChild(el("div", { class: "block full fit-block", children: [
      el("h3", { class: "block-title", children: [ el("span", { class: "ic", text: "❖" }), document.createTextNode(ui.fit) ] }),
      el("p", { text: p.fit, class: "fit-text" })
    ] }));

    sw.appendChild(grid);

    // prev/next nav
    const nav = el("div", { class: "phase-nav" });
    if (prev) {
      nav.appendChild(el("a", { href: "fase.html?id=" + prev.id + "&lang=" + lang, children: [
        el("span", { class: "dir", text: "← " + ui.prev }),
        el("span", { class: "ttl", text: "P" + prev.id + " · " + prev.short })
      ] }));
    } else {
      nav.appendChild(el("a", { href: "index.html?lang=" + lang, children: [
        el("span", { class: "dir", text: "← " + ui.allPhases }),
        el("span", { class: "ttl", text: S.nav.backHome })
      ] }));
    }
    if (next) {
      const nx = el("a", { class: "next", href: "fase.html?id=" + next.id + "&lang=" + lang, children: [
        el("span", { class: "dir", text: ui.next + " →" }),
        el("span", { class: "ttl", text: "P" + next.id + " · " + next.short })
      ] });
      nav.appendChild(nx);
    } else {
      nav.appendChild(el("a", { class: "next", href: "index.html?lang=" + lang + "#product", children: [
        el("span", { class: "dir", text: S.nav.product + " →" }),
        el("span", { class: "ttl", text: S.product.title })
      ] }));
    }
    sw.appendChild(nav);

    sec.appendChild(sw);
    app.appendChild(sec);

    renderChrome(lang);
  }

  function renderChrome(lang) {
    const S = SITE[lang];
    document.getElementById("nav-home").textContent = S.nav.home;
    document.getElementById("nav-home").href = "index.html?lang=" + lang;
    document.getElementById("nav-arch").href = "index.html?lang=" + lang + "#architecture";
    document.getElementById("nav-arch").textContent = S.nav.architecture;
    document.getElementById("nav-timeline").href = "index.html?lang=" + lang + "#timeline";
    document.getElementById("nav-timeline").textContent = S.nav.timeline;
    document.getElementById("nav-product").href = "index.html?lang=" + lang + "#product";
    document.getElementById("nav-product").textContent = S.nav.product;
    document.getElementById("footer-text").textContent = S.footer.text;
    document.getElementById("footer-repos").textContent = S.footer.repos;
    buildLangSwitcher(document.getElementById("lang-switch"), lang, function (newLang) {
      // mantem a mesma fase ao trocar idioma
      const id = parseInt(qs("id"), 10) || 1;
      history.replaceState(null, "", "fase.html?id=" + id + "&lang=" + newLang);
      render(newLang);
    });
    buildThemeToggle(document.getElementById("theme-toggle"), S.theme);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const urlLang = qs("lang");
    render((urlLang && ["pt", "es", "en"].includes(urlLang)) ? urlLang : getLang());
  });
})();
