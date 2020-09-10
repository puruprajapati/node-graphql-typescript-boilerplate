import * as knexJs from 'knex';
import { Model } from 'objection';
const knexConfig = require('./knexfile');

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);

Model.knex(knex);

export { knex };

export default Model;
