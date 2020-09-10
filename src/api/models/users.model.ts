import Model from '../../database/db';

const TABLE_NAME = 'test'

class User extends Model {
    static get tableName () {
        return TABLE_NAME
    }

    static get idColumn () {
        return 'id'
    }
}

export default User
