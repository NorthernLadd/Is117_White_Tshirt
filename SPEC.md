# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: Postmodernist alternative implemented locally; compare with preserved modernist branch.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Scope agreed; issue #1 open; working on `codex/olympus-postmodernist`; modernist implementation preserved in local commit `77c0453` on `codex/olympus-modernist`.
- Next small decision: Review the postmodernist alternative and proposed logo; learner reason for the visual choice, promise, voice, persuasion applications and browser observations remain pending.
- Issue: https://github.com/NorthernLadd/Is117_White_Tshirt/issues/1

## Product boundary

Agreed fictional demo prices: S $26, M $28, L $30, XL $32 USD. Selecting a size updates the displayed price; bag entries show their size's unit price. Requested by the learner on November 2, 2026.

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                                                 | Secondary audience                                         |
| ------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Person in a concrete situation        | Athlete climbing a mountain                                                      | Casual day hiker (AI proposal approved by learner)         |
| Goal or meaning they seek             | Reuse the same shirt across many mountain climbs                                 | Everyday comfort rather than extreme-condition performance |
| Concern before choosing               | Whether it holds up in rough conditions                                          | Not chosen yet                                             |
| What the page should help them decide | Whether there is evidence supporting repeated rough-condition use (AI synthesis) | Not chosen yet                                             |
| Evidence or assumption                | Assumption; not validated                                                        | Assumption; not validated                                  |

## Early brand brief

| Decision                                 | Agreement                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Brand name                               | Olympus - learner selected                                                                                                          |
| One-sentence promise                     | Not chosen yet                                                                                                                      |
| Primary archetype: the brand's character | Hero — learner selected                                                                                                             |
| Three voice traits                       | Not chosen yet                                                                                                                      |
| One example line in this voice           | Not chosen yet                                                                                                                      |
| Learner's predicted audience effect      | Wants athletes to feel it is the only gear they can wear to the top; recorded as intended feeling, not exclusive product capability |

Tagline: **To the tops** - learner selected.

Provisional AI voice proposal: bold, determined, encouraging; not explicitly approved. One-sentence promise remains unresolved. Preview support is AI-proposed: "For the climb you choose. For the resolve you bring."

## Visual decision

Learner product goal: strong and durable across repeated mountain climbs, including rough conditions. This is an unverified aspiration, not an established product fact or approved performance claim.

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                               |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared headline / support / action                | Proposed: To the tops / For the climb you choose. For the resolve you bring. / Choose your size                                                                                     |
| Modernist preview, reference, and annotations     | [Structured ascent](public/explorations/modernist.html); V&A Kauffer drawing (1934), annotated on page                                                                              |
| Postmodernist preview, reference, and annotations | [Myth meets mountain](public/explorations/postmodernist.html); V&A Bedin Super lamp (1981), annotated on page                                                                       |
| Chosen direction and reason                       | Learner requested modernist implementation, then a separate postmodernist branch. This branch explores the alternative; final keep/merge decision and visual reason remain pending. |
| Original SVG logo                                 | Proposed Olympus wordmark and geometric arrow: public/assets/wordmark.svg; final learner logo review pending                                                                        |
| Monochrome and small-size variants                | Same one-color SVG shown at navigation size, 110px small size and 190px monochrome in public/styleguide.html                                                                        |
| Logo review at actual use size                    | AI inspected desktop/narrow header and logo-board renders; learner review pending                                                                                                   |
| Shared palette, typography, spacing, and assets   | public/styles.css tokens shared across all three pages; Arial/Helvetica sans-serif with Georgia italic quotation, cream, deep violet, rust and lavender; shared SVG                 |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle      | Actual copy or interaction | Visitor benefit / factual support |
| -------------- | -------------------------- | --------------------------------- |
| Not chosen yet | Not chosen yet             | Not chosen yet                    |
| Not chosen yet | Not chosen yet             | Not chosen yet                    |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                                           | Issue / PR                                                                              | Actual checks and observations                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | public/index.html, public/styleguide.html, public/studio.html, public/styles.css, public/studio.css, public/assets/wordmark.svg; tests/browser/identity.spec.js | [Issue #1](https://github.com/NorthernLadd/Is117_White_Tshirt/issues/1); PR not created | Postmodernist npm run check passed: formatting, lint, 7 server tests, 13 browser tests; AI desktop/narrow review complete; learner review pending |

## Later

No follow-up is selected. After keeping `BRAND-001`, choose one next cycle: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.
