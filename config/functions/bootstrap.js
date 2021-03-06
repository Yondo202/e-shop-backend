'use strict';
const pluralize = require('pluralize');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
    // add any rules. First argument is Regex, second is string to replace
    pluralize.addPluralRule(/Бараанууд$/i, 'Бараа Бүтээгдэхүүн');
    pluralize.addPluralRule(/Үндсэн_Ангилал$/i, 'Үндсэн Ангилал');
    pluralize.addPluralRule(/Ангилал2$/i, 'Ангилал');
    pluralize.addPluralRule(/Дэд_Ангилал$/i, 'Дэд ангилал');
    pluralize.addPluralRule(/Брэнд$/i, 'Брэнд');
};