/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
// @ts-ignore
exports.seed = function(knex) {
  return knex('test')
    .del()
    .then(() => {
      return knex('test').insert([
        {
          id: 'eec3c2af-28c8-4d9b-8d57-655ffb91fb55',
          active: true,
        }
      ]);
    });
}
