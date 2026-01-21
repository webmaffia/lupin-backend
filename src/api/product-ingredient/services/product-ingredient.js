'use strict';

/**
 * product-ingredient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-ingredient.product-ingredient');
