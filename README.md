# AREPargne

AREPargne is an Astro site powered by Tailwind CSS and MDX. This document explains how to run the project locally and how the GitHub Actions workflow deploys the production build to GitHub Pages.

## Project structure

Key directories you will work with:

```text
├── public/              # Static assets copied to the final build as-is
├── src/                 # Pages, layouts, components, styles, and data
├── tests/               # Vitest test suites
├── astro.config.mjs     # Astro project configuration
├── package.json         # Scripts and dependencies
└── tailwind.config.cjs  # Tailwind CSS configuration
```

## Prerequisites

- Node.js 20 (match the version used in CI/CD)
- npm 10+

Install dependencies once your environment is ready:

```bash
npm ci
```

## Local development

```bash
npm run dev
```

This starts the development server on [http://localhost:4321](http://localhost:4321) with hot reloading.

## Build and preview locally

```bash
npm run build   # Generates the static site in ./dist
npm run preview # Serves the ./dist output so you can verify before deploying
```

## Deploying to GitHub Pages

Deployments are handled by the workflow in `.github/workflows/deploy.yml`.

1. **Trigger** – Every push to the `main` branch (or manual dispatch) runs the workflow.
2. **Build job**
   - Checks out the repository and sets up Node.js 20 with npm caching.
   - Installs dependencies with `npm ci` and builds the production site (`npm run build`).
   - Uploads the generated `dist/` directory as the artifact that GitHub Pages expects.
3. **Deploy job**
   - Downloads the previously uploaded artifact.
   - Publishes the static site using `actions/deploy-pages@v4`, creating or updating the `github-pages` environment.

> **Heads up:** The `astro.config.mjs` file automatically configures the correct `site` and `base` values for GitHub Pages by reading the `GITHUB_REPOSITORY` environment variable that the workflow sets during the build. No additional manual configuration is required once the workflow finishes.

If you ever need to redeploy without pushing new changes, use the **Run workflow** button in the GitHub Actions tab and choose the `Deploy to GitHub Pages` workflow.
