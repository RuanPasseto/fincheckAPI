/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {
  getUserById(userId: string) {
    return { userId }
  }
}
