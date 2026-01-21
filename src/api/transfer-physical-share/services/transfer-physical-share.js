'use strict';

/**
 * transfer-physical-share service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transfer-physical-share.transfer-physical-share');
