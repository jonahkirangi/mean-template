var User = require('../app/models/user');
var Thing = require('../app/models/thing');

module.exports = function (app, passport) {

  // ADD A NEW THING
  app.post('/api/things', ensureAuthenticated, function(req, res, next) {
    var thing = new Thing({
      name: req.body.thingName,
      description: req.body.thingDescription,
      createdBy: req.user._id
    });
    thing.save(function(err) {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });

  // GET A SPECIFIC THING
  app.get('/api/things/:id', function(req, res, next) {
    Thing.findById(req.params.id, function(err, thing) {
      if (err) return next(err);
      res.send(thing);
    });
  });

  // USER LOGIN
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.cookie('user', JSON.stringify(req.user));
    res.send(req.user);
  });

  // USER SIGN UP
  app.post('/api/signup', function(req, res, next) {
    var user = new User({
      email: req.body.email,
      password: req.body.password
    });
    user.save(function(err) {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });

  // USER LOGOUT
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
    res.status(500).send({ message: err.message });
  });

};

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.status(401).send('Hey, you need to sign in!');
}
