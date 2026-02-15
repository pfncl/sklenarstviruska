# Sklenářství Ruská — Astro 5 + Svelte 5 (Cloudflare Workers)

Web sklenářství a rámování obrazů v Praze 10 Vršovicích. Konverze z WordPress (The7 theme + WPBakery + Revolution Slider) na moderní Astro 5 se Svelte 5 komponentami (runes). Deployuje se na **Cloudflare Workers** s custom doménou `sklenarstviruska.cz`.

## Požadavky

- Node.js 22+
- pnpm

## Instalace

```bash
pnpm install
```

## Vývoj

```bash
pnpm dev
```

Dev server běží na `http://localhost:4321`.

## Build

```bash
pnpm build
pnpm preview   # náhled produkčního buildu
```

Výstup se generuje do `dist/`. Statické stránky jsou prerenderované (výchozí chování Astro 5), kontaktní formuláře a admin stránka fungují přes **Astro Actions** (SSR na Cloudflare Workers).

## Deploy (Cloudflare Workers)

Deploy probíhá automaticky přes GitHub integraci — každý push do `main` spustí build na Cloudflare.

Manuální deploy:

```bash
pnpm deploy
```

Konfigurace workeru je v `wrangler.jsonc`. Custom domény `sklenarstviruska.cz` a `www.sklenarstviruska.cz` jsou nastaveny v sekci `routes`.

### Env proměnné

Env proměnné jsou definované pomocí **`astro:env`** modulu (typově bezpečné schéma v `astro.config.mjs`). Na produkci se nastavují přes Cloudflare CLI:

```bash
pnpm wrangler secret put RESEND_API_KEY
pnpm wrangler secret put CONTACT_EMAIL
pnpm wrangler secret put ADMIN_PASSWORD
pnpm wrangler secret put TURNSTILE_SECRET_KEY
```

| Proměnná | Popis |
|---|---|
| `RESEND_API_KEY` | API klíč z [resend.com](https://resend.com) pro odesílání emailů |
| `CONTACT_EMAIL` | Cílová adresa pro formuláře (default: sklenarstvi.ruska@seznam.cz) |
| `ADMIN_PASSWORD` | Heslo pro přístup na `/formulare` |
| `TURNSTILE_SECRET_KEY` | Secret key pro [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) |

Pro lokální vývoj vytvořte `.env` soubor dle `.env.example`.

### D1 databáze

Formulářová data se ukládají do **Cloudflare D1** (SQLite). Migrace:

```bash
pnpm wrangler d1 migrations apply sklenarstvi-messages --remote
```

## Struktura projektu

```
src/
├── actions/
│   └── index.ts                # Astro Actions — odesílání formulářů, admin login/logout
├── components/
│   ├── layout/
│   │   ├── TopBar.astro        # Kontaktní lišta (adresa, telefon, email, Facebook)
│   │   ├── Header.astro        # Logo + navigace + hamburger trigger
│   │   ├── Footer.astro        # Footer logo + copyright
│   │   ├── MobileMenu.svelte   # Slide-in mobilní menu
│   │   └── ScrollToTop.svelte  # Tlačítko scroll-to-top
│   ├── ui/
│   │   └── Icon.astro          # Inline SVG ikony (9 ikon místo FontAwesome)
│   ├── home/
│   │   ├── HeroSection.astro   # Statický hero (nahrazuje Revolution Slider)
│   │   ├── ServiceGrid.astro   # 4 karty služeb s ikonami
│   │   ├── Testimonial.astro   # Statický testimonial
│   │   └── CtaBanner.astro     # CTA sekce s tlačítkem na /kontakt
│   ├── about/
│   │   └── ProgressBar.svelte  # Animované progress bary (IntersectionObserver)
│   ├── faq/
│   │   └── Accordion.svelte    # FAQ accordion (7 otázek)
│   └── contact/
│       ├── ContactForm.svelte  # Kontaktní formulář s Turnstile + honeypot
│       ├── ContactInfo.astro   # Kontaktní údaje + otevírací doba
│       └── GoogleMap.svelte    # Google Maps iframe (lazy load)
├── data/
│   ├── navigation.ts           # Menu položky
│   ├── services.ts             # Služby (ikona, název, popis)
│   ├── faq.ts                  # 7 FAQ otázek + odpovědi
│   └── contact.ts              # Kontaktní údaje, otevírací doba
├── layouts/
│   └── BaseLayout.astro        # HTML shell, SEO meta tagy, fonty
├── pages/
│   ├── index.astro             # Homepage (prerender)
│   ├── o-nas.astro             # O nás (prerender)
│   ├── sluzby.astro            # Služby (prerender)
│   ├── poradna.astro           # Poradna + FAQ (prerender)
│   ├── kontakt.astro           # Kontakt + mapa (prerender)
│   └── formulare.astro         # Admin stránka pro zobrazení formulářů (SSR)
├── styles/
│   ├── variables.css           # CSS custom properties (barvy, fonty, breakpointy)
│   └── global.css              # Reset, základní styly
├── public/
│   └── images/                 # Obrázky ve WebP (loga, hero, fotky)
└── migrations/
    └── 0001_init.sql           # D1 schéma — tabulka messages
```

## Technologie

| Technologie | Použití |
|---|---|
| **Astro 5** | Framework, statické prerenderování + Astro Actions (SSR) |
| **Svelte 5** | Interaktivní komponenty (runes: `$state`, `$derived`, `$effect`) |
| **Cloudflare Workers** | Hosting + SSR runtime |
| **Cloudflare D1** | SQLite databáze pro ukládání formulářových dat |
| **Cloudflare Turnstile** | Anti-spam ochrana formulářů |
| **Resend API** | Odesílání emailů (`batch.send` — notifikace + potvrzení odesílateli) |
| **astro:env** | Typově bezpečné env proměnné se schéma validací |
| **CSS Custom Properties** | Design tokeny (barvy, typografie, rozestupy) |

## Kontaktní formuláře

Formuláře (na stránkách `/poradna` a `/kontakt`) používají **Astro Actions** (`src/actions/index.ts`):

- Validace vstupu přes Zod schéma (`astro:schema`)
- Honeypot anti-spam pole
- Cloudflare Turnstile verifikace (lazy-loaded při interakci)
- Odeslání dvou emailů najednou přes `resend.batch.send()`:
  1. **Notifikace** na `CONTACT_EMAIL` s detaily zprávy
  2. **Potvrzení** odesílateli na jeho email
- Odesílatel: `formular@sklenarstviruska.cz` (doména ověřena v Resend)
- Uložení do D1 databáze

## Admin stránka (`/formulare`)

- Zabezpečená heslem (cookie-based session, SHA-256 hash)
- Turnstile ochrana přihlašovacího formuláře
- Zobrazení všech přijatých zpráv s možností smazání
- Vyloučena ze sitemapy, `noindex`

## SEO

- **Meta tagy**: title, description, canonical, OpenGraph pro každou stránku
- **Sitemap**: automaticky generovaná (`@astrojs/sitemap`), `/formulare` vyloučena
- **robots.txt**: povoluje indexaci, odkazuje na sitemap
- **Obrázky**: WebP formát, explicitní `width`/`height`, `loading="lazy"`, responsive `srcset`
- **Fonty**: Google Fonts načítané asynchronně (preload + swap)

## Hydrační strategie

Svelte komponenty používají různé hydrační direktivy podle priority:

- `client:load` — MobileMenu, ScrollToTop (nutné ihned)
- `client:visible` — Accordion, ContactForm, ProgressBar, GoogleMap (hydrace při scrollu)

## Porovnání s WordPress originálem

| Metrika | WordPress | Astro 5 |
|---|---|---|
| CSS | ~800 KB (The7 + WPBakery) | ~8 KB |
| JS | ~2.6 MB (jQuery + plugins) | ~15 KB (Svelte chunky) |
| Obrázky | JPG/PNG | WebP + responsive srcset |
| Ikony | FontAwesome (~1.3 MB) | 9 inline SVG |
| Závislosti | jQuery, WPBakery, Revolution Slider, FontAwesome, Owl Carousel | Astro, Svelte, Resend |

## Příkazy

| Příkaz | Akce |
|---|---|
| `pnpm install` | Instalace závislostí |
| `pnpm dev` | Spustí dev server na `localhost:4321` |
| `pnpm build` | Produkční build do `./dist/` |
| `pnpm preview` | Náhled produkčního buildu |
| `pnpm deploy` | Build + deploy na Cloudflare Workers |
