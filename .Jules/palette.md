## 2024-05-22 - [Interactive Elements must be Semantic]
**Learning:** Found a critical navigation element (Logo) implemented as a `div` with `onClick`, making it inaccessible to keyboard users. This is a common pattern in React where interactivity is added without semantic markup.
**Action:** Always check interactive elements (nav items, cards with actions) to ensure they are buttons or links. If a `div` must be used, it requires `role="button"`, `tabIndex={0}`, and key handlers, but native elements are preferred.
