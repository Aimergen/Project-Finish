import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOTPDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  password: string;

  repassword: string;
}
