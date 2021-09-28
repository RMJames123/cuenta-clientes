/**
 * Reading Environment Variables
 */
const dotenv = require('dotenv');
//import { config } from "dotenv";
 dotenv.config();
 //config();
 
 module.exports = {
   database: {
     connectionLimit: 10,
     host: process.env.DATABASE_HOST || "localhost",
     user: process.env.DATABASE_USER || "root",
     password: process.env.DATABASE_PASSWORD || "",
     database: process.env.DATABASE_NAME || "cuentaclientes",
   },
   port: process.env.PORT || 4000,
 };
 