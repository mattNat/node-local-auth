'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL 
  || 'mongodb://admin:admin123@localhost/local-auth-demo?authSource=admin'
  || 'mongodb://localhost/local-auth-demo';
exports.PORT = process.env.PORT || 8080;