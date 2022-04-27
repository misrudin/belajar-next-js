const express = require('express');
const next = require('next');
require('dotenv').config();
const {createProxyMiddleware} = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 6788;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const pages = require('./pagesData.json')

const apiPaths = {
    '/api/': {
        target: process.env.NEXT_PUBLIC_BASE_URL,
        pathRewrite: {
            '^/api/': '',
        },
        changeOrigin: true,
    },
};

app.prepare().then(() => {
    const server = express();
    server.use('/api/', createProxyMiddleware(apiPaths['/api/']));

    function parseCookies(request) {
        const list = {};
        const cookieHeader = request.headers?.cookie;
        if (!cookieHeader) return list;

        cookieHeader.split(`;`).forEach(function (cookie) {
            let [name, ...rest] = cookie.split(`=`);
            name = name?.trim();
            if (!name) return;
            const value = rest.join(`=`).trim();
            if (!value) return;
            list[name] = decodeURIComponent(value);
        });

        return list;
    }

    function isAuthenticated(req, res, next) {
        const cookies = parseCookies(req);
        if (cookies && cookies.token) {
            return next();
        } else {
            res.redirect('/login')
        }
    }

    function validateLogin(req, res, next) {
        const cookies = parseCookies(req);
        if (cookies && cookies.token) {
            res.redirect('/')
        } else {
            return next()
        }
    }

    pages.forEach((e) => {
        server.get(e.path, isAuthenticated, (req, res) => {
            const actualPage = e.path
            const queryParams = {id: req.params.id, pageName: e.name}
            app.render(req, res, actualPage, queryParams)
        });
    })

    server.get('/login', validateLogin, (req, res) => {
        const actualPage = '/login'
        const queryParams = {id: req.params.id}
        app.render(req, res, actualPage, queryParams)
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        return handle(req, res);
    });
    server.get('/static/*', (req, res) => {
        /* serving _next static content using next.js handler */
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
