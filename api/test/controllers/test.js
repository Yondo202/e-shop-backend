'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        console.log(`ctx.query+`, ctx);
        const { data, files } = sanitizeEntity(ctx);
        console.log(`data+`, data);
        console.log(`files+`, files);
        // entities = await strapi.services.products.find(ctx.query);
    },
    async update(ctx) {
        console.log(`ctx.query+`, ctx.request.body);
        const { id } = ctx.params;
        console.log(`id+`, id);
        // const { data, files } = sanitizeEntity (ctx);
        // console.log(`data+`, data);
        // console.log(`files+`, files);
        // entities = await strapi.services.products.find(ctx.query);
        let entity = await strapi.services.test.update({ id }, ctx.request.body);

       

         function afterCreate(result, name) {

            console.log(`result.id`, result.id);
            console.log(`result.test1`, result.test1);

            strapi.services.algolia.saveObject({test1:result.test1, test33:result.test1 , objectID:44}, "TEST").then(({ objectID })=>{
                console.log(`res`, objectID);
            })
        }
        
        const afterGet = async ()=>{
              const { client } = strapi.services.algolia
            //   let arr = await client.listIndices()
            let my2 = client.initIndex('TEST');

            my2.search('jia2', {
                attributesToRetrieve: ['test1', 'test2'],
                hitsPerPage: 50,
              }).then(({ hits }) => {
                console.log("my hitsss",hits);
            });

            //   console.log(`my2`, my2);

            //   console.log(`arr`, arr.items);
        }

        console.log(`entity`, entity);
        // console.log(`strapi.models`, strapi.models.test);

        afterCreate(ctx.request.body, null);

        afterGet();



        return sanitizeEntity(entity, { model: strapi.models.test });


    },
};

