import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
	return {
		port: parseInt(process.env.PORT, 10) || 3000,
		origin: process.env.ORIGIN,
		at_auth: process.env.AT_AUTH,
		api_key: process.env.API_KEY,
	}
})
