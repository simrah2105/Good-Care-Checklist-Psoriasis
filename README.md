# Good Care Checklist — Psoriatic Disease

An interactive patient guide built to help people living with psoriatic disease navigate their care journey. The tool organizes clinical guidance across six evidence-based care domains and provides condition-specific resources from Canadian patient advocacy organizations.

## Features

- Six care domains: Diagnosis & Assessment, Holistic Care & Comorbidities, Treatment Options, Shared Decision Making, Long-term Management, and Psychosocial Support
- Clinical manifestations overview (peripheral arthritis, axial disease, enthesitis, dactylitis, skin psoriasis, nail disease, cardiovascular health, mental health)
- Protocol checklists and milestone tracking for each domain
- Journey aids: worksheets, tools, and community links
- Resources sourced from CAPA, psoriasiscanada.ca, and arthritispatient.ca

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (icons)
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run preview
```

## Data

All guide content is in `src/data.ts`. This file defines the clinical domains, protocol sections, milestone checklists, journey aids, and external resource links.
