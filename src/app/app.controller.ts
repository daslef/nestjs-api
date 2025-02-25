import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':word')
  // getCustomWord(@Param("word") word: string): string {
  //   return this.appService.getCustomWord(word);
  // }
}
