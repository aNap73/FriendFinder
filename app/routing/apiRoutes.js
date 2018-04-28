module.exports = function(app, antfriends) {
  // Requests

  function calcBestyScore(friend1,friend2){
    let score = 0;
    for(var i in friend1.Quest){
      score += Math.abs(friend1.Quest[i]-friend2.Quest[i])
    }
    return score;
  }
  function findBesty(you){
    let yourBesty = 0;
    let curscore = 0;
    let wrkscore = 0;

    for (var f in antfriends){      
      if(!yourBesty){
        yourBesty = antfriends[f];
        curscore = calcBestyScore(you, antfriends[f]);
      }else{
        wrkscore = calcBestyScore(you, antfriends[f]);
        if(curscore>=wrkscore){
          yourBesty = antfriends[f];
          curscore = wrkscore;
        }
      } 
      }
      return yourBesty;
    }
  app.get("/api/friends/", function(req, res) {
    res.json(antfriends);
    return;
  });
  app.get("/api/friend/:name",function(req,res){
    for (var f in antfriends){
      if(antfriends[f].Name = req.params.name){
        res.json(antfriends[f]);
        return;
      }
    }
    res.json(false);
    return;
  });
  app.post("/api/friend/",function(req,res){
    let yourbesty = findBesty(req.body);
    antfriends.push(req.body); 
    res.json(yourbesty);
  
    return;
  });
    

  
  
}