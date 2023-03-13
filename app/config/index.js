const dotenv = require('dotenv');
const joi = require('joi');

dotenv.config();

const envVarsSchema = joi
  .object()
  .keys({
    PORT: joi.number().positive().required(),

    JWT_SECRET: joi.string().required(),
    JWT_EXPIRES_IN: joi.string().required(),

    POSTGRES_HOST: joi.string().required(),
    POSTGRES_PORT: joi.number().positive().required(),
    POSTGRES_USER: joi.string().required(),
    POSTGRES_PASSWORD: joi.string().required(),
    POSTGRES_DATABASE: joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  PORT: envVars.PORT,

  JWT_SECRET: envVars.JWT_SECRET,
  JWT_EXPIRES_IN: envVars.JWT_EXPIRES_IN,

  POSTGRES_HOST: envVars.POSTGRES_HOST,
  POSTGRES_PORT: envVars.POSTGRES_PORT,
  POSTGRES_USER: envVars.POSTGRES_USER,
  POSTGRES_PASSWORD: envVars.POSTGRES_PASSWORD,
  POSTGRES_DATABASE: envVars.POSTGRES_DATABASE,
};
