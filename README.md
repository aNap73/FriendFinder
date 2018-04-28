# FriendFinder
##### By Anthony Napolitano
A friendly matching program!

##Find a friend for free, on me, why not!

[Ant's Friend Finder!](https://boiling-earth-56422.herokuapp.com/)

##How's it work?

my code written with node and express is managing routes for 2 html pages (./app/public/home.html and ./app/public/survey.html). Home returns everything that is not 1. /survey
  returns the survey.hml page
2. get./api/friends/
  returns the entire antfriends array of objects.
3. get./api/friend/:name  
  returns the object that first matches the name in the antfriends array of objects.
4. post./api/friend/
  this post accepts data in the json = function(){
    this.Name = 'name';
    this.Quest = [];
    this.Link = '';
    };  
    where Quest is an array of 10 floats and
    where Name is a non-zero-length string and
    where Link is a valid image on the internet





