---
name: project_root
description: The real Next.js app root vs the misleading reported working directory
metadata:
  type: reference
---

The reported working directory `C:\Users\harik\source\repos\genisis\aivanceworks-website\aivanceworks-website\` is a double-nested dead-end that contains only `public/` (and `.claude/`).

The REAL Next.js app root is one level up: `C:\Users\harik\source\repos\genisis\aivanceworks-website\` — that is where `package.json`, `src/`, `next.config`, and `npm run build` / `npx tsc --noEmit` must run.

All source lives under `.../aivanceworks-website/src/` (app, components, data, lib, types). Use absolute paths from there. Verify with `find genisis -maxdepth 4 -name package.json -not -path '*/node_modules/*'` if in doubt.

Brand: code uses `BRAND_PREFIX = 'C10'` and `SITE_CONFIG.name = 'C10 Software'` in `src/lib/constants.ts` (despite the "aivanceworks" folder name). Never hardcode a brand string — import and use these.
