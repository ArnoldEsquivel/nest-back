import * as Joi from 'joi'

export const validateEnv = Joi.object({
	PORT: Joi.number().default(3000),
	ORIGIN: Joi.string().required(),
	AT_AUTH: Joi.string().required(),
	API_KEY: Joi.string().required(),
})
