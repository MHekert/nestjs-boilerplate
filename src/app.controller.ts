import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  getHello(@Query() helloDto: HelloDto): string {
    return this.appService.getHello(helloDto);
  }
}
