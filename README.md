# FriendFinder
##### By Anthony Napolitano
A friendly matching program!

## Find a friend for free, on me, why not!

[Ant's Friend Finder!](https://boiling-earth-56422.herokuapp.com/)

## How's it work?

### The code uses javascript with node and express to manage two html routes, which serve the pages:

1. /survey [the site survey and friend finding function](https://boiling-earth-56422.herokuapp.com/survey)
2. /* [a spash page for the site](https://boiling-earth-56422.herokuapp.com/)


### The server also exposes a restful api with 3 endpoints.

2. get./api/friends/ [returns the entire antfriends array of objects](https://boiling-earth-56422.herokuapp.com/api/friends/)
3. get./api/friend/:name  [returns an object by name from site memory](https://boiling-earth-56422.herokuapp.com/api/friend/Anthony)
4. post./api/friend/ `returns an object by name from site memory(nodemo)`

### Matching

The site matches folks by finding friends with the lowest summed difference between their individual answers. In other words the program loops through the friends and finds the friend with the most similar answers to the new guy, by subtracting and adding alot.

