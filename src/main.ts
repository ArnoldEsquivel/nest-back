import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	const port = configService.get('PORT')
	const origin = configService.get('ORIGIN')

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
		})
	)

	const config = new DocumentBuilder()
		.setTitle('Movies API')
		.setDescription('This is a simple API to manage movies')
		.setVersion('1.0')
		.addTag('Movies')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)

	app.enableCors({
		origin: origin,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true,
	})

	await app.listen(port)
	console.log(`Application is running on: http://localhost:${port}`)
	console.log(`Swagger is running on: http://localhost:${port}/docs`)
	console.log(`Origin CORS is: ${origin}`)
}
bootstrap()
