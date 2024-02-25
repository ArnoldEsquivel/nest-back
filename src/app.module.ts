import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { validateEnv } from './config/validateEnv'
import config from './config/config'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			load: [config],
			isGlobal: true,
			validationSchema: validateEnv,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
