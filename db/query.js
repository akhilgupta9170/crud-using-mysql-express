export const getAllQuery = () => {
    return 'SELECT * FROM student';
};

export const getUserByIdQuery = (id) => {
    return 'SELECT * FROM student WHERE id = ?';
};

export const createUserQuery = () => {
    return 'INSERT INTO student(name, email, address) VALUES(?, ?, ?)';
};

export const updateUserQuery = () => {
    return 'UPDATE student SET name = ?, email = ?, address = ? WHERE id = ?';
};

export const deleteUserQuery = () => {
    return 'DELETE FROM student WHERE id = ?';
};

export const checkEmailQuery = () => {
    return 'SELECT * FROM student WHERE email = ?';
}
export const checkUserQuery = () => {
    return 'SELECT * FROM student WHERE id != ?';
}