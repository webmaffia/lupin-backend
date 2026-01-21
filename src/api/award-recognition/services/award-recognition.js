'use strict';

/**
 * award-recognition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::award-recognition.award-recognition');
