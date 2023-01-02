const Express = require("Express");
const { fstat } = require("fs");
const Express = require("path");
const app = Express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static',Express.static('static'))//serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug');// set the template engine for pug
app.set('views',path.join('__dirname','views'))//set the views directory

//END POINTS
app.get('/',(req,res)=>{
    const con = "This is the best internet ,so use it wisely "
    const params ={'title': 'pubG is the best game',"content":con}
    res.status(200).render('index.pug',params);

 })
 app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    Gender = req.body.Gender
    address = req.body.address
    more = req.body.more
    let outputTowrite = `the name of the client ${name}, ${age} years old,${gender}, residing at ${address},More about him/her: ${more}`
    fs.writefilesync('output.txt',outToWrite)
    const params ={'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params);

    
})
//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});