import pool from '../db/db.js';
import {
    getAllQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery,
    checkEmailQuery,
    checkUserQuery,
} from '../db/query.js';

export const readAllUsers = async (req, res) => {
    try {
        const [result] = await pool.query(getAllQuery());
        return res.send(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// localhost:3000/api/users/:id
export const readUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query(getUserByIdQuery(), [id]);
        return res.send(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// localhost:3000/api/users
export const createUser = async (req, res) => {
    const { name, email, address } = req.body;

    try {
        const checkEmail = await pool.query(checkEmailQuery(), [email]);
        if (checkEmail[0].length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const [result] = await pool.query(createUserQuery(), [name, email, address]);
        return res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const existUser = await pool.query(checkUserQuery(), [id]);
    if (existUser[0].length === 0) {
        return res.status(404).json({ error: 'User not found' });
    }
    const { name, email, address } = req.body;

    try {
        const [result] = await pool.query(updateUserQuery(), [name, email, address, id]);
        return res.send(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const existUser = await pool.query(checkUserQuery(), [id]);
    if (existUser[0].length === 0) {
        return res.status(404).json({ error: 'User not found' });
    }

    try {
        const [result] = await pool.query(deleteUserQuery(), [id]);
        return res.send(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
