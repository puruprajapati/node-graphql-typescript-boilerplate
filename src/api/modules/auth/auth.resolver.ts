import * as authController from './auth.controller';

const AuthResolver = {
  Query: {
    test: authController.default.getList,
  },
  Mutation: {
    test: authController.default.getList,
  }
};

export default AuthResolver
