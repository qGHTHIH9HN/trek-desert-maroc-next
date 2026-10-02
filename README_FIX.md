# Trek Desert Maroc Relative Imports Fix

This package removes all `@/` imports and uses simple relative imports instead.

It fixes builds where Vercel still cannot resolve:
- @/lib/api
- @/components/TourCard
- @/components/BlogCard

Upload/replace these files in GitHub:
- app/page.tsx
- app/tours/page.tsx
- app/blog/page.tsx
- app/blog/[slug]/page.tsx
- app/tour/[slug]/page.tsx
- components/BlogCard.tsx
- components/TourCard.tsx
- tsconfig.json

After commit, redeploy on Vercel with cache cleared.
