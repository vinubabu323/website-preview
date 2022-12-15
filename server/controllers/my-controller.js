'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('imagepreview')
      .service('myService')
      .getWelcomeMessage();
  },
});
