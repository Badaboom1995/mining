import { HttpStatus } from '@nestjs/common';

export class APIError {
  name: any;
  status: number;
  success: boolean;
  message: string;
  content: object;

  constructor(message, status = HttpStatus.INTERNAL_SERVER_ERROR, content = {}) {
    this.status = status;
    this.success = false;
    this.name = this.constructor.name;
    this.message = message;
    this.content = content;
  }
}
