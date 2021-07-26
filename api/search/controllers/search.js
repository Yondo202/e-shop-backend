module.exports = {
    async search(ctx) {
      const { id } = ctx.params;
      const { client } = strapi.services.algolia
        //   let arr = await client.listIndices()
        let my2 = client.initIndex('e-shop_TEST');

      // var final = [];
  
      // https://www.algolia.com/doc/api-reference/api-methods/
      // const { client } = strapi.services.algolia
      // let arr = await client.listIndices()


      let final =  await my2.search(id, {
            attributesToRetrieve: ['name', 'bogino_tailbar'],
            hitsPerPage: 50,
          })

      // if(final.length){
      //   console.log(`final`, final);
      // }
      // console.log(`final`, final);

      console.log(`final`, final.hits);

      return final.hits


  
      // ...

    },
  }