'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'image-preview',
    plugin: 'imagepreview',
    type: 'string',
  });
};
