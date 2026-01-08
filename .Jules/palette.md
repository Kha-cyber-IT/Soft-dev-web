## 2024-05-24 - [Navigation Accessibility Improvements]
**Learning:** Navigation components often rely solely on visual cues (icons, color changes) which are invisible to screen readers. Specifically, mobile menu toggles and active state indicators are common gaps.
**Action:** When auditing navigation, always ensure icon-only buttons have `aria-label`s and active links use `aria-current="page"`. Converting non-interactive `div`s with `onClick` to `button`s is essential for keyboard accessibility.
