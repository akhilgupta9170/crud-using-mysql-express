import joi from 'joi';

const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    address: joi.string().min(5).max(255).required(),

});

export default schema;
