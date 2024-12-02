import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private readonly repository: Repository<Post>) {}


  create(createPostDto: CreatePostDto) {
    const post = this.repository.create(createPostDto);
    return this.repository.save(post);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.repository.findOneBy({id});
    if (!post) 
      return null;

    this.repository.merge(post, updatePostDto);
    return this.repository.save(post);
  }

  async remove(id: string) {
    const post = await this.repository.findOneBy({id});
    if (!post) 
      return null;

    return this.repository.remove(post);
  }
}
