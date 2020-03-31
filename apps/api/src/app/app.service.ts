import { Injectable } from '@nestjs/common';
import { Message } from '@share-humanity/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to Share humanity' };
  }
}
