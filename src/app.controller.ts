import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Main - Health Check')
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHealtCheck(): string {
		return this.appService.healtCheck()
	}
}
