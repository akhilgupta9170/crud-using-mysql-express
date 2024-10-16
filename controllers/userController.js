import pool from '../db/db.js';
import {
    getAllQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery
} from '../db/query.js';

export const readAllUsers = async (req, res) => {
    try {
        const [result] = await pool.query(getAllQuery());
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// localhost:3000/api/users/:id
export const readUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query(getUserByIdQuery(), [id]);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// localhost:3000/api/users
export const createUser = async (req, res) => {
    const { name, email, address } = req.body;
  
    try {
        const [result] = await pool.query(createUserQuery(), [name, email, address]);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, address } = req.body;
    try {
        const [result] = await pool.query(updateUserQuery(), [name, email, address, id]);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query(deleteUserQuery(), [id]);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
