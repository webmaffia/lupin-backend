'use strict';

/**
 * global-presence controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-presence.global-presence');
