'use strict';

/**
 * subsidiary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subsidiary.subsidiary');
