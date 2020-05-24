# Would you rather...

This project is part of the Udacity React Nanodegree.

Its purpose is to apply the learned concepts in the Nanodegree program, including React development, front-end state management with Redux, ES6+ concepts, etc.

I also took the liberty of making and implementing my own mobile-first UI design.

## Functional description

This is a quiz app where players can login and vote in different polls.

The app lets you choose a user from a predefined list and login.

Users can create two-choice "Would you rather *A* or *B*" polls.

Polls can then be voted individually, keeping track of what questions the user has answered and which ones hasn't.

Using the number of questions answered and created by each user, a live user leader board is created.

## Used technologies

- [React](https://reactjs.org/), including the hooks API not yet covered in this Nanodegree
- [Redux](https://redux.js.org/) & [React Redux](https://react-redux.js.org/)
- [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk)
- [React Router](https://reacttraining.com/react-router/)
- [React Icons](https://react-icons.github.io/react-icons/)

The project uses a in-memory fake REST API that simulates the network interactions of a real-world web application. 

For this reason, data changes are not persisted. The initial data of the application can be found [here](https://github.com/udacity/reactnd-project-would-you-rather-starter).

The project has been created from scratch using [Create React App](https://github.com/facebookincubator/create-react-app).

## TL;DR

To get started developing right away:

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Screenshots

### Answering a poll
![Question](screenshots/question.png?raw=true)

### Viewing poll results
![Answered question](screenshots/answered-question.png?raw=true)

### Home: viewing unanswered polls
![Home: unanswered questions](screenshots/home-unanswred.png?raw=true)

### Home: viewing answered polls
![Home: answered questions](screenshots/home-answred.png?raw=true)

### Home: adding a new poll
![Add a question](screenshots/add-question.png?raw=true)

### Leader board
![Leader board](screenshots/leader-board.png?raw=true)

### Login
![Login](screenshots/login.png?raw=true)

### Login: selecting a user
![Login: selecting a user](screenshots/login-selecting-user.png?raw=true)

### Login: a user is selected
![Login: selected user](screenshots/login-selected-user.png?raw=true)

### 404: Question (poll) not found
![404: Question not found](screenshots/404-question.png?raw=true)

### 404: Page not found
![404: Page not found](screenshots/404-page.png?raw=true)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
