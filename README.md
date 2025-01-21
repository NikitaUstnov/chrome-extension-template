# Vite Chrome Extension Template

This project provides a ready-to-use template for building Google Chrome extensions. The project includes Vue 3, Vite, TypeScript, and SCSS for a modern and efficient development experience.

## Features

- **Vue 3** for building interactive UIs.
- **Vite** for fast builds and hot module replacement.
- **TypeScript** for type safety.
- **SCSS** for modular and reusable styles.
- **vite-plugin-web-extension** for easy extension bundling.

## Installation

1. Clone this repository or download it as a ZIP.
2. Run `npm install` to install dependencies.

## Development

Run the following command to start development with hot reload:

```bash
npm run dev
```

This command sets up a local development server. The extension files will be generated in the `dist` directory.

## Build

For a production-ready build, run:

```bash
npm run build
```

This command generates a minimized and optimized extension package, disabling custom console logging and reducing file sizes.

## Project Structure

```
public/
  |_ _locales/        # Localization files
  |_ icons/           # Extension icons
  |_ images/          # Static images
src/
  |_ assets/
      |_ images/      # Image assets
      |_ styles/      # SCSS styles (main.scss, variables.scss)
  |_ content-script/  # Content scripts for the extension
  |_ inject-scripts/  # Injected scripts running in the webpage context
  |_ service-worker/  # Background scripts and service workers
  |_ router/          # Vue Router configuration
  |_ utils/           # Utility functions (logger, storage)
  |_ views/
      |_ options-page/ # Settings page (Vue + HTML)
      |_ popup/        # Popup page (Vue + HTML)
  |_ manifest.json    # Chrome extension manifest
.env                   # Environment variables
package.json           # Project configuration
vite.config.ts         # Vite configuration
```

### Key Files

- **manifest.json**: Contains the base configuration for the Chrome extension.
- **vite.config.ts**: Configures Vite and vite-plugin-web-extension to bundle extension files based on the `manifest.json`.

## Customization

### SCSS Styles

The main SCSS file (`src/assets/styles/main.scss`) imports variables and other styles, providing modularity. Modify or add styles as needed.

### Extension Configuration

Edit the `manifest.json` file to configure permissions, content scripts, and other settings. The `vite-plugin-web-extension` automatically bundles and processes these configurations during builds.

## License

This project is provided without any license. Feel free to use and modify it for personal or commercial purposes.
