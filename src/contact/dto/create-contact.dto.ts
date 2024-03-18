import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateContactDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
