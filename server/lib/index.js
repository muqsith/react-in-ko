const koapp = require('./koapp');

module.exports = function (app) {
    app.use('/api/koapp', koapp);
};
