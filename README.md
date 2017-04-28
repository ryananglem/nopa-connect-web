# Zopa's React JS technical test.

## Description
This is an implementation of Zopa's React JS technical test.

The test is nearly complete with the following exceptions:

- the logo on the front page is not positioned correctly on desktop resolution
- the responsiveness for the statement page does not match the mockups
- the test coverage is not as good as it could be
- there are no environment settings for the service url

I'll add these to the repo over the coming days

## Some notes

This is a great test! One of the best I've done. It was fun working on it!

The test does not initially work on windows. This caused quite a bit of confusion
as the "how to run?" instructions simply do not work
 
The test took me quite a long time to complete. It might be helpful to mention 
the extent of the work (ie you may need to obtain assets from the internet, 
change build tool settings et al).  

I've had no experience with sass - so there was a bit of a learning curve with
that, and after a stage - I realised I'd not done it correctly. As facebook do 
not recommend using a css pre-processor with react I have not looked into 
doing it this way before, and so was a little torn between doing it this way 
(from the template provided) and the component, post processing route I'm used to. 
In the end I regret to not really doing either.


## Resources
Please refer to the wiki pages for the details:

Description: https://github.com/ishabo/nopa-connect/wiki

Screens: https://github.com/ishabo/nopa-connect/wiki/Screens

Style guide: https://github.com/ishabo/nopa-connect/wiki/Style-guide


## How to run?

Once you fork this branch and git clone it, all you need to do is run:

```sh
npm start -s
```

This will install node_modules the first time, and then it will just start the server.

This will open 
```
http://localhost:3000/ 
```
Which will load the home page of the skeleton React app.

There's also an express route that has dummy data that you can use to fetch transactions for the Statement page:
```
http://localhost:3000/api/transactions
```

