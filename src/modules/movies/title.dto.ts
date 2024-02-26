import { IsOptional, IsString, MaxLength } from 'class-validator'

export class TitleDto {
	@IsString({ message: 'Title must be a string' })
	@IsOptional()
	@MaxLength(99, { message: 'Title cannot be longer than 99 characters' })
	readonly title: string
}
