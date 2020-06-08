import { Injectable } from '@nestjs/common';
import { HelloDto } from './hello.dto';

@Injectable()
export class AppService {
  getHello(helloDto: HelloDto): string {
    const { name } = helloDto;
    return name ? `Hello ${name}!` : 'Hello World!';
  }
}
