import { IsNotEmpty } from "class-validator";
import { before } from "node:test";
import { User } from "src/users/entities/user.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid");

@Entity('posts')
export class Post {

    @PrimaryColumn()
    id: string;
    
    @Column()
    @IsNotEmpty()
    titulo: string;

    @Column()
    @IsNotEmpty()
    descricao: string;

    @Column()
    @IsNotEmpty()
    status: string;

    @Column()
    @IsNotEmpty()
    dataDeCriacao: Date;

    @Column()
    @IsNotEmpty()
    dataDeAtualizacao: Date;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @BeforeInsert()
    generateId() {
        this.id = `post_${nanoid()}`;
    }
}
