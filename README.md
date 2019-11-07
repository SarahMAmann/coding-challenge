## Amper Front-End Software Challenge

Thank you for considering Amper Technologies, and we look forward to understanding your background
and skillset through this brief software project.

As mentioned previously, this challenge is not meant to take more than 4-5 hours of your time.
It is a helpful exercise for us to see how you visualize data and convey information to users,
and there is no right answer we are looking for.


### Project Goal

We have set up a simple React web-app with a couple of components already setup. We'd like for you
to flesh out the `MachinePage` component and render the provided data (in the `machineData` const)
for the user. 

Your goal is to display the provided information in a way that you feel visually communicates
what is currently happening - imagine your user manages a machine shop that makes metal bolts.

How might you present this information so that they can get a sense of what has been happening today?

You can display it any way you choose, although we recommend not using outside libraries as you only
have limited time.

We've included some screenshots in the `screenshots/` directory of our current app, and we've also
included the fonts we use in the build. You can see how to use them in the provided SCSS file. We don't 
need a carbon-copy of what our app currently looks like, but your goal should be to lay something out 
that would "fit" in to the current app from a design standpoint.


### Development

This project is bundled up with webpack, and should be self-contained. It has been tested with
Node v8.9.4 although it should likely work with others.

```
# install dependencies
$ npm install

# start express server, access at http://localhost:3006/
$ npm start

# build client-side js
$ npm run build

# watch client-side js
$ npm run watch
```

If anything doesn't work as expected out of the box, please reach out and let us know!
