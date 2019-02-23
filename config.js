module.exports = {
	port: 8000,
	dbConnectionString: ({   "username": "postgres",
    "password": "admin",
    "database": "db_JWTauthPostgres",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres",
    }),
	saltRounds: 2,
	jwtSecret: 'yo-its-a-secret',
	tokenExpireTime: '6h'
}
//don't store this file in repository, it's unsecure
