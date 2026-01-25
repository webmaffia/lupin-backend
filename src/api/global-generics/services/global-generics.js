'use strict';

/**
 * global-generics service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-generics.global-generics');
