import { Test, TestingModule } from '@nestjs/testing'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'
import { ConfigService } from '@nestjs/config'

describe('MovieController', () => {
	let controller: MovieController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MovieController],
			providers: [MovieService, ConfigService],
		}).compile()

		controller = module.get<MovieController>(MovieController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
