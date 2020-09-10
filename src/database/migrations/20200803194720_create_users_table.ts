/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

// @ts-ignore
exports.up = function (knex) {
    // @ts-ignore
    return knex.schema.createTable('test', (table) => {
        table.uuid('id')
            .notNullable()
            .defaultTo(knex.raw('uuid_generate_v4()'))
            .primary();
        table.boolean('active')
            .defaultTo(true);
    });
};

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
// @ts-ignore
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
