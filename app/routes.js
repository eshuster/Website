module.exports = function(app) {
  app.get('*', function(req, res) {
      res.sendFile('/public/index.html', { root: '/Users/EugeneShuster/Documents/PersonalWebsite/PP'});
  });
}
