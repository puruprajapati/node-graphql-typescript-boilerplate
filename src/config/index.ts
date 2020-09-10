const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!dotenv) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    /**
     * Environment
     */
    environment: process.env.NODE_ENV,
    /**
     * Production Environment
     */
    isProductionEnv: process.env.NODE_ENV === 'production',
    /**
     * Application Title
     */
    title: process.env.APP_NAME,

    /**
     * Application Version
     */
    version: process.env.APP_VERSION,

    /**
     * Application Host
     */
    host: process.env.APP_HOST || '0.0.0.0',

    /**
     * Your favorite port
     */
    port:
        (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.APP_PORT || '3000',

    /**
     * Database Client
     */
    dbClient: process.env.DB_CLIENT || 'pg',

    /**
     * Database configuration.
     */
    database: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        charset: 'utf8',
        timezone: 'UTC'
    },

    /** Test Databse Configuration */
    testDatabase: {
        port: process.env.TEST_DB_PORT,
        host: process.env.TEST_DB_HOST,
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        name: process.env.TEST_DB_NAME,
        charset: 'utf8',
        timezone: 'UTC'
    },

    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,

    /**
     * Used by winston logger
     */
    logs: {
        directory: process.env.LOG_DIR || 'logs',
        level: process.env.LOG_LEVEL || 'info',
        enableCloudLogging: process.env.ENABLE_CLOUD_LOGGING === 'true'
    },

    /**
     * Used by AWS
     *accessKeyId: 'AKIAUEH5UKE4WU54F55F',
     *secretAccessKey: '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',
     *region: 'ap-south-1'
     */
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: 'ap-south-1',
        logGroup: process.env.AWS_LOG_GROUP || 'default', // 'billing-staging',
        logStream: process.env.AWS_LOG_STREAM || 'default' // 'ap-billing'
    },

    api: {
        prefix: '/api/v1'
    }
};
