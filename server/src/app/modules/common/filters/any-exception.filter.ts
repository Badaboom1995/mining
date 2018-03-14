import {
  ExceptionFilter,
  HttpException,
  Catch,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';

@Catch(
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  Error,
)
export class AnyExceptionFilter implements ExceptionFilter {
  public catch(exception, response) {
    if (exception instanceof NotFoundException) {
      response.status(HttpStatus.NOT_FOUND);
    } else if (exception instanceof BadRequestException) {
      response.status(HttpStatus.BAD_REQUEST);
    } else if (exception instanceof ForbiddenException) {
      response.status(HttpStatus.FORBIDDEN);
    } else if (exception instanceof UnauthorizedException) {
      response.status(HttpStatus.UNAUTHORIZED);
    } else if (exception instanceof Error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    response.send({ success: false, message: exception.message });
  }
}
