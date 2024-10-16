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

import schema from './userValidate.js';

export const readAllUsers = async (req, res) => {
    try {
        const [result] = await pool.query(getAllQuery());
        return res.json({ users: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }9
};

export const readUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query(getUserByIdQuery(), [id]);
        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json({ user: result[0] });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, email, address } = req.body;

    try {
        await schema.validateAsync(req.body); // Validate incoming request data

        const [checkEmail] = await pool.query(checkEmailQuery(), [email]);
        if (checkEmail.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const [result] = await pool.query(createUserQuery(), [name, email, address]);
        return res.status(201).json({ user: result });
    } catch (err) {
        if (err.isJoi) {
            return res.status(400).json({ error: "Invalid input: " + err.message });
        }
        return res.status(500).json({ error: error.message });
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
        await schema.validateAsync(req.body); // Validate incoming request data

        const [result] = await pool.query(updateUserQuery(), [name, email, address, id]);
        return res.json({ user: result });
    } catch (err) {
        if (err.isJoi) {
            return res.status(400).json({ error: "Invalid input: " + err.message });
        }
        return res.status(500).json({ error: err.message });
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
        return res.json({ message: 'User deleted successfully', result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
