/*
 * i18n.js
 * Gerencia o idioma ativo (PT/ES/EN), persistido em localStorage,
 * e expoe utilitarios usados por home.js e fase.js.
 */

const LANGS = ["pt", "es", "en"];
const DEFAULT_LANG = "pt";
const LANG_KEY = "net2d-lang";

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && LANGS.includes(stored)) return stored;
  // tenta inferir do navegador
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  if (LANGS.includes(nav)) return nav;
  return DEFAULT_LANG;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
}

/* Constroi o seletor de idioma e injeta no elemento alvo. onChange recebe o novo lang. */
function buildLangSwitcher(target, current, onChange) {
  target.innerHTML = "";
  LANGS.forEach(function (lang) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn" + (lang === current ? " is-active" : "");
    btn.textContent = SITE[lang].meta.label;
    btn.setAttribute("aria-pressed", lang === current ? "true" : "false");
    btn.setAttribute("aria-label", SITE[lang].meta.label);
    btn.addEventListener("click", function () {
      if (lang === current) return;
      setLang(lang);
      onChange(lang);
    });
    target.appendChild(btn);
  });
}

/* Helpers de criacao de elementos para reduzir verbosidade. */
function el(tag, opts) {
  opts = opts || {};
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  if (opts.href) node.href = opts.href;
  if (opts.attrs) {
    Object.keys(opts.attrs).forEach(function (k) { node.setAttribute(k, opts.attrs[k]); });
  }
  if (opts.children) {
    opts.children.forEach(function (c) { if (c) node.appendChild(c); });
  }
  return node;
}

function listFrom(items, cls) {
  const ul = el("ul", { class: cls || "bullets" });
  items.forEach(function (it) { ul.appendChild(el("li", { text: it })); });
  return ul;
}
