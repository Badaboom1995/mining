export const NODE_ENV = process.env.NODE_ENV || 'development';
export const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
export const SITENAME_BASE = process.env.SITENAME_BASE || 'Vizitnica';

export const JWT_SECRET = process.env.JWT_SECRET || 'JWt_Secret02sdf@#';

export const SESSION_SECRET = process.env.SESSION_SECRET || 'SE-042f-SSION@#';

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://delphit:m12345zxcv@ds251277.mlab.com:51277/cardholder';

export const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || 'key-15b7573a535b0f454c624e19fe6d1aa1';
export const MAILGUN_EMAIL_DOMAIN = process.env.MAILGUN_EMAIL_DOMAIN || 'sandbox4f9e3d3994f145e1b063385b031ca054.mailgun.org';

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || 'AKIAIDU7VVLBBUFXORJA';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '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';
export const AWS_REGION = process.env.AWS_REGION || 'us-west-2';
export const AWS_PLATFORM_APPLICATION_ARN = {
  ios: process.env.AWS_PLATFORM_OSX_APPLICATION_ARN || 'arn:aws:sns:us-west-2:279123992655:app/APNS_SANDBOX/CardHolder'
};
export const AWS_S3_BUCKET = process.env.AWS_S3_BUCKET || 'cardholder-images';
