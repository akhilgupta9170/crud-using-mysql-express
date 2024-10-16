import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database!', process.env.DB_NAME);
        connection.release(); // Always release the connection back to the pool
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

testConnection(); // Call the test connection function

export default pool;
