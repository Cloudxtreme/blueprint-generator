# A/B Blueprint generator

Simple generator for A/B test blueprints

## Running it

You need to have NPM installed. Then...

    $ npm install
    $ npm start

The dev-webserver is running locally on localhost:8080

## Preparing for Deployment

Running a build with minification and optimized assets for deployment.

    $ npm install
    $ gulp dist

You can inspect the live build in the browser by running `$ gulp serve`, which will spawn a local webserver on port 3000. It will not 'watch' and live-reload, it'll serve your production build served from the 'dist/' folder of the project.