# Tiệm Bún Cá Ngừ — SOP portal

Static Vietnamese SOP portal. Vercel uses `dist/` as the output directory. No build command or dependencies are required.

Features: searchable 30-group master index plus 3 supplementary SOPs; Module 00 and Module 01 draft procedure views; printable SOPs and staff training checklist; local training records; editable local skill matrix; owner information and notes.

Only drafted SOPs contain procedure content. Later modules are explicitly marked unwritten. No official recipes, limits, staff records, or KPI results are fabricated. All documents remain draft and require owner approval.

Checklist records, notes, skill matrix and owner fields use browser localStorage and are not shared between users or devices. Training records can be exported as JSON. No backend authorization, approval workflow or cross-branch synchronization is implemented.

## Deploy with Vercel

1. Import `https://github.com/longbds0108/SOPBUNCA` into Vercel.
2. Keep the project root at the repository root.
3. Set Framework Preset to `Other`.
4. Leave Build Command empty.
5. Deploy. The included `vercel.json` publishes `dist/`.

For the Vercel CLI:

```bash
vercel --prod
```

The site is a client-side hash-routed app, so links such as `/#library` and `/#checklists` work without a server API.
