
class Response{

  constructor(Token){
    this.ResponseType = "Trial";
    this.Error = "";
    this.Questions =[];
    this.Token = Token;
  }

  setError(code, res){
    this.ResponseType = "Error";
    this.Error = code;
    res.end(JSON.stringify(this));
  }

  Auth(id){
    this.ResponseType = "Auth";

  }
}

module.exports.Response = Response