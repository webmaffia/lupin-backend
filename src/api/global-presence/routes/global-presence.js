'use strict';

/**
 * global-presence router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-presence.global-presence');
