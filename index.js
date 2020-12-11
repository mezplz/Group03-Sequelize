const { static } = require('express')
var express = require('express')
var app = express()
app.use(express.static(__dirname + '/views/layouts'))

var models = require('./models')
app.get('/sync', function(req, res){
    models.sequelize.sync().then(function(){
        res.send("database sync completed")
    })
})


var hbs = require('express-handlebars')
app.engine('hbs', hbs({
    extname : 'hbs',
    defaultLayout : 'index',
    layoutsDir : __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))
app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render('index.hbs', {groupID: 3, name: 'Group 3'})
})

app.get('/recipes.html', function(req, res){
    
})
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function(){
    console.log("server is running on port" + app.get('port'))
})