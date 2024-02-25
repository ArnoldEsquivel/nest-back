import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MovieService } from './movie.service'
import { TitleDto } from './title.dto'
import { Movie } from './movie.entity'

@ApiTags('Movies')
@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get('popular')
	async getPopularMovies(): Promise<Movie[]> {
		return this.movieService.getPopularMovies()
	}

	@Get('search')
	async searchMovies(@Query() titelDto: TitleDto): Promise<Movie[]> {
		return this.movieService.searchMoviesByTitle(titelDto.title)
	}
}
