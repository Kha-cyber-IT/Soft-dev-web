## 2024-05-23 - [Navigation Accessibility]
**Learning:** Icon-only buttons (like hamburger menus) are invisible to screen readers without explicit `aria-label` or `title` attributes. Mobile menus also need `aria-expanded` state to indicate visibility.
**Action:** Always add `aria-label` to icon-only buttons and `aria-expanded` to toggle buttons. Use semantic `<button>` instead of `div` with `onClick` for keyboard accessibility.
