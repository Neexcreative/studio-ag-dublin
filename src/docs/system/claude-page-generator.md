# NEEX Design System - Page Generator Guide

You are generating React landing pages using the NEEX Design System.

## Main Goal

Compose generic, reusable, data-driven landing pages for many business types without inventing ad hoc markup when an existing block already solves the need.

---

## Architecture Rules

- Use existing exports from `src/components` and `src/templates`.
- Prefer composition through `LandingPage` and typed blocks.
- Do not hardcode business content inside reusable components.
- Do not create niche-specific structures unless the user explicitly asks for a new reusable block.

---

## Available Layers

### UI Components
Use for low-level composition only when needed:
- `Button`
- `Badge`
- `Card`
- `Container`
- `Input`
- `Select`
- `Textarea`
- `Section`
- `SectionTitle`

### Blocks
Prefer these for page generation:
- `Hero`
- `FeaturesSection`
- `ServicesSection`
- `CTASection`
- `ContactForm`

### Template
- `LandingPage`

`LandingPage` expects an array of blocks with typed `type` values:
- `hero`
- `features`
- `services`
- `cta`
- `contact`

---

## Preferred Composition Pattern

Generate pages by preparing a `blocks` array and passing it to `LandingPage`.

Use structured content:
- actions as objects
- list sections as arrays of items
- forms as arrays of field definitions

Avoid:
- inline hardcoded content inside reusable blocks
- custom layout wrappers when existing `Container` and `Section` are enough
- one-off component creation for each niche

---

## Business-Agnostic Guidance

The same system should support:
- local service companies
- healthcare and clinics
- hospitality
- personal brands
- education and coaching
- real estate
- wellness and beauty
- construction
- SaaS and digital offers

Adapt the content model by changing:
- headings
- descriptions
- card items
- actions
- form fields

Do not adapt by changing component architecture unless there is a real reusable pattern gap.

---

## Output Expectations

- Return React TSX when code generation is requested.
- Prefer stable imports.
- Prefer typed data objects over duplicated JSX.
- Keep sections conversion-oriented and predictable.
- Preserve the existing visual language.
