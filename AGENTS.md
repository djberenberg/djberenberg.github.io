# AGENTS.md

## Project
- Jekyll site for GitHub Pages.
- Main layout: `_layouts/default.html`.
- Homepage content: `index.md`.
- Widgets/demos live as standalone HTML pages (e.g., `xor-lab.html`).

## Workflow
- Prefer static HTML/CSS/JS; no server-side dependencies.
- Keep changes local to page files unless site-wide styling is needed in `_layouts/default.html`.
- Avoid touching `_site/` (generated output).

## Editing Guidelines
- Favor readable, minimal vanilla JS.
- Keep CSS in the page unless it is clearly shared.
- Match existing design language (fonts/colors) unless asked to redesign.

## Testing
- Open pages directly in a browser for quick validation.
- If edits affect layout, check desktop and mobile widths.
