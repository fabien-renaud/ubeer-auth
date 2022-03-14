import express from 'express';

const server = express();
server.set('port', parseInt(process.env.PORT, 10));

server.listen(server.get('port'), () => `Listening on port ${server.get('port')}`);
