let express       = require("express");
let trial = require("./classes/Trial");
let bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

let router = express.Router();

router.post("/get-trial",(request,response)=>{
 let res = new trial.Response();
 console.log(request);
 jsonParser(request, response, (error) => {if(!!error) res.setError("Wrong format",response)});
 let req = request.body;
 console.log(req);
 if(req == {}) res.setError("Wrong ID");
 response.end(JSON.stringify(res));
});

module.exports = router;