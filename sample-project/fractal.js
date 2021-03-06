'use strict';

const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Template engine.
 */

const nunjucks = require('@frctl/nunjucks');

fractal.components.engine(nunjucks);
fractal.components.set('ext', '.njk'); 

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Sample Project');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'assets'));
