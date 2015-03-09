A simple gallery viewer
-----------------------

I created a simple gallery generator because I needed something that would
give me the flexibility of a PHP solution while keeping the output static.

I also love APIs, so I pregenerated an "api" folder, which stores all the
data in JSON format. You can browse albums via JSON and you can create
your own application which consumes this data.

Usage
=====

1. Clone / download this repository.
2. Create album folders under "albums", add them to "albums/config.json"
3. In the root of the project run the script `./run`

It will generate the output folders "out" and "api". The `out/` folder will
contain thumbnails and zoom photos for every album you have listed.

Requirements
============

The project requires PHP (5.3+ recommended), ImageMagick (the utility `mogrify`
is part of the package - 