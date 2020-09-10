import User from '../../models/users.model';

class NewAuthService {
    public async findAllUser(): Promise<User[]> {
        return User.query();
    }
}

export default NewAuthService;
