const pJson = require('../../package.json');

const name = pJson.name ? pJson.name.toUpperCase() : 'BASE';
const env = process.env.ENV ? process.env.ENV.toUpperCase() : 'NUXT';

const cookies = {
    ACCESS_TOKEN: `${name}-${env}-ACCESS-TOKEN`,
    LOCALE: `${name}-${env}-LOCALE`,
};

module.exports = cookies;
