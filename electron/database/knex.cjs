const knex = require('knex')
const knexfile = require('./knexfile.cjs')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const environment = process.env.NODE_ENV || 'development'