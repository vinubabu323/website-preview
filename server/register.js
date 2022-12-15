'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'page-preview',
    plugin: 'pagepreview',
    type: 'string',
  });
};
