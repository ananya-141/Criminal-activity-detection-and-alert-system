const express     = require('express');
const dbOperation = require('./dbfiles/dbOperation');
const cors        = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();
let client;
let session;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post('/api', async(req, res) => {
    
    console.log('called');
    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result.recordset);
});

app.post('/login', async(req, res) => {
    
    console.log('called');
    const result = await dbOperation.getEmployees(req.body.name,req.body.password);
    res.send(result.recordset);
});

app.post('/hello', async(req, res) => {
    await dbOperation.createEmployee(req.body);
    const result = await dbOperation.getEmployees(req.body.NAME);
    console.log('called');
    res.send(result.recordset);
});

//  let Pam= new User('Pam Beesly','PAM','980','9736784376','pam@gmail.com');


// dbOperation.getEmployees().then(res=> {
//     console.log(res.recordset);
// })

//  dbOperation.createEmployee(Pam);

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));