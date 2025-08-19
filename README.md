<p align="center">
  <img src="public/big-pumki.png" alt="Pumki UI Logo" width="96" height="96" />
</p>

# <p align="center">Pumki UI</p>

<p align="center"><em>Ship stunning UIs from one library, not ten.</em></p>

<p align="center">
  <a href="https://github.com/AnshSinghSonkhia/pumki-ui">
    <img src="https://img.shields.io/github/stars/AnshSinghSonkhia/pumki-ui?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/AnshSinghSonkhia/pumki-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  </a>
</p>

<p align="center">
  <strong>Beautiful, modern, and accessible React components for every project.<br>
  Powered by <a href="https://github.com/AnshSinghSonkhia/pumki-cli">Pumki CLI</a> for effortless integration.</strong>
</p>

---

## Table of Contents
- [Features](#-features)
- [Installation](#-installation)
- [Quickstart](#-quickstart)
- [Usage](#-usage)
- [Component Gallery](#-component-gallery)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features
- All-in-one React UI library: components, layouts, animations, and design tokens
- Minimal setup, maximum output
- Type-safe and production-ready
- Modern aesthetics and dark mode support
- Optional Tailwind CSS integration
- Powered by [Pumki CLI](https://github.com/AnshSinghSonkhia/pumki-cli) for one-liner installs

---

## 📦 Installation

Pumki UI components are added to your project using **Pumki CLI**.

### Option 1: Use without installation (Recommended ✅)

No need to install anything globally—just use your package manager:

```sh
# pnpm
pnpm dlx pumki add stats-carousel

# npm
npx pumki add stats-carousel

# yarn
yarn dlx pumki add stats-carousel

# bun (macOS/Linux)
bunx pumki add stats-carousel
# bun (Windows)
bun x pumki add stats-carousel
```

### Option 2: Global install (for convenience)

```sh
# pnpm
pnpm add -g pumki

# npm
npm i -g pumki

# yarn
yarn global add pumki

# bun
bun add -g pumki
```

Then you can run:
```sh
pumki add stats-carousel
```

---

## ⚡ Quickstart

Add any component from Pumki UI into your project in one line:

```sh
npx pumki add stats-carousel
```

Pumki CLI fetches the component from Pumki UI and scaffolds it into your project, integrating with your package manager automatically.

---

## 🛠 Usage

Once added, import and use the component in your React app:

```tsx
import { StatsCarousel } from './components/StatsCarousel';

export default function MyPage() {
  return <StatsCarousel />;
}
```

💡 Tip: All components are customizable via props and support theming.

---


## 🧩 Component Gallery

Browse the full catalog:
- [Component Gallery](https://github.com/AnshSinghSonkhia/pumki-ui/tree/main/public/r)

Includes:
- Buttons, Cards, Text, Animations, Backgrounds, Steppers, Tooltips, Icons, and more!

---

## 🎨 Gradients Library

Pumki UI also offers a curated library of vibrant, ready-to-use gradients for your projects.

- Browse gradient collections by color in the [Gradients section](https://pumki-ui.vercel.app/docs/gradients).
- Instantly copy Tailwind, CSS, or SASS classes from the docs and use them in your UI.
- Each gradient page features a live preview and easy copy buttons for seamless integration.

Example:
- [Blue Gradients](https://pumki-ui.vercel.app/docs/gradients/blue)
- [Red Gradients](https://pumki-ui.vercel.app/docs/gradients/red)

Bring your UI to life with beautiful backgrounds and color transitions, powered by Pumki UI.

---

## ❓ Troubleshooting

- **Command not found?**  
  - If installed globally, make sure you used: `npm i -g pumki`
  - Then run: `pumki add <component>`
  - If installed locally, run with `npx` (or your package manager’s equivalent): `npx pumki add <component>`
- **Permission errors on global install (macOS/Linux)**  
  - Try: `npm i -g pumki --unsafe-perm`
  - Or use a Node version manager (nvm, fnm)
- **Wrong package manager being used**  
  - Pumki auto-detects, but you can ensure a lockfile (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) exists before running.
  - If none exist, it defaults to **npm**.

If you hit an issue, please open an issue with your OS, Node version, package manager, and command used.

---

## 🤝 Contributing

Contributions are welcome!
1. Fork this repo
2. Create a feature branch
3. Commit your changes
4. Push and open a PR 🎉

See [contribution guidelines](http://pumki-ui.vercel.app/docs/contributing).

---

## 📜 License

MIT © [Ansh Singh Sonkhia](https://github.com/AnshSinghSonkhia)

If you find Pumki UI useful, consider starring the repo to support the project. 🌟