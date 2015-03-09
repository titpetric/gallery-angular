A simple gallery viewer
-----------------------

I created a simple gallery generator because I needed something that would
give me the flexibility of a PHP solution while keeping the output static.

I also love APIs, so I pregenerated an "api" folder, which stores all the
data in JSON format. You can browse albums via JSON and you can create
your own application which consumes this data.

Requirements
============

The project requires PHP (5.3+ recommended), ImageMagick (the utility `mogrify`
is part of the package). After generating a gallery, no server-side dependencies
are required to display the gallery in your browser.

The project uses Bootstrap (grid and responsive utilities), Lightbox and AngularJS.
The output is a static web page with no server-side requirements, meaning that it
will work just about anywhere :)

Keeping the "albums/" folder after you generate the galleries is optional.
The application generates "zoom" quality images, which are set to 1200px by default.
The settings can be modified under `albums/config.json`.

Usage
=====

1. Clone / download this repository.
2. Create album folders under "albums", add them to "albums/config.json"
3. In the root of the project run the script `./run`

It will generate the output folders "out" and "api". The `out/` folder will
contain thumbnails and zoom photos for every album you have listed.


Adding a new album
==================

Create a folder under albums, add the folder under `albums/config.json` and
rerun the script `./run` in the root folder. Only the new album graphics
will be generated, and exported API data will be refreshed.

To update an already deployed gallery, you just update the `out/` and `api/`
folders to your web host (using rsync or similar).


Customizing titles
==================

You can customize image titles for albums. After generating an album you can
copy the file `api/albums/{album}.json` to `albums/{album}/album.json`.

You can edit this `album.json` file to modify titles. When you update the
titles be sure to run the `./run` script, to update the exported API data.

Only files under the `api/` folder will be modified.