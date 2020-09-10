import * as hpp from 'hpp';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import {express as voyagerMiddleware} from 'graphql-voyager/middleware';
import logger from './utils/logger';

const config = require('./config');

class App {
    public app: express.Application;
    public host: (string | number);
    public port: (string | number);
    public productionEnv: boolean;

    constructor() {
        this.app = express();
        this.host = config.host;
        this.port = config.port;
        this.productionEnv = config.isProductionEnv;
        this.setHostAndPort();
        this.initializeMiddlewares();
        // this.initializeSwagger();
        // this.initializeErrorHandling();

    }

    public listen() {
        this.app.listen(this.app.get('port'), this.app.get('host'), () => {
            logger.info(`
                ################################################
                🛡️Server started at http://${this.host}:${this.port}/🛡️
                ################################################
            `);
        });
    }

    public getServer() {
        return this.app;
    }

    private setHostAndPort() {
        this.app.set('host', this.host);
        this.app.set('port', this.port);
    }

    private initializeMiddlewares() {
        if (this.productionEnv) {
            this.app.use(hpp());
            this.app.use(helmet());
            // this.app.use(logger('combined'));
            this.app.use(cors({origin: 'l&d.com', credentials: true}));
        } else {
            // this.app.use(logger('dev'));
            this.app.use(cors({origin: true, credentials: true}));
            this.app.use('/voyager', voyagerMiddleware({endpointUrl: '/api/graphql'}));

        }

        this.app.use(express.json());
        this.app.use(compression());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(cookieParser());
    }

    private initializeSwagger() {
        const swaggerJSDoc = require('swagger-jsdoc');
        const swaggerUi = require('swagger-ui-express');

        const options = {
            swaggerDefinition: {
                info: {
                    title: 'GRAPHQL API',
                    version: '1.0.0',
                    description: 'Example docs',
                },
            },
            apis: ['swagger.yaml'],
        };

        const specs = swaggerJSDoc(options);
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
    }

    private initializeErrorHandling() {
        // make express specific error handling
    }
}

export default App;
