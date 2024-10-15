import pool from '../db/db.js';

export const readAllUsers = (req, res) => {
    const result = pool.query('SELECT * FROM STUDENT', (error, result) => {
        if (error) return res.status(500).json({ error: error });
        res.send(result);
    });

}
//localhost:3000/api/users
export const readUserById = (req, res) => {
    const { id } = req.params.id;
    const result = pool.query('SELECT * FROM STUDENT WHERE id=?'[id], (error, result) => {
        if (error) return res.status(500).json({ error: error });
        res.send(result);
    })
}
//localhost:3000/api/users

export const createUser = (req, res) => {
    const { name, age, course } = req.body;
    const result = pool.query('INSERT INTO STUDENT(name,age,course) VALUES(?,?,?)', [name, age, course], (error, result) => {
        if (error) return res.status(500).json({ error: error });
        res.send(result);
    })
}

export const updateUser = (req, res) => {
    const { id } = req.params.id;
    const { name, age, course } = req.body;
    const result = pool.query('UPDATE STUDENT SET name=?,age=?,course=? WHERE id=?', [name, age, course, id], (error, result) => {
        if (error) return res.status(500).json({ error: error });
        res.send(result);
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params.id;
    const result = pool.query('DELETE FROM STUDENT WHERE id=?', [id], (error, result) => {
        if (error) return res.status(500).json({ error: error });
        res.send(result);
    })
}
