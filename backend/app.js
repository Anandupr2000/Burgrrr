import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// for cors error
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import testRouter from './routes/test.js';
import burgerRouter from './routes/burgers.js';

import db from './db/config.js';
import session from 'express-session';
import connectMongodbSession from 'connect-mongodb-session';

var app = express();

const MongoDbStore = connectMongodbSession(session)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * cors librar is for accepting request from outside world
 */
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// This is allow request from only specified url
app.use(cors(corsOptions));


const mongoDbStore = MongoDbStore(
  {
    uri: `mongodb+srv://anonymous_:123@cluster0.7xuld.mongodb.net/`,
    collection: "mySession"
  }
)
// starting session
var sess = {
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  resave: true,
  saveUninitialized: false,
  store: mongoDbStore,
  cookie: {
    maxAge: 900000
  }
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

// connecting to database
await db.connect()

app.use('/', usersRouter);

app.use('/test', testRouter)

app.use('/burgers', burgerRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
