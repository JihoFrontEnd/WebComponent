# *Web Component*

## Navigation Bar

```bash
NavigationBar    # Wrapper, Non-shadowDOM for js handling
|
+-- CherryLogo   # shadowDOM, go to the home
|
+-- HamBurger    # shadowDOM, MenuList Handler
|
+-- MenuList     # shadowDOM, handled by NavigationBar
```

## Micro Front-end Structure

```bash
Orchestration   # Vue.js
|
+-- Navigation  # Web Component
|
+-- App         # Polyglot Projects
|
+-- Footer      # Web Component
```
