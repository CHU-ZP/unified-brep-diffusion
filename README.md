# Unified B-Rep Diffusion

Project website: https://chu-zp.github.io/unified-brep-diffusion/docs/

The static homepage and all its assets are in `docs/`. The repository-root
`index.html` redirects visitors to that homepage when GitHub Pages publishes
the repository root.

To preview locally, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/. You can also serve `docs/` directly with
`python3 -m http.server 8000 --directory docs`.

For GitHub Pages, select **Deploy from a branch**, branch **main**, folder
**/docs** in **Settings → Pages** to serve the full homepage directly at the
site's root URL. Publishing **/(root)** also works using the redirect.

See [deployment notes](docs/DEPLOYMENT.txt) for more details.
