# Trek Desert Maroc — Clean Next.js Project

This is a new clean GitHub/Vercel project for **Trek Desert Maroc**.
It does not edit the DesertBrise Travel frontend.

## Purpose

A trekking-specialist website focused on:

- Trek désert Maroc
- Trek désert M’Hamid
- Erg Chigaga trekking
- Trek Sahara Maroc
- Atlas and Toubkal trekking
- Yoga trek / retreats
- Scheduled departures
- Private tailor-made treks

## Dynamic admin connection

The frontend reads content from the existing PHP admin/API through:

```env
NEXT_PUBLIC_PHP_API_BASE=https://desertbrise-travel.com/public/api
PHP_PUBLIC_BASE=https://desertbrise-travel.com/public
```

You can later change this to a Trek Desert Maroc-specific API if needed.

## Upload to a new GitHub repo

1. Create a new empty GitHub repository named:

```text
trek-desert-maroc-next
```

2. Upload all files from this ZIP into that repository.

3. Import the repository in Vercel.

4. Add environment variables:

```env
NEXT_PUBLIC_PHP_API_BASE=https://desertbrise-travel.com/public/api
PHP_PUBLIC_BASE=https://desertbrise-travel.com/public
NEXT_PUBLIC_SITE_URL=https://trekdesertmaroc.com
```

5. Deploy.

## Pages included

- `/` — trekking-focused homepage
- `/tours` — trekking tours, scheduled departures, yoga retreats
- `/tour/[slug]` — dynamic tour detail from PHP admin
- `/blog` — trekking blog hub
- `/blog/[slug]` — dynamic blog article
- `/yoga-trek-retreat-maroc` — yoga + trekking retreat page
- `/contact` — trip planning contact form

## Admin fields recommended later

For future scheduled departures, add these fields to each tour in the PHP admin/API:

- `departure_type`: private / scheduled / planned
- `next_departure`
- `departure_dates`
- `group_size`
- `difficulty`
- `walking_hours`
- `region`
- `tour_style`: desert_trek / atlas_trek / yoga_retreat / scheduled
