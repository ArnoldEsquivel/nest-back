import { ApiProperty } from '@nestjs/swagger'

export class Movie {
	@ApiProperty({
		description: 'Helps to identify the type of movie',
		example: false,
	})
	adult: boolean

	@ApiProperty({
		description: 'Backdrop path of the movie',
		example: '/8s4h9friP6Ci3adRGahHARVd76E.jpg',
	})
	backdropPath: string

	@ApiProperty({
		description: 'Genre ids of the movie',
		example: [28, 12, 14, 878],
	})
	genreIds: number[]

	@ApiProperty({
		description: 'Id of the movie',
		example: 399566,
	})
	id: number

	@ApiProperty({
		description: 'Original language of the movie',
		example: 'en',
	})
	originalLanguage: string

	@ApiProperty({
		description: 'Original title of the movie',
		example: 'Godzilla vs. Kong',
	})
	originalTitle: string

	@ApiProperty({
		description: 'Overview of the movie',
		example:
			'In a time when monsters walk the Earth, humanity`s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
	})
	overview: string

	@ApiProperty({
		description: 'Popularity of the movie',
		example: 1085.558,
	})
	popularity: number

	@ApiProperty({
		description: 'Poster path of the movie',
		example: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
	})
	posterPath: string

	@ApiProperty({
		description: 'Release date of the movie',
		example: '2021-03-24',
	})
	releaseDate: string

	@ApiProperty({
		description: 'Title of the movie',
		example: 'Godzilla vs. Kong',
	})
	title: string

	@ApiProperty({
		description: 'Helps to identify the type of movie',
		example: false,
	})
	video: boolean

	@ApiProperty({
		description: 'Vote average of the movie',
		example: 8.4,
	})
	voteAverage: number

	@ApiProperty({
		description: 'Vote count of the movie',
		example: 1774,
	})
	voteCount: number
}
