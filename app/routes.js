module.exports = function (app, passport) {

  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.cookie('user', JSON.stringify(req.user));
    res.send(req.user);
  });

  app.post('/api/signup', function(req, res, next) {
    var user = new User({
      email: req.body.email,
      password: req.body.password
    });
    user.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });

  app.get('/api/logout', function(req, res, next) {
    req.logout();
    res.sendStatus(200);
  });

  // HTML5 pushState redirect
  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

  // Console log a stack trace on error
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, { message: err.message });
  });

};
