# Portfolio Angular Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish Ana Paula Rabelo's full-width Angular portfolio on GitHub Pages with CV-based experience, INSIS case study, expanded projects, and lightweight interactions.

**Architecture:** A standalone Angular root component renders the page. Project data and its filter live in a small pure module. CSS handles responsive layout and motion; GitHub Actions builds the static Pages artifact.

**Tech Stack:** Angular 21, TypeScript, CSS, GitHub Actions, GitHub Pages.

**Spec:** User request in this conversation; CV at `/home/ana/Downloads/Ana Paula Rabelo - CV PTBR - 0604.pdf` is a factual source only.

## Global Constraints

- Public contact details: email, LinkedIn, GitHub only; never publish the CV phone number.
- INSIS private repositories may be described at a high level but must not be linked or have private source copied.
- Site must fill the viewport width and be usable on desktop and mobile.
- Respect reduced-motion preferences.
- GitHub Pages base path is `/portfolio-fullstack/`.

## Review Focus

- Public build must not include phone or private INSIS URLs.
- Project filters must retain correct card/link behavior.
- Mobile layouts must not overflow horizontally.
- Photos and text need useful alternative text and readable contrast.
- Build assets must resolve under the repository Pages path.

### Task 1: Angular project and project data

**Files:** `package.json`, `angular.json`, `src/app/projects.ts`, `src/app/projects.test.ts`

- [ ] Write and run failing filter/privacy tests.
- [ ] Add typed projects and filter function; rerun tests.
- [ ] Install dependencies and run production build.

### Task 2: Editorial responsive page

**Files:** `src/app/app.ts`, `src/app/app.html`, `src/app/app.css`, `src/styles.css`, `src/index.html`

- [ ] Build accessible CV-based sections, project filters, navigation, and contact actions.
- [ ] Add responsive full-bleed visual system and reduced-motion support.
- [ ] Verify production build and desktop/mobile preview.

### Task 3: Publish to GitHub Pages

**Files:** `.github/workflows/pages.yml`, `README.md`

- [ ] Add Pages workflow and document local development.
- [ ] Verify test and build locally.
- [ ] Push repository and confirm Pages deployment is live.
