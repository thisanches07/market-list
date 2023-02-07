import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateMarketDto {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsOptional()
  name?: string;
}
