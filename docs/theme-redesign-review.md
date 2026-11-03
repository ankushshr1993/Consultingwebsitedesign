# Full Hallmark design review and theme-led redesign

3 November 2026. Both Regression applications; local production builds. This supersedes the earlier polish as the current visual design.

## The process actually performed

1. Read Hallmark's full redesign, theme, layout, imagery, craft, controls, and review guidance. Preserved the ongoing session's changes in `/workspace/hallmark-redesign/pre-theme.tgz`; no commit, reset, stash, or worktree was created.
2. Recorded a fresh rendered baseline for all 20 distinct page designs: 100 before screenshots, plus link/field/handler/heading/figure inventories. Three additional consulting routes are permanent aliases, not separate designs.
3. Ran Hallmark's theme deal. The three candidates were **Ink, Manifesto, Grid**; viewed all three reference pictures. Selected **Ink**, first of three, seed `investor-executive-hires-operator-4a32·ec4e9ac7·2026-11-03·r0`. No reroll.
4. Ran the composition draw, `5cccda`, and both Ink scaffolds. Locked the shared system in `design.md`; both applications have generated `tokens.css` and `base.css`.
5. Rebuilt the compositions, rather than applying a color-only reskin. Delegated supporting-page designs under the multi-page skill workflow. Built and rendered the hero before the finish review.
6. Obtained a fresh-context independent hero review and two independent finish reviews covering every distinct page at desktop and mobile sizes. Implemented all findings and obtained one scoring round on the fixes. All three reviewers returned **ship** on the corrected evidence.
7. Rebuilt both applications; ran unit, browser, accessibility, preservation, static and rendered Hallmark checks. Generated the before/after comparison.

## The selected system

**Theme:** Ink's paper surfaces, Epilogue 700 display / 400 body, ruled lists, quiet surfaces and restrained controls. Fonts are hosted locally through `@fontsource/epilogue`; screenshots do not depend on Google Fonts.

**Brand adaptation:** Regression's actual navy/gold identity and logo remain. Ink's teal is replaced by the existing corporate identity, with dark links and controls on light paper. This adaptation is explicit in the tokens and design log.

**Shape:** an editorial diagnostic dossier. The draw's portfolio pictures were rejected because no project photography was supplied; its floating pill was replaced by a masthead that accommodates the existing destinations. No invented portfolio, photograph, client, portrait, biography, metric, or testimonial was added.

**Signature:** the real two-week diagnostic and its review/output, plus concrete defence readiness criteria. These replace decorative corporate graphics.

**Files:** edited existing app layouts, pages, presentation components and styles; created each app's `tokens.css` and `base.css`, the root `design.md`, and this review. No route or component file was deleted. Existing validation, mail acceptance checks, analytics, consent wording and metadata contracts remain intact.

## Review and composition by page

| Page | Full redesign composition | Review coverage |
| --- | --- | --- |
| Consulting home | Poster thesis, actual diagnostic dossier, ruled problem index, contextual disclosures, navy method notice, contact colophon | Independent hero and finish; desktop/mobile |
| Services | Numbered service chapters; buyer/output margin; engagement comparison notice | Independent finish; desktop/mobile |
| Approach | Vertical numbered method timeline with explicit outputs; working-model index | Independent finish; desktop/mobile |
| About | Named contact and editorial letter, principles index, experience register | Independent finish; desktop/mobile |
| Contact | Editorial introduction and labeled form with direct-contact margin | Independent finish; desktop/mobile |
| Insights | Deliberately dormant editorial notice; retirement behavior preserved | Independent finish; desktop/mobile |
| Defence home | Poster thesis, concrete readiness criteria, ruled operating examples, two purposeful paper bands, founder/investor paths | Independent hero and finish; desktop/mobile |
| Thesis | Indexed long document with ruled definition rows and audience-specific closing actions | Independent finish; desktop/mobile |
| Criteria | Side index, selection register, governance/readiness lists | Independent finish; desktop/mobile |
| Process | Vertical timeline preserving the existing week ranges and steps | Independent finish; desktop/mobile |
| FAQ | Ruled native disclosure index; existing contact/process actions accessible near the introduction | Independent finish; desktop/mobile; final automated checks |
| Resources | Editorial resource index using the shared paper and type system | Independent finish; desktop/mobile |
| Institutional readiness checklist | Numbered preparation content in ruled document sections | Independent finish; desktop/mobile |
| Export-control readiness checklist | Ruled preparation document with relevant next actions | Independent finish; desktop/mobile |
| Contact us | Dossier intro; asymmetric real form/direct-contact layout; ruled office details and unchanged consent | Independent finish and correction scoring; desktop/mobile |
| Founder intake | Grouped editorial questionnaire on continuous paper | Independent finish; desktop/mobile |
| Investor intake | Same control system, grouped mandate questionnaire | Independent finish; desktop/mobile |
| Legal | Shared document typography; legal wording preserved | Independent finish; desktop/mobile |
| Privacy | Shared document typography; policy wording preserved | Independent finish; desktop/mobile |
| Terms | Shared document typography; terms wording preserved | Independent finish; desktop/mobile |

## Independent review findings and resolution

**Hero review:** initially `fix`; both findings resolved, final `ship`.

- Defence first screen was too broad. It now shows actual India-origin, prototype-validation and governance criteria. Original focus/approach/capital-style facts remain below.
- Consulting diagnostic was too far down the phone. Reduced phone spacing and duration-figure size bring more of the diagnostic into the initial screen.

**Consulting finish:** initially `fix`; both findings resolved, final `ship`.

- A conflicting pale-band selector made white method text unreadable. The explicit navy background and paper foreground were recaptured and verified.
- Phone hero pacing was reduced and recaptured.

**Defence finish:** initially `fix`; three findings resolved, final `ship`.

- Reduced alternating pale bands to two purposeful sections.
- Reduced mobile section padding while retaining clear chapter separation.
- Completed the contact page's editorial recomposition, preserving all information, destinations, the real form, and consent text.

The reviewers also identified a tradeoff: the new vertical service/process chapters require more scrolling than the former simultaneous card grids. This is intentional to improve reading hierarchy and distinguish inputs, activities, and outputs. On-page indexes support the longer documents.

## Copy and preservation

- Consulting hero: “Restore control over technology execution.” became “Technology execution. Under control.” The separate “2 weeks” figure and “Execution diagnostic” heading retain the actual two-week offer.
- Repeated category headings became descriptive section titles or native disclosure summaries. This changes heading bookkeeping, not the underlying case, service, criteria or method facts.
- Defence's existing broad hero attributes were moved into the positioning band while actual eligibility criteria took the first screen.
- The FAQ answers, service activities, method outputs, operating examples and supporting lists remain available. Terms, privacy, legal and consent content were not reworded.
- Hallmark's preservation comparison reports **35/35 recorded link destinations, 27/27 field identifiers, 10/10 handler records, and 5/5 figures**. Heading matching reports 130/169 because headings were tightened, regrouped or converted to summaries; the underlying content remains.
- Existing case claims remain owner-provided, unverified material. No additional career history or case evidence was inferred from inaccessible chats.

## Verification and limits

- Both production builds and TypeScript checks passed.
- `npm test`: **11 passed**, no skips; email responses mocked.
- `npm run test:browser`: **23 routes passed** at 320, 375, 768, 1024, 1280 and 1920px, including **46 mobile/desktop Axe scans with no A/AA findings**. This is automated evidence, not a complete WCAG certification.
- All four forms passed validation, failure-preservation and accepted-response reset checks without sending real enquiries. Alias, API rejection and mobile-menu tests passed.
- Full static Hallmark sweep: **0 Floor failures, 0 Reflex findings** across 47 source files.
- Full rendered/preservation Hallmark sweep: **0 Floor failures**, with **52 remaining automated Reflex layout findings** and 23 warnings. These have **not** been represented as an automatic clean pass or silently waived.

The remaining layout findings are: 18 hero-extent checks (44c), 8 section-gap checks (59), 11 thin-section checks (77), one contact/sidebar heading-scale check (78), and 14 dead-band checks (79). They primarily apply landing-page geometry to interior banners, indexed long documents, short notices, or contact-side headings. The independent visual reviews cover those layouts and found no remaining material defects after correction. The design keeps readable documents and supporting headings instead of enlarging every subheading, adding invented material, or forcing each legal/form page into a full-screen marketing hero. These are documented design decisions, **not mechanically accepted waivers**. Do not summarize this as “all Hallmark checks pass.”

Other warnings include bookkeeping for changed headings, preserved legal punctuation, and unused accent-pair tokens. Changed headings are accounted for above; existing legal wording remains verbatim. All source-level Floor and Reflex findings were resolved.

## Evidence

- [Before/after visual comparison](/workspace/hallmark-redesign/.hallmark/compare.html)
- [Final rendered findings](/workspace/hallmark-redesign/after.json)
- [Final static findings](/workspace/hallmark-redesign/static-final.json)
- [Final browser results](/workspace/hallmark-redesign/browser-final.json)
- [Build log](/workspace/hallmark-redesign/build.log)
- [Test log](/workspace/hallmark-redesign/tests.log)

The comparison contains 100 before and 100 after page captures. Eight additional hero-stage captures support the first-screen review. The root `design.md` and ignored `.hallmark/log.json` record the actual theme/deal/draw decisions. Changes remain local; deployment and real email/analytics delivery were not performed.
