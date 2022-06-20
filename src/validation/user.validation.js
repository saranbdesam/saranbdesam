
const Joi = require('@hapi/joi');

exports.registerValidation = (req) => {
    let Schema = Joi.object(({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required()
    }))
    return Schema.validate(req, { abortEarly: false });
}