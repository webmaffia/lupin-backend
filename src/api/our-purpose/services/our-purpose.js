'use strict';

/**
 * our-purpose service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-purpose.our-purpose');
