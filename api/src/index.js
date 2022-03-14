import express from 'express';
import {errorHandlingMiddleware, jwtCheckMiddleware} from './middlewares.js';

const server = express();
server.set('port', parseInt(process.env.PORT, 10));

// Non authenticated routes
server.get('/v1/health', (req, res) => res.sendStatus(200));

// Authenticated routes
server.use(jwtCheckMiddleware);
server.get('/v1/protected', (req, res) => res.sendStatus(200));

// Error handling
server.use(errorHandlingMiddleware);

server.listen(server.get('port'), () => `Listening on port ${server.get('port')}`);
