var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'Asp.net MVC Cook Book',
        gentre: 'Back-end Web Application Programming',
        author: 'John Papa',
        read: false
    },
    {
        title: 'Asp.net MVC Cook Book',
        gentre: 'Back-end Web Application Programming',
        author: 'John Papa',
        read: false
    },
    {
        title: 'Asp.net MVC Cook Book',
        gentre: 'Back-end Web Application Programming',
        author: 'John Papa',
        read: false
    },
    {
        title: 'Asp.net MVC Cook Book',
        gentre: 'Back-end Web Application Programming',
        author: 'John Papa',
        read: false
    },
    {
        title: 'Asp.net MVC Cook Book',
        gentre: 'Back-end Web Application Programming',
        author: 'John Papa',
        read: false
    },
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('Books', {
            title: 'Library Header',
            nav: [{
                Link: '/Books',
                Text: 'Books'
        }, {
                Link: '/Authors',
                Text: 'Authors'
        }],
            books: books
        });
    });

bookRouter.route('/Single')
    .get(function (req, res) {
        res.send('Hello Single Books');
    });

module.exports = bookRouter;
