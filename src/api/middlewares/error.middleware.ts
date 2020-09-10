import { errors, errorDetail } from '../config/error';

const AUTH_ERRORS = ['TokenExpiredError', 'JsonWebTokenError'];

const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';
const UNIQUE_VIOLATION_ERROR = 'UniqueViolationError';

interface ErrorInterface {
  message: string,
  code: number
}

interface GraphQLError {
  name: string,
  extensions: {
    code: string,
    exception: {
      name: string
    }
  },
  message: string,
}

const errorMiddleWare = (error: GraphQLError): any => {
  console.log(`error is`, error);
  if (error.name && AUTH_ERRORS.includes(error.name)) {
    // const a =  errorDetail[error.name];
  }

  if (error.extensions && error.extensions.code === errors.GRAPHQL_VALIDATION_FAILED) {
    // return errorDetail[errors.GRAPHQL_VALIDATION_FAILED];
    // throw new Error(errors.GRAPHQL_VALIDATION_FAILED);
  }

  if (error.extensions && error.extensions.code === INTERNAL_SERVER_ERROR && error.extensions.exception.name === UNIQUE_VIOLATION_ERROR) {
    // return errorDetail[errors.UNIQUE_VALIDATION_ERROR];
  }

  /*if (errorDetail[error.message]) {
    // return errorDetail[error.message];
  }*/

  if(error.extensions && error.extensions.code === errors.CUSTOM_ERROR)
  {
    // const eCode = errorDetail[errors.CUSTOM_ERROR];

    // return {message:error.message,code: eCode.code};
  }

  return errorDetail;
};

export default errorMiddleWare;

