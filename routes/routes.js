module.exports = function Routes(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    // post route for pulling data from POST
    app.post('/results', function(req, res) {
        submittedInfo = {
            name: req.body.name,
            location: req.body.location,
            language: req.body.language,
            comments: req.body.comments
        };
        res.render('results', {usersData: submittedInfo});
    })
};