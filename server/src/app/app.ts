import * as express from 'express';
import * as expressSession from 'express-session';
import * as expressLayouts from 'express-ejs-layouts';
import * as passport from 'passport';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as expressDevice from 'express-device';

import { SESSION_SECRET } from '../config';

const expressApp: express.Application = express();
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');
expressApp.set('layout', '_layout');
expressApp.set('layout extractScripts', true);
expressApp.use(expressLayouts);
expressApp.use(cookieParser());
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(__dirname, '../../public')));
expressApp.use(expressSession({
  secret: SESSION_SECRET,
}));
expressApp.use(passport.initialize());
expressApp.use(passport.session());
expressApp.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
expressApp.use(expressDevice.capture({ parseUserAgent: true }));
expressDevice.enableDeviceHelpers(expressApp);
module.exports = expressApp;
