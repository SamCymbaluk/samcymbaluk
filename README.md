# Sam Cymbaluk Website

This is the code for my [personal site](https://samcymbaluk.com) developed in [Angular](https://angular.io/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## GitHub Pages deployment

The repo ships with `.github/workflows/deploy.yml`, which builds the Angular app and publishes it to GitHub Pages on every push to `master` (or when manually dispatched). The workflow runs `npm ci`, builds with the production configuration, and hard-sets the base HREF to `/`, which matches the custom domain setup for `samcymbaluk.com`.

To enable hosting:

1. Push the workflow to GitHub.
2. In the repository settings under **Pages**, set the source to **GitHub Actions** (this only needs to happen once).
3. Merge changes into `master` or run the workflow manually to trigger a deploy.

The deployment publishes the `dist/samcymbaluk` artifacts to the `github-pages` environment and sets the public URL automatically. Because the base HREF assumes the site lives at the domain root, this configuration is intended for custom-domain hosting rather than `username.github.io/repo` URLs.

