import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MovieService } from './movie.service'

@ApiTags('movies')
@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get('popular')
	async getPopularMovies() {
		return this.movieService.getPopularMovies()
	}

	@Get('search')
	async searchMovies(@Query('title') title: string) {
		return this.movieService.searchMoviesByTitle(title)
	}
}
