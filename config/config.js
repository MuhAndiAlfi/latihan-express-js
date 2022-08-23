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
        host: "ec2-34-203-182-65.compute-1.amazonaws.com",
        database: "d5dftbegg779gn",
        username: "nacyrghvefqtst",
        password: "9fa7b4c6c5b0410f962df7b40395fe55a3b9bf027dab5ff513efad76dc14403b",
        port: "5432",
        dialect: "postgres",
        url: "postgres://nacyrghvefqtst:9fa7b4c6c5b0410f962df7b40395fe55a3b9bf027dab5ff513efad76dc14403b@ec2-34-203-182-65.compute-1.amazonaws.com:5432/d5dftbegg779gn",
        herokucli: "heroku pg:psql postgresql-defined-65340 --app latihan-backend-express"
    },

}