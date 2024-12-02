import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Post } from '../post/entities/post.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'dpg-ct6r3o1u0jms739bbagg-a.oregon-postgres.render.com',
  port: 5432,
  username: 'db_mayo_consultoria_user',
  password: '4SVqxz1yzxzRtswzDJq09bJShkgbiTJi',
  database: 'db_mayo_consultoria',
  ssl: true,
  entities: [User, Post],
};
