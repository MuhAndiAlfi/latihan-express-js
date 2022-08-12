require("dotenv").config()

const {DEV_DB_HOST, DEV_DB, DEV_DB_USERNAME, DEV_DB_PASSWORD, DEV_DB_PORT} = process.env

module.exports={
    development: {
        host: DEV_DB_HOST,
        database: DEV_DB,
        username: DEV_DB_USERNAME,
        password: DEV_DB_PASSWORD,
        port: DEV_DB_PORT,
        dialect: "postgres"
    },
    tes: {
        host: DEV_DB_HOST,
        database: DEV_DB,
        username: DEV_DB_USERNAME,
        password: DEV_DB_PASSWORD,
        port: DEV_DB_PORT,
        dialect: "postgres"
    },
    production: {
        host: DEV_DB_HOST,
        database: DEV_DB,
        username: DEV_DB_USERNAME,
        password: DEV_DB_PASSWORD,
        port: DEV_DB_PORT,
        dialect: "postgres"
    },

}