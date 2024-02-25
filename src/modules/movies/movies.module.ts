import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { MovieService } from './movie.service'
import { MovieController } from './movie.controller'

@Module({
	imports: [ConfigModule],
	providers: [MovieService],
	controllers: [MovieController],
})
export class MoviesModule {}
