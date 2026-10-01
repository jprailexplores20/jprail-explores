# JP Rail Explores

A responsive, static travel-photography site designed for Cloudflare Pages. It uses plain HTML, CSS, and JavaScript, so it needs no build step or programming tools.

**Professional description:** JP Rail Explores is an independent travel photography journal documenting scenic journeys, wild places, and the stories found along the way. Through original photography and firsthand field notes, it explores Yellowstone, Utah, Alaska, and beyond—inviting travelers to slow down, look closer, and discover the landscapes between destinations.

## Publish on Cloudflare Pages

Upload the updated site files to the existing `jprail-explores` GitHub repository, keeping `index.html`, `styles.css`, `site.js`, and `trips.js` at the top level and including the `photos/` folder. Cloudflare Pages will deploy the new commit automatically.

## Add or update photos

Upload image files into the `photos/` folder, then edit `trips.js`. Add a new object at the start of `window.JP_TRIPS` with `title`, `place`, `date`, `image`, `alt`, and `note`. For a photo called `arches-sunset.jpg`, use `image: "photos/arches-sunset.jpg"`. Commit the change; Cloudflare Pages rebuilds and publishes automatically.

The gallery uses eight optimized personal travel photos from Yellowstone, Utah, and Alaska. Three Canon CR3 RAW files were also provided; they are not included because they need conversion to JPG or WebP before a browser can display them.
