import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore as unknown as string,
        host: 'localhost',
        port: 6379,
      }),
    })   
  ],
})
export class RedisModule {}
