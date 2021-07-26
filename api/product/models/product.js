'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const { isDraft } = require('strapi-utils').contentTypes;


module.exports = {
    /**
     * Triggered before user creation.
     */
    lifecycles: {
    //   async beforeCreate(data) {
    //       console.log(`data`, data);

    //     data.itemcode = 4000 + parseInt(data.id);
    //   },
      async afterCreate(result) {
        // result.itemcode = 4000 + result.id;
        // let obj = { ...result, itemcode: `${4000 + result.id}`}

        if(!isDraft(result, strapi.models.product)){
            strapi.services.algolia.saveObject({name:result.name, bogino_tailbar:result.bogino_tailbar, draft: isDraft(result, strapi.models.product), objectID:result.id}, "TEST");
        }else{
            strapi.services.algolia.deleteObject(result.id, "TEST");
        }
      },
      async afterUpdate(result, params) {
        if(!isDraft(result, strapi.models.product)){
            strapi.services.algolia.saveObject({name:result.name, bogino_tailbar:result.bogino_tailbar, draft: isDraft(result, strapi.models.product) , objectID:result.id}, "TEST")
        }else{
            strapi.services.algolia.deleteObject(result.id, "TEST");
        }
      },
      async afterDelete(result, params) {
        strapi.services.algolia.deleteObject(result.id, "TEST")
      },
    },
  };