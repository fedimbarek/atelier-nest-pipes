import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Le nom d’utilisateur est obligatoire.' })
  username: string;

  @IsEmail({}, { message: 'Veuillez fournir un email valide.' })
  email: string;
}
