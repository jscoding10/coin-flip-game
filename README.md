## Coin Flip Game
This full-stack web application allows the user to press the Flip Coin button and it will track the number of times the coin lands on heads and tails. 
The user can also push a Reset button to reset the count. The randomization of the coin flip occurs on the server. 

## Instructions
To set up a local copy, follow these simple steps:  
```
1. git clon https://github.com/jscoding10/coin-flip-game.git  
2. cd coin-flip-game  
3. npm install  
4. npm start
```
The server runs on localhost:8000.  

## Technology Used
### Client
<img align="left" alt="HTML" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img align="left" alt="CSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img align="left" alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<br>
<br>
The client-side Javascript (main.js) has an event listener for the Flip Coin button that makes an asynchronous request to the server to see whether the coin lands on heads or tails. 
Once the response is received from the server, the client side Javascript checks whether the coin landed on heads or tails and adds it to the count in index.html. 
The client-side Javascript also has an event listener for the Reset button to reset the count to zero in index.html.
<br>

### Server
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />  
<br>
<br>
The server Javascript (server.js) receives and responds to the requests sent to the various pathnames. 
It responds with various files, as well as whether the coin landed on heads or tails, depending on the pathname of the request. 

## Lessons Learned
This was the first full-stack web application I built. 
While creating this application, I learned how to integrate various event listeners into Javascript. 
Aditionally, I honed my ability to make asynchronous requests to a server and interpret the data that is returned. 
I also learned how to render the various .html, .css, and .js files to the client and display an error if the pathname for a request does not exist. 
Finally, I learned how to debug errors on both the client and server side and resolve them by reading documentation and through internet research. 

## Improvements
One improvement would be to have the image of the coin flip whenever the user clicks the Flip Coin button. This could improve the visual appearance of the user interface.
Aditionally, a feature where the user can guess heads or tails before the coin is flipped might make the application more engaging. 



