import mysql2 from 'mysql2';

const pool = mysql2.createPool({
    connectionLimit: 10,
    host:'localhost',
    user:'root',
    password:'',
    database:'College'
});

export default pool;