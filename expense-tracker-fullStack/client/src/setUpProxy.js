const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use('/api/v1/transactions', createProxyMiddleware({
        target: "http://localhost:3001",
        secure: false
    }));
};