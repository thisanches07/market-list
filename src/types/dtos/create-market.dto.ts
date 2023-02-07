import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMarketDto {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;
}
