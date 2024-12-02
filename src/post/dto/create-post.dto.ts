import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsDateString()
    @IsNotEmpty()
    dataDeCriacao: Date;

    @IsDateString()
    @IsNotEmpty()
    dataDeAtualizacao: Date;

}
