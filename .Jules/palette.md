## 2024-03-24 - [Navigation Accessibility Audit]
**Learning:** Found critical interactive elements (Logo, Mobile Menu) implemented as non-semantic `div`s or missing ARIA labels, making the primary navigation completely inaccessible to screen reader and keyboard users.
**Action:** Always verify semantic HTML (e.g., `<button>` vs `<div>`) for interactive elements and ensure all icon-only buttons have descriptive `aria-label`s.
