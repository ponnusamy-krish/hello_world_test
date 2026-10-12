# Hello, World

A small, animated "Hello, World" page: drifting aurora background, serif typography, and a button that cycles the greeting through 14 languages.

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `index.html`: page markup
- `style.css`: layout, aurora background, animations (respects `prefers-reduced-motion`)
- `app.js`: greeting carousel and live clock
