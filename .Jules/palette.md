## 2025-05-23 - Accessibility in Custom UI Components

**Learning:** When using generic HTML elements like `div` for interactive components (like the custom logo button in `Navigation.tsx`), it's critical to manually restore semantic meaning. While `onClick` handles the mouse interaction, screen readers and keyboard users are left behind without `role="button"`, `tabIndex={0}`, and appropriate key handlers (Enter/Space).

**Action:** Always prefer semantic `<button>` elements. If layout constraints force the use of `div`, rigorously apply ARIA roles and keyboard event handlers immediately to avoid accumulating accessibility debt.
