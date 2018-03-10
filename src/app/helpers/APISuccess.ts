import { HttpStatus } from '@nestjs/common';

export class APISuccess {
  status: number;
  success: boolean;
  message: string;
  content: object;

  constructor(content = {}, message = 'Success', status = HttpStatus.OK) {
    this.status = status;
    this.success = true;
    this.message = message;
    this.content = content;
  }
}
