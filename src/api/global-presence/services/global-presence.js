'use strict';

/**
 * global-presence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-presence.global-presence');
