## 2024-05-24 - [Mobile Navigation Accessibility]
**Learning:** Icon-only toggle buttons (like hamburger menus) create "silent" interactions for screen reader users if not properly labeled. They need both a label ("Open menu") and state indication (`aria-expanded`).
**Action:** Always pair `aria-label` with `aria-expanded` and `aria-controls` for navigation toggles to ensure users know WHAT the button is and WHAT state it's in.
