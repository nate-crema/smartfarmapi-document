module.exports = function(app, fs, path, axios, crypto) {
    
    app.get('/', function(req, res) {
        console.log(path.join(__dirname, "/../source"));
        console.log('index page accessed');
        console.log(req.session.login);
        if (req.session.login == undefined) {
            res.render("index.html", {
                logined: false
            });
        } else {
            res.redirect("/dashboard");
        }
    })
    app.post('/', function(req, res) {
        console.log("/ accessed");
        res.end("server opened");
    });
    app.post('/login', function(req, res) {
        console.log("/login accessed");
        console.log(req.body);
        if (req.body.id_input == "test" && req.body.pw_input == "test") {
            res.json({
                result: true,
                udata: {
                    name: "tester",
                    id: "test"
                }
            })
        } else {
            res.json({
                result: false,
                udata: {}
            })
        }
    })
}