
module.exports = function(app) {
  // Requests 
  console.log('inhtmlRoutes');
  var path = require("path");
  app.get("/survey",function(req,res){  
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", function(req, res) {   
    res.sendFile(path.join(__dirname, "../public/home.html"));   
  });
}