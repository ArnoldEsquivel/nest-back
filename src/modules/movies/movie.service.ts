import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MovieService {
	private readonly baseUrl: string = 'https://api.themoviedb.org/3'
	constructor(private readonly configService: ConfigService) {}

	async getAllMovies() {
		const url = `${this.baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${this.configService.get('API_KEY')}`
		const response = await fetch(url)
		const data = await response.json()
		return data.results
	}

	async getPopularMovies() {
		const url = `${this.baseUrl}/movie/popular?language=en-US&page=1&api_key=${this.configService.get('API_KEY')}`
		const response = await fetch(url)
		const data = await response.json()
		return data.results
	}

	async searchMoviesByTitle(title?: string) {
		const url = `${this.baseUrl}/search/movie?language=en-US&page=1&query=${title}&api_key=${this.configService.get('API_KEY')}`
		if (!title || title === '') return this.getAllMovies()
		const response = await fetch(url)
		const data = await response.json()
		return data.results
	}
}
