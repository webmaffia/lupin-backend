'use strict';

/**
 * report-filing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::report-filing.report-filing');
