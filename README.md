# Flower Spectrum Studio

A browser-based photo gallery and social creative generator for Ideal Cannabis. It pairs strain photography with Flower Spectrum strips and fingerprint visuals, then exports six ready-to-post social formats.

**Latest preview:** [flower-spectrum-studio-lo9vfboe8-lucidseshs-projects.vercel.app](https://flower-spectrum-studio-lo9vfboe8-lucidseshs-projects.vercel.app)

## What changed in v1.1

- Added an upload review dialog with image thumbnails and an explicit strain selector for every file.
- Added a clear “Change this photo” action beside the featured-strain control.
- Added expandable strain cards with a full Flower Spectrum fingerprint, profile scores, aroma read, and direct social/label actions.
- Added a retail label studio with customizable price and terpene total, PNG export, single-label PDF export, and six-up letter-size PDF sheets.
- Added one-click export of all six social formats for the selected loaded strain.
- Kept all uploaded images local to the browser; nothing is sent to a server.
- Fixed PNG export rendering every template twice.
- Escaped quotes in user-controlled filenames and labels before inserting them into HTML.

## Preview

![Flower Spectrum gallery](docs/screenshots/gallery.png)

![Social templates with featured strain selection](docs/screenshots/templates.png)

![Dispensary retail label generator](docs/screenshots/retail-labels.png)

## Run locally

```bash
npm run dev
```

Then open [http://localhost:4173](http://localhost:4173).

## Using your own photography

1. Select **Add photos**.
2. Review each thumbnail and choose its strain from the dropdown.
3. Select **Apply photos**.
4. Open **Social Templates** and choose the featured strain.
5. Use **Change this photo** whenever you want to replace only the selected strain’s image.
6. Use **Export all 6** to download the full social set for the selected strain.

## Retail labels

Open **Retail Labels**, choose a loaded strain, and set the retail price and total terpene value. Export a single label as PNG or PDF, or select up to six strains for a print-ready letter-size PDF sheet. The label carries the Flower Spectrum fingerprint, profile bars, aroma read, compliance text, and clear `SIM`/`REAL` status.

Uploaded files are represented with temporary browser object URLs. Refreshing the page restores the embedded originals.

## Classification notice

Most Flower Spectrum classifications in this demonstration are simulated and labeled `SIM`; they are not lab results or medical/effect claims. Kush Mints uses the validated example panel and is labeled `REAL`.
