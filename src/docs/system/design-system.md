# NEEX Design System

## Purpose
Base system for building premium landing pages in React + TypeScript + Storybook with predictable contracts, reusable visuals and data-oriented composition.

The system is intentionally generic. It should work for:
- local services
- clinics and healthcare
- restaurants and hospitality
- personal brands
- real estate
- aesthetics and wellness
- construction and home services
- digital businesses
- other offer-driven businesses

---

## Architecture

### Foundations / Tokens
Single source of truth lives in `src/tokens`.

Includes:
- colors
- typography
- spacing
- radius
- shadows

Tokens are registered as CSS variables at runtime through `registerDesignTokens`, reducing drift between TypeScript and CSS.

### UI Components
Location: `src/components/ui`

These are low-level reusable primitives:
- `Button`
- `Badge`
- `Card`
- `Container`
- `Input`
- `Select`
- `Textarea`
- `Section`
- `SectionTitle`

Principles:
- minimal domain knowledge
- extend native HTML/React attributes where appropriate
- preserve visual consistency
- safe for composition inside blocks and templates

### Blocks / Sections
Location: `src/components/blocks`

These are page-level blocks oriented to structured props:
- `Hero`
- `FeaturesSection`
- `ServicesSection`
- `CTASection`
- `ContactForm`

Principles:
- no hardcoded business content
- content received through typed props
- stable shape for AI generation
- reusable across multiple industries

### Templates
Location: `src/templates`

`LandingPage` is a template that renders an ordered array of typed blocks.

Composition model:
- template receives `blocks`
- each block uses a discriminated `type`
- each `type` maps to a known block component
- content lives in structured data, not inside the template markup

---

## Composition Philosophy

- UI primitives should not know business context.
- Blocks should describe content shape, not one-off page content.
- Templates should orchestrate layout, not hardcode offer copy.
- Repetition should be solved with data structures, not copy-pasted JSX.
- AI should be able to assemble a page by filling contracts, not inventing markup.

---

## Public Contracts

### Actions
Blocks use a common action model based on button props, usually:
- `label`
- `variant`
- `href` or button attributes
- `target`
- `rel`
- `disabled`

### Card Items
Card-based sections use structured items:
- `id`
- `eyebrow`
- `title`
- `description`

### Form Fields
`ContactForm` receives an array of fields.

Supported field kinds:
- `input`
- `select`
- `textarea`

Each field can define:
- `name`
- `label`
- `placeholder`
- `required`
- `defaultValue`
- `layout`
- field-specific options like `type`, `rows`, `options`

---

## Visual Language

The visual language should remain:
- clean
- premium
- editorial but restrained
- consistent across blocks

Structural refactors should preserve:
- the existing palette
- rounded surfaces
- soft shadow treatment
- spacious rhythm
- clear hierarchy

---

## AI Readiness Rules

- Prefer existing blocks before creating new ones.
- Pass content as structured data.
- Avoid embedding business-specific text in components.
- Reuse the same block contracts across niches.
- Keep props explicit and stable.
- If a new niche needs new content, change the data first, not the architecture.
