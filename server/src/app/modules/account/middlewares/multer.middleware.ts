import {
  Middleware,
  HttpException,
  HttpStatus,
  NestMiddleware,
  ExpressMiddleware,
} from '@nestjs/common';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as path from 'path';
import * as AWS from 'aws-sdk';
import {
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_S3_BUCKET,
} from '../../../../config';

@Middleware()
export class ImageUploadMiddleware implements NestMiddleware {
  S3: any;
  constructor() {
    AWS.config.update({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });
  }
  resolve(...args: any[]): ExpressMiddleware {
    this.S3 = new AWS.S3();
    function imageTypeFilter(request, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(
          new HttpException(
            {
              success: false,
              message: 'Only image files are allowed!',
            },
            HttpStatus.FORBIDDEN,
          ),
          false,
        );
      }
      cb(null, true);
    }

    const upload = multer({
      storage: multerS3({
        s3: this.S3,
        bucket: AWS_S3_BUCKET,
        metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
        },
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, `${file.fieldname}-${Date.now()}${path
            .extname(file.originalname)
            .toLowerCase()}`,)
        }
      }),
      fileFilter: imageTypeFilter,
      limits: {
        fieldNameSize: 255,
        fileSize: 500000,
        files: 1,
        fields: 1,
      },
    });
    return upload.single('avatar');
  }
}
