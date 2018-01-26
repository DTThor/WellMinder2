# Wellminder
Welcome! Wellminder is a full stack, responsive web application built with React and D3 that tracks and "gamifies" wellness, encouraging users toward positive health choices. This app was built in 5 days by @Rmcavin, @mandafae, and @dtthor for our Q3 project at Galvanize in Austin, TX.

The app is deployed <a href="https://wellminder.herokuapp.com" target="_blank">here!</a>

## Tech Stack
#### Frontend
* HTML & CSS(Materialize)
* React
* D3
#### Backend
* Node
* Firebase (Auth and database storage)
#### Deployment
* Heroku



## Login Page
![alt text](https://github.com/Rmcavin/WellMinder2/blob/master/readme-stuff/Screen%20Shot%202017-12-10%20at%206.02.07%20PM.png "Login")



## Landing Page w/ Quiz Data
![alt text](https://github.com/Rmcavin/WellMinder2/blob/master/readme-stuff/Screen%20Shot%202017-12-10%20at%205.54.39%20PM.png?raw=true "Landing Page")



## Daily Checkin/Quiz
![alt text](https://github.com/Rmcavin/WellMinder2/blob/master/readme-stuff/Screen%20Shot%202017-12-10%20at%205.56.45%20PM.png?raw=true "Quiz")



## User Preferences Page
![alt text](https://github.com/Rmcavin/WellMinder2/blob/master/readme-stuff/Screen%20Shot%202017-12-10%20at%205.58.18%20PM.png?raw=true "User Prefs")



## Challenges
This is the first non-trivial full stack React application that any of us have built, and it came with it's fair share of challenges. Here are a few of them and how we conquered them:

1. Successfully passing state from parent to child React components (and more importantly back from children to their parent).
- ‘this’ binding on the parent component was particularly helpful, as well as passing the state to the children components as props.

2. Whether to use Redux to assist us in state management or not.
- We decided against Redux because our app only has one parent component and 5 children components, all siblings. If our app went down one or two more levels it would have made more since to use Redux, but since it was just two levels total we decided Redux would have been unnecessary and/or more confusing than helpful.

3. Sending and storing our data properly in Firebase.
- Firebase doesn’t store arrays natively, which was a little annoying, but we were able to work around this by sending it two objects in a list, sort of tricking firebase into accepting the array we were trying to send it.

