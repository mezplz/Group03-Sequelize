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
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        is_even:  function(conditional, options) {
            if((conditional % 2) == 0) {
                return options.fn(this);
            } 
            else {
                return options.inverse(this);
            }
        }
    }
}))
app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render('index.hbs', {groupID: 3, name: 'Group 3'})
})


app.get('/recipes.html', function(req, res){
    models.Recipe
    .findAll()
    .then( data => {
        res.locals.data = data;
        res.render('recipes', {id: 18127066, name: 'Tran Minh Anh'})

    })
})


app.get('/read',(req,res)=>{
    models.Recipe
    .findAll()
    .then(function(item){
        res.json(item)
    })
    .catch(function(error){
        res.json(error)
    })
})


app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function(){
    console.log("server is running on port" + app.get('port'))
})