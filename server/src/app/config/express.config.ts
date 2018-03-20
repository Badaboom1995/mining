import * as express from 'express';
import * as expressSession from 'express-session';
import * as expressLayouts from 'express-ejs-layouts';
import * as passport from 'passport';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as expressDevice from 'express-device';
import * as connect from 'connect-mongo';
import { connection as MongoConnect } from 'mongoose';
import * as cors from 'cors';
import { SESSION_SECRET } from './environments.config';

const MongoStore = connect(expressSession);

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:8288' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', '_layout');
app.set('layout extractScripts', true);
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, '../../public')));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    // cookie: { secure: fals },
    store: new MongoStore({
      mongooseConnection: MongoConnect,
    })
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(expressDevice.capture({ parseUserAgent: true }));
expressDevice.enableDeviceHelpers(app);

export default app;
