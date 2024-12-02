import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UsersService {
constructor(
  @InjectRepository(User)
  private readonly repository : Repository<User>,
  @Inject(CACHE_MANAGER) 
  private cacheManager: Cache,) {}


  create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    const cachedUser = await this.cacheManager.get<User>(id);
    if (cachedUser) 
      return cachedUser;

    const user = await this.repository.findOneBy({id});
    await this.cacheManager.set(id, user);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repository.findOneBy({id});
    if (!user) 
      return null;

    this.repository.merge(user, updateUserDto);
    return this.repository.save(user);
  }

  async remove(id: string) {
    const user = await this.repository.findOneBy({id});
    if (!user) 
      return null;

    return this.repository.remove(user);
  }
}
