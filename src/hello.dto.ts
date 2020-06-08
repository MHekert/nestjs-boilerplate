import { IsOptional, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { startCase } from 'lodash';
import { ApiProperty } from '@nestjs/swagger';

export class HelloDto {
	@ApiProperty({
		required: false,
	})
	@IsOptional()
	@IsNotEmpty()
	@Transform(startCase)
	name: string;
}