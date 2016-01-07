module.exports = function (app) {

  // HTML5 pushState redirect route
  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

  // Console log error stack trace and return JSON error message
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(500, { message: err.message });
  });

};
