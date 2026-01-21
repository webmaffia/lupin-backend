'use strict';

/**
 * share-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::share-price.share-price');
