// Renders the project cards from projects.js and wires up the filters and copy button.
(function () {
  const projects = window.PROJECTS || [];
  const grid = document.getElementById("project-grid");
  const filters = document.getElementById("filters");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const cats = (p) => [].concat(p.category || []);
  const filterStatus = document.getElementById("filter-status");
  const NEW_TAB = `<span class="sr-only"> (opens in a new tab)</span>`;

  // Link text names the project so screen reader link lists make sense on their own.
  function linkTo(href, label, title) {
    return `<a class="more" href="${esc(href)}" target="_blank" rel="noopener">${label}<span class="sr-only">: ${esc(title)}</span>${NEW_TAB} <span aria-hidden="true">→</span></a>`;
  }

  function card(p) {
    const media = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.alt || "")}" loading="lazy">`
      : p.inProgress
        ? `<span class="cover cover--wip" aria-hidden="true"><span class="cover-title">${esc(p.title)}</span><span class="cover-note">In progress</span></span>`
        : `<span class="cover" aria-hidden="true">${esc(cats(p)[0] || "Project")}</span>`;
    const links = [
      p.link ? linkTo(p.link, "View project", p.title) : "",
      p.code ? linkTo(p.code, "Code", p.title) : "",
      p.slides ? linkTo(p.slides, "Slides", p.title) : "",
    ].join("");
    const action = links ? `<span class="links">${links}</span>` : p.draft ? `<span class="draft">Placeholder</span>` : "";
    const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");
    return `
      <article class="card">
        <div class="card-media">${media}</div>
        <p class="course label">${esc([cats(p).join(", "), p.inProgress ? "In Progress" : "", p.date].filter(Boolean).join(" · "))}</p>
        <h3>${esc(p.title)}</h3>
        <p class="summary">${esc(p.summary || "")}</p>
        <div class="card-foot">
          ${tags ? `<ul class="tags" aria-label="Skills">${tags}</ul>` : "<span></span>"}
          ${action}
        </div>
      </article>`;
  }

  function render(category, announce) {
    const list = category === "All" ? projects : projects.filter((p) => cats(p).includes(category));
    grid.innerHTML = list.length ? list.map(card).join("") : `<p class="empty">No projects in this category yet.</p>`;
    if (announce) filterStatus.textContent = `Showing ${list.length} ${category === "All" ? "" : category + " "}project${list.length === 1 ? "" : "s"}.`;
  }

  const categories = ["All", ...new Set(projects.flatMap(cats).filter(Boolean))];
  filters.innerHTML = categories
    .map((c, i) => `<button type="button" class="chip" id="filter-${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`)
    .join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filters.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    render(btn.textContent, true);
  });
  render("All");

  const copyBtn = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  const email = document.getElementById("email");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = email.textContent.trim();
      const done = () => (status.textContent = "Copied to clipboard.");
      const fallback = () => {
        const range = document.createRange();
        range.selectNodeContents(email);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        status.textContent = "Selected. Press Ctrl+C or ⌘C to copy.";
      };
      try {
        navigator.clipboard.writeText(text).then(done, fallback);
      } catch (err) {
        fallback();
      }
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
