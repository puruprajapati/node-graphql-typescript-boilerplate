import 'winston-daily-rotate-file';
import { format } from 'winston';
import * as fs from 'fs';
const winston = require('winston');
const config = require('../config');

const CloudWatchTransport = require('winston-aws-cloudwatch');

const LOG_LEVEL = {
    INFO: 'info',
    DEBUG: 'debug',
    VERBOSE: 'verbose',
    WARN: 'warn',
    ERROR: 'error'
};

const LOG_DIR = config.logs.dir || 'logs';
const LOG_GROUP = config.aws.logGroup;
const LOG_STREAM = config.aws.logStream;

// Create log directory if it does not exist
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}

const enableCloudWatchLogging: string = config.logs.enableCloudLogging;

const getWinstonTransports = (
    field: string = 'transaction',
    logFileHoldingDays: string = '7d',
    errorFileHoldingDays: string = '14d'
) => {
    return [
        new winston.transports.Console({
            format: format.combine(format.colorize(), format.simple()),
            level: 'info'
        }),

        new winston.transports.DailyRotateFile({
            format: format.combine(format.timestamp(), format.json()),
            maxFiles: logFileHoldingDays,
            level: LOG_LEVEL.INFO,
            dirname: LOG_DIR,
            datePattern: 'YYYY-MM-DD',
            filename: `%DATE%-${field}-debug.log`
        }),

        new winston.transports.DailyRotateFile({
            format: format.combine(format.timestamp(), format.json()),
            maxFiles: errorFileHoldingDays,
            level: LOG_LEVEL.ERROR,
            dirname: LOG_DIR,
            datePattern: 'YYYY-MM-DD',
            filename: `%DATE%-${field}-error.log`
        })
    ];
}

const getCloudWatchTransport = (
    logGroup = LOG_GROUP,
    logStream = LOG_STREAM
) => {
    return new CloudWatchTransport({
        logGroupName: logGroup,
        logStreamName: logStream,
        createLogGroup: true,
        createLogStream: true,
        submissionInterval: 2000,
        submissionRetryCount: 1,
        batchSize: 20,
        awsConfig: {
            accessKeyId: config.aws.accessKeyId,
            secretAccessKey: config.aws.secretAccessKey,
            region: 'ap-south-1'
        },
        formatLog: (item: { level: string; message: string; meta: string; }) =>
            `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
    });
}


const winstonTransports = getWinstonTransports();

if (enableCloudWatchLogging) {
    const cloudWatchLogger = getCloudWatchTransport();

    winstonTransports.push(cloudWatchLogger);
}


const logger = winston.createLogger({
    transports: winstonTransports
});

logger.stream = {
    write: function (message: string, encoding: any) {
        logger.info(message);
    }
}

export {LOG_LEVEL, logger};

export default logger;
