// movie.entity.ts

import { ApiProperty } from '@nestjs/swagger'

export class Movie {
	@ApiProperty()
	adult: boolean

	@ApiProperty()
	backdropPath: string

	@ApiProperty()
	genreIds: number[]

	@ApiProperty()
	id: number

	@ApiProperty()
	originalLanguage: string

	@ApiProperty()
	originalTitle: string

	@ApiProperty()
	overview: string

	@ApiProperty()
	popularity: number

	@ApiProperty()
	posterPath: string

	@ApiProperty()
	releaseDate: string

	@ApiProperty()
	title: string

	@ApiProperty()
	video: boolean

	@ApiProperty()
	voteAverage: number

	@ApiProperty()
	voteCount: number
}
