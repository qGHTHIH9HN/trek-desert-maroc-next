# Trek Desert Maroc TypeScript Fix

Replace the root package.json with this file.

This pins TypeScript to a version supported by the current Next.js version.

Fixes Vercel error:
TypeScript 7.0.2 is not supported by this version of Next.js.

After committing:
- Redeploy in Vercel
- Clear build cache / redeploy without cache
