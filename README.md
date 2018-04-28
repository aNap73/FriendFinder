# FriendFinder
##### By Anthony Napolitano
A friendly matching program!

## Find a friend for free, on me, why not!

[Ant's Friend Finder!](https://boiling-earth-56422.herokuapp.com/)

## How's it work?

### The code uses javascript with node and express to manage two html routes:

1. /app/public/home.html 
2. /app/public/survey.html

### and a restful api with 3 endpoints.

2. get./api/friends/ (returns the entire antfriends array of objects)
3. get./api/friend/:name  (returns an object by name from site memory)
4. post./api/friend/ (adds a friend object to site memory)




