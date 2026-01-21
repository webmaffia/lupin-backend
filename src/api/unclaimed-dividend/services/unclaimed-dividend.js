'use strict';

/**
 * unclaimed-dividend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unclaimed-dividend.unclaimed-dividend');
