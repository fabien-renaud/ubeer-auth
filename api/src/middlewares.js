import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

export const jwtCheckMiddleware = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH_DOMAIN}.well-known/jwks.json`
    }),
    audience: process.env.AUTH_AUDIENCE,
    issuer: process.env.AUTH_DOMAIN,
    algorithms: ['RS256']
});

export const errorHandlingMiddleware = (error, req, res, next) => {
    res.status(error.status).send(error.message);
};
