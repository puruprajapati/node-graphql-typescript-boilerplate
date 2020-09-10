import { ApolloError } from 'apollo-server-errors';

export const errors = {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    INVALID_TYPE: 'INVALID_TYPE',
    _FORBIDDEN: 'FORBIDDEN',
    FAILED: 'FAILED',
    INVALID_CODE: 'INVALID_CODE',
    NotFoundError: 'NotFoundError',
    TokenExpiredError: 'TokenExpiredError',
    JsonWebTokenError: 'JsonWebTokenError',
    INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
    FILE_NOT_FOUND: 'FILE_NOT_FOUND',
    INVALID_CSV: 'INVALID_CSV',
    CHILD_TARGET_INVALID: 'CHILD_TARGET_INVALID',
    NOT_OWNED: 'NOT_OWNED',
    INVOICE_EXISTS: 'INVOICE_EXISTS',
    GRAPHQL_VALIDATION_FAILED: 'GRAPHQL_VALIDATION_FAILED',
    UNIQUE_VALIDATION_ERROR: 'UNIQUE_VALIDATION_ERROR',
    PROMOTION_INVALID_ERROR: 'PROMOTION_INVALID_ERROR',
    CATEGORY_IN_USE_ERROR: 'CATEGORY_IN_USE_ERROR',
    ALREADY_INVOICED: 'ALREADY_INVOICED',
    CUSTOM_ERROR: 'CUSTOM_ERROR',
    OUTLET_EXIST_ERROR: 'OUTLET_EXIST_ERROR',
    OUTLET_USER_EXIST_ERROR: 'OUTLET_USER_EXIST_ERROR',
    INVALID_PASSWORD_CHANGE: 'INVALID_PASSWORD_CHANGE',
    ADJUSTMENT_INVALID:'ADJUSTMENT_INVALID',
    STOCK_INSUFFICIENT:'STOCK_INSUFFICIENT',
    BILLING_INTEGRATION: 'BILLING_INTEGRATION',
    TARGET_EXISTS: 'TARGET_EXISTS',
    TRANSACTION_LOCKED: 'TRANSACTION_LOCKED',
};

export const errorDetail = {
    _FORBIDDEN: {
        message: 'You are not authorized to make this request.',
        code: 403
    },
    UNAUTHENTICATED: {
        message: 'You are not authenticated to make this request.',
        code: 401
    },
    INVALID_TYPE: {
        message: 'Invalid Type',
        code: 422
    },
    FAILED: {
        message: 'Something went wrong.',
        code: 500
    },
    INVALID_CREDENTIALS: {
        message: 'Incorrect username or password.',
        code: 401
    },
    NotFoundError: {
        message: 'The requested resource could not be found.',
        code: 404
    },
    INVALID_CODE: {
        message: 'Invalid Verification Code.',
        code: 422
    },
    TokenExpiredError: {
        message: 'The authentication token has expired.',
        code: 401
    },
    JsonWebTokenError: {
        message: 'Required authentication token is missing or malformed.',
        code: 401
    },
    INVALID_REFRESH_TOKEN: {
        message: 'Invalid Refresh Token.',
        code: 422
    },
    FILE_NOT_FOUND: {
        message: 'The file trying to be read not found.',
        code: 404
    },
    INVALID_CSV: {
        message: 'The uploaded file seems to be invalid. Please check and try again.',
        code: 422
    },
    CHILD_TARGET_INVALID: {
        message: 'The child targets cannot exceed the parent targets.',
        code: 422
    },
    NOT_OWNED: {
        message: 'You cannot set the target to this Route, since it is not assigned to you.',
        code: 403
    },
    INVOICE_EXISTS: {
        message: 'The invoice number requested already exists.',
        code: 409
    },
    GRAPHQL_VALIDATION_FAILED: {
        message: 'The requested query is invalid',
        code: 409
    },
    UNIQUE_VALIDATION_ERROR: {
        message: 'Unique entity needs to be registered.',
        code: 409
    },
    PROMOTION_INVALID_ERROR: {
        message: 'Your request violates the applied promotion.',
        code: 400
    },
    CATEGORY_IN_USE_ERROR: {
        message: 'Deleted Category is in use',
        code: 400
    },
    ALREADY_INVOICED: {
        message: 'Orders Already Invoiced',
        code: 400
    },
    OUTLET_EXIST_ERROR: {
        message: 'Sorry. We don\'t have retail outlet of given mobile number. Please contact our support team.',
        code: 401,
    },
    OUTLET_USER_EXIST_ERROR: {
        message: 'User Account does not exist. Please register.',
        code: 401,
    },
    INVALID_PASSWORD_CHANGE: {
        message: 'Password change error',
        code: 401,
    },
    ADJUSTMENT_INVALID: {
        message: 'Adjustment cannot be made,sku Quantity is insufficient.',
        code: 401,
    },
    STOCK_INSUFFICIENT: {
        message: 'Request cannot be processed.Stock is insufficient.',
        code: 401,
    },
    BILLING_INTEGRATION: {
        message: 'Error in Billing Server',
        code: 401,
    },
    TARGET_EXISTS: {
        message: 'Target already exists for given time period.',
        code: 409
    },
    CUSTOM_ERROR: {
        code: 406
    },
    TRANSACTION_LOCKED: {
        message: 'Your transaction has been locked for a while. Please try after few minutes.',
        code: 503,
    }
};

export { ApolloError as CustomError };


