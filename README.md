# JP Rail Explores

A responsive, static travel-photography site designed for Cloudflare Pages. It uses plain HTML, CSS, and JavaScript, so it needs no build step or programming tools.

## Publish on Cloudflare Pages

1. Put these files at the top level of the `jprail-explores` GitHub repository. Keep `index.html` at the top level.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select `jprail-explores`.
3. Use these build settings: **Framework preset: None**, **Build command: (leave blank)**, **Build output directory: /**.
4. After the first deployment, open the Pages project’s **Custom domains** section and add `jprailexplores.com` (and `www.jprailexplores.com` if desired).

## Add or update photos

Upload image files into the `photos/` folder, then edit `trips.js`. Add a new object at the start of `window.JP_TRIPS` with `title`, `place`, `date`, `image`, `alt`, and `note`. For a photo called `arches-sunset.jpg`, use `image: "photos/arches-sunset.jpg"`. Commit the change; Cloudflare Pages rebuilds and publishes automatically.

The current three remote photos are visual stand-ins. Replace them with your selected Yellowstone, Utah, and Alaska images when those files are available. The images previously attached in the ChatGPT conversation were GitHub screenshots; the travel photo files were not present in the coding workspace.
