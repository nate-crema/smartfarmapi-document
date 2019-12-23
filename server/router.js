module.exports = function(app, fs, path, axios, crypto) {
    app.post('/', function(req, res) {
        console.log("/ accessed");
        res.end("server opened");
    });
    app.post('/login', function(req, res) {
        console.log("/login accessed");
        res.end("true");
    })
}