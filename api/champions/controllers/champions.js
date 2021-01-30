'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: async (ctx, next) => {
        console.log(ctx)
        try {
          ctx.body = 'ok';
        } catch (err) {
          ctx.body = err;
        }
      }

};
