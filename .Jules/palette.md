## 2026-01-09 - Mobile Navigation Accessibility
**Learning:** The mobile navigation relied on icon-only buttons without ARIA labels, making it inaccessible to screen readers. Also, the logo was a clickable `div`.
**Action:** Always verify icon-only buttons have `aria-label` and use semantic `<button>` elements for interactive controls.
