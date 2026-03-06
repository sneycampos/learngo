# Go Learn

A simple, fast, and modern site for learning Go programming. Built from markdown files with zero external dependencies in the final build.

## What is this?

This is a static site generator that turns markdown files into an interactive Go learning experience. The content lives in simple markdown files, and the build process bundles everything into a single JavaScript file for instant loading.

The site covers Go from basics (variables, functions, structs) to advanced topics (goroutines, channels, worker pools) and includes modern Go 1.22+ and 1.23+ features like iterators and range over integers.

## Why this exists

Most Go tutorials either:
- Require a backend server to serve content (slow page loads)
- Use heavy frameworks with tons of dependencies
- Don't cover modern Go features

This site fixes all three:
- Everything loads instantly (content embedded in the bundle)
- Zero runtime dependencies after build
- Includes the latest Go features with version badges

## Quick start

### Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

### Build for production

```bash
npm run build
```

The `dist/` folder will contain the built site ready for deployment.

## Deploy to Cloudflare Pages

1. Build the site: `npm run build`
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project with Direct Upload
4. Upload the contents of the `dist/` folder

Or connect your GitHub repo for automatic deployments on every push.

## Project structure

```
content/           # All the markdown content
├── hello-world.md
├── variables.md
├── goroutines.md
└── ... (52 topics total)

app.js             # Main application and topic manifest
build.js           # Build script that bundles everything
index.html         # Source HTML template
src/styles.css     # Source styles (Tailwind)
```

The build process:
1. Reads all markdown files from `content/`
2. Bundles them into a JavaScript object
3. Combines with marked.js and prism.js
4. Outputs to `dist/` as static files

## Content format

Topics are just markdown files with Go code blocks:

````markdown
# Topic Title

Brief description here.

## Example Code

```go
package main

func main() {
    // code here
}
```

## Output

```
expected output here
```
````

To add a new topic:
1. Create a `.md` file in `content/`
2. Add the topic to the manifest in `app.js`
3. Run `npm run build`

## Features

- 52 topics covering Go basics to advanced concepts
- Modern Go features (1.22+, 1.23+) marked with version badges
- Instant navigation (no loading between pages)
- Syntax highlighting for all code examples
- Mobile responsive design
- Keyboard shortcuts (Cmd+B to browse topics)
- Clean, distraction-free reading experience

## Browser support

Works in all modern browsers. The bundled JavaScript uses standard ES6+ features with no transpilation needed.

## License

Inspired by [Go by Example](https://gobyexample.com/). Built for the Go community.
