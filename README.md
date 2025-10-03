# Portfolio personale

Portfolio minimale ed elegante realizzato con React + Vite, ottimizzato per il deploy su GitHub Pages.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run deploy
```

> **Nota:** lo script `deploy` utilizza `gh-pages` per pubblicare automaticamente la cartella `dist`.

## Configurazione GitHub Pages

1. Imposta il repository su GitHub.
2. Aggiorna in `package.json` il campo `homepage` con `https://<tuo-username>.github.io/portfolio`.
3. Esegui `npm run deploy` dopo il build.
4. In GitHub, verifica che la sorgente Pages punti al branch `gh-pages`.

## Struttura

- `src/components/` – Componenti riutilizzabili (Navbar, Footer, ProjectCard, ecc.).
- `src/pages/` – Sezioni principali del sito (Home, About, Projects, Hobbies, Contact).
- `src/assets/` – Immagini vettoriali e icone personalizzate.
- `src/styles/` – Stili globali e variabili di tema.

## Caratteristiche

- Design responsivo con palette di verdi come colore guida.
- Animazioni fluide con Framer Motion.
- Effetto typing per la tagline iniziale.
- Toggle dark/light mode con persistenza nel `localStorage`.
- Sezione progetti, passioni, contatti con Formspree.
- Ottimizzato per SEO di base con meta title e description.
