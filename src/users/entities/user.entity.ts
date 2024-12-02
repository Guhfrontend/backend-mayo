import { IsNotEmpty } from "class-validator";
import { Post } from "src/post/entities/post.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid");

@Entity('users')
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column() 
    @IsNotEmpty()
    password: string;

    @OneToMany(() => Post, post => post.user) 
    posts: Post[];

    @BeforeInsert()
    generateId() {
        this.id = `user_${nanoid()}`
    }
}
