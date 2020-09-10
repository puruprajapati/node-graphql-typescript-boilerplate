import GraphQLContext from 'graphql';
import authService from '../../services/auth/auth.service';
import {errors} from '../../config/error';

interface PaginationInput {
    limit: bigint,
    offset: bigint
}

interface InputInterface {
    input: string
}

class AuthController {
    public async getList(_: any, input: InputInterface, context: GraphQLContext, info: any) {

        const users = await authService.findAllUser();
        console.log(`the users is`, users, context, info);

        throw new Error(errors.INVALID_CREDENTIALS)

        return input.input;
    }
}

const authController = new AuthController();

export default authController;
