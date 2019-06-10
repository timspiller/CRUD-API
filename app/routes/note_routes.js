module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      // We'll create the note here
      console.log(req.body);
      res.send('Hello, coding is awesome')
    })
}
