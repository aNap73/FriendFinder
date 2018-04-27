module.exports = function(app, antfriends) {
  // Requests

  
  console.log('inApiRoutes');
  console.log(antfriends);
  function calcBestyScore(friend1,friend2){
    let score = 0;
    for(var i in friend1.Quest){
      score += Math.abs(friend1.Quest[i]-friend2.Quest[i])
    }
    console.log('score', score);
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
      console.log('----------BESTY-------------');
      console.log(yourBesty);
      return yourBesty;
    }
  app.get("/api/friends/", function(req, res) {
    console.log('get./friends----------------------------');
    res.json(antfriends);
    return;
  });
  app.get("/api/friend/:name",function(req,res){
    console.log('get./friend/:name----------------------------');
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
    console.log('put./friend/---------------------------------');
    let yourbesty = findBesty(req.body);
    antfriends.push(req.body); 
    res.json(yourbesty);
    console.log(yourbesty);
    return;
  });
    

  
  
}