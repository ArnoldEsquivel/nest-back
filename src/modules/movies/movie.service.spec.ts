import { Test, TestingModule } from '@nestjs/testing'
import { MovieService } from './movie.service'
import { ConfigService } from '@nestjs/config'

describe('MovieService', () => {
	let service: MovieService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [MovieService, ConfigService],
		}).compile()

		service = module.get<MovieService>(MovieService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
