# Sintha Physiotherapy — website

Astro static site with git-based Decap CMS editing, built to replace the previous Wix site.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Outputs static files to `dist/`.

## Deploying (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → Deploy with GitHub**, pick this repo. Netlify reads `netlify.toml` automatically (build command `npm run build`, publish dir `dist`).
3. Once the site is live, enable no-code editing for the client:
   - **Site configuration → Identity → Enable Identity**
   - Identity → **Registration**: set to "Invite only"
   - Identity → **Services → Git Gateway**: enable it
   - Identity → **Invite users**: invite the client's email so they can log in at `/admin`
4. The client edits content at `https://<your-site>/admin` — no code required. Saved changes commit to this repo and Netlify redeploys automatically.

## Content

All editable copy lives under `content/` as markdown/YAML, matching the fields exposed in `public/admin/config.yml`. Images uploaded via the CMS land in `public/uploads/`.
