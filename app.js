const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors')




const indexRouter = require('./routes/index');
const userRouter = require ('./routes/users')
const passportConfig = require('./passport');

const session = require('express-session');

const sessionMiddleware = session({
    name:"mercadohook",
    secret: "m3rCadH00k",
    saveUninitialized:false,
    resave: false, 
    cookie: {
        maxAge: 2392000
    }
})


const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST","DELETE"],
    credentials: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session())

app.use('/', indexRouter);
app.use('/users', userRouter)





module.exports = app;
