## 2025-05-23 - [Mobile Navigation Accessibility]
**Learning:** Icon-only buttons in the navigation (like the mobile menu toggle) were missing `aria-label`s, making them inaccessible to screen readers.
**Action:** Always check `md:hidden` elements and icon-only buttons for accessible names. Added `aria-label` and `aria-expanded` to the mobile toggle, and `aria-label` to the close button.
