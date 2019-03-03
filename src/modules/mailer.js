const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');

const { host, port, user, pass} = require('../config/mail.json')
const viewPath = path.resolve('./src/resources/mail/');

var transport = nodemailer.createTransport({
    host,
    port, 
    auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: exphbs.create({ partialsDir: path.resolve('./src/resources/mail/partials') }),
    viewPath,
    extName: '.html'
}));

module.exports = transport;