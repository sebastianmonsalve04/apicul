import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    @IsEmail({}, {
        message: 'formato de email invalido'
    })
    email: string
    @MinLength(10,{
        message: 'minimo 10 caracteres'
    })
    @MaxLength(15,{
        message:'maximo 15 caracteres'
    })
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string;
  
}
