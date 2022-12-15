'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('pagepreview')
      .service('myService')
      .getWelcomeMessage();
  },
});
