'use strict';

/**
 * car-insurance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-insurance.car-insurance');
