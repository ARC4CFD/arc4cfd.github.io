# ARC4CFD Website

[arc4cfd.github.io](https://arc4cfd.github.io)

Website built using Astro and the Astro Starlight theme, with the `remark-math` and `rehype-mathjax` plugins.

To get started, install Node.js [here](https://nodejs.org/en/download/current) (or using your favourite package manager). Ensure that your `$PATH` variable has been updated correctly (try running `npm -v`).

To download the requisite packages, run `npm install astro starlight remark-math rehype-mathjax @astro-community/astro-embed-youtube`.

To build the website locally (for testing) navigate to the local repo folder and run `npm run dev`. This will produce a local link that you can open in a browser to view the website. Any changes made to the website contents/structure will be updated in real time.

When you are ready to move your changes onto the github repo (updating the actual website), simply push your changes to `master`. Github will automatically run a workflow to rebuild the website to reflect these changes. Please do not push anything to `master` that hasn't first been successfully build locally.
