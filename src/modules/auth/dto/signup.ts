/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator"

export class SignupDTO {
  @IsString({ message: 'Name needs to be a string' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'Email needs to be a string' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString({ message: 'Password needs to be a string' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
