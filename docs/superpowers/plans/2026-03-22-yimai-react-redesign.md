# YIMAI React Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the corporate website from static HTML/CSS/JS to Vite + React, redesign the brand palette, and introduce a new abstract fluid SVG logo.

**Architecture:** Replace the static multi-page setup with a Vite app using React Router for page structure and shared layout components. Centralize brand tokens and layout primitives in a global stylesheet while keeping page content in focused route components.

**Tech Stack:** Vite, React, React Router, CSS

---

### Task 1: Scaffold the Vite + React app

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create package manifest and scripts**
- [ ] **Step 2: Create Vite entry files and root app shell**
- [ ] **Step 3: Link the global stylesheet and verify the app boots**

### Task 2: Build the shared brand system

**Files:**
- Create: `src/assets/logo-yimai.svg`
- Create: `src/components/BrandLogo.jsx`
- Create: `src/components/SiteHeader.jsx`
- Create: `src/components/SiteFooter.jsx`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Design and add the abstract fluid SVG logo**
- [ ] **Step 2: Implement the short-form brand treatment**
- [ ] **Step 3: Add the new color tokens and shared layout styles**

### Task 3: Port content into routed pages

**Files:**
- Create: `src/pages/Home.jsx`
- Create: `src/pages/About.jsx`
- Create: `src/pages/Products.jsx`
- Create: `src/pages/Contact.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create routed page components**
- [ ] **Step 2: Move the existing company/product/contact content into React JSX**
- [ ] **Step 3: Wire React Router navigation**

### Task 4: Redesign visuals and interactions

**Files:**
- Modify: `src/styles/global.css`
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/Reveal.jsx`

- [ ] **Step 1: Recompose the hero and section layouts around a lighter visual system**
- [ ] **Step 2: Replace the old dark palette with the new mineral/teal system**
- [ ] **Step 3: Add restrained reveal and header behaviors**

### Task 5: Validate and clean up

**Files:**
- Verify: `package.json`
- Verify: `src/`

- [ ] **Step 1: Install dependencies**
- [ ] **Step 2: Run `npm run build`**
- [ ] **Step 3: Remove obsolete static-only files if they are no longer needed**
