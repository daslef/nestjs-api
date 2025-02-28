import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { z } from 'zod'
import { PostsModule } from 'src/posts/posts.module';

const configSchema = z.object({
  "DB_HOST": z.string().optional(),
  "DB_PORT": z.string().optional(),
  "DB_USER": z.string().optional(),
  "DB_PASSWORD": z.string().optional(),
  "DB_NAME": z.string(),
  "API_PORT": z.string().transform(value => parseInt(value))
})

@Module({
  imports: [PostsModule, ConfigModule.forRoot({
    validate: (env) => configSchema.parse(env),
    envFilePath: '.env.local'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
