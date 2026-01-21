'use strict';

/**
 * global-technical-presence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-technical-presence.global-technical-presence');
