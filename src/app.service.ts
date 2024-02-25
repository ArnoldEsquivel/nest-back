import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	healtCheck(): string {
		return 'App running successfully'
	}
}
