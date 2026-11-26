# ashen-portfolio

Personal portfolio built with Next.js and exported as a static site.

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production export with `pnpm build`.

## GitHub Pages

The `main` branch workflow builds the static export and deploys it to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The configured base path in `next.config.ts` matches this repository (`ashen-portfolio`). If deploying to a different repository, update `repoName` there to match; use an empty string for a `username.github.io` repository.

## Add a certification

Add an entry to `src/data/certifications.ts` with its name, issuer and date. Add `credentialUrl` when the certificate has a public verification link. The section displays its empty state until at least one entry is added.
