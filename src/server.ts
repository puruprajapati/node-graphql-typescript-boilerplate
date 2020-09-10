import 'dotenv/config';
import App from './app';
import GraphQLServer from './graphQL';
import schemas from './api/graphql/schema';
import validateEnv from './utils/validateEnv';

const cluster = require('cluster');
const config = require('./config');
const cpus = require('os').cpus().length;

function loadServer() {
    if (cluster.isMaster && config.isProductionEnv) {
        for (let i = 0; i < cpus; i += 1) {
            cluster.fork();
        }
    } else {
        const app = new App();
        const appServer = app.getServer();

        const graphQLServer = new GraphQLServer(schemas);

        graphQLServer.applyMiddleware(appServer, '/api');

        app.listen();
    }
}


validateEnv();
loadServer();
