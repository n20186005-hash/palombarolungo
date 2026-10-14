# Independent guide identity update

This change identifies palombarolungo.com as an independent, non-official tourism guide. It adds an Italian notice in the root layout (including localized, legal and not-found pages), shared header/footer identity, and `/chi-siamo/`, `/note-legali/`, `/contatti/` pages. Existing attraction photographs, map embed, gallery controls, theme/language controls and static Cloudflare export configuration are retained.

Attraction information points to the separate external site https://www.palombarolungo.it/. Its published telephone is distinguished from the editorial email already present in this repository. Opening times, ticket prices and the no-telephone-booking statement were checked against https://palombarolungo.it/orari-e-modalita-di-visita on 14 October 2026. Ratings remain historical reference data, not live values; unsupported aggregate-rating schema and publisher/attraction `sameAs` identity claims were removed.

## Validation and deployment

- Install locked dependencies with `npm ci`, then run `npm run build`. Next.js compilation, type checking and static export must succeed.
- Check every exported HTML page for the independence notice and resolve all internal page links against `out/`. Italian legacy privacy/terms/cookie routes intentionally remain under `/it/`; there are no unprefixed equivalents in this static export.
- Inspect desktop and narrow mobile layouts, the theme toggle, language switch, editorial contact links and existing gallery controls.
- Deploy the full generated `out/` using the existing Cloudflare workflow; do not publish a partial export. No deployment credentials or configuration changes are part of this patch.
- After deployment, inspect `/`, `/zh-hant/`, the three new pages, existing guide pages and `/it/terms-of-service/`. Confirm redirects, external links and the 404 response. Roll back by reverting this commit and rebuilding the previous revision if needed.

## Remaining owner checks

- No image licenses or Google Maps data-use permissions were provided. Existing assets are preserved, but their ownership, permission and attribution still need verification. A disclaimer or source label does not establish permission.
- The editorial email is reused from the repository. Verify that it is monitored. No legal operator name, registered address or company details have been invented; add verified operator details where applicable.
- Existing privacy/cookie claims, external Google Maps/Google Fonts requests and the Ads.txt file require a separate assessment of actual production services and consent behavior. This patch is an identity clarification, not a complete privacy audit.
- The pinned Next.js 14.2.15 dependency emits a security warning during installation. The current configuration exports static assets and serves them through a Worker rather than a Next.js application server. Update the framework in a separate tested dependency change and assess advisories against the actual deployment.
- The changes reduce identity confusion; they do not determine trademark/domain rights or guarantee protection from complaints or litigation.

Repository updates are prepared on a review branch. Production deployment is not performed by this change.
