# Orbit - Team Tracker

Orbit is a team tracker for small teams, It shows whos' working on what, where they're working from, how many story points a project has, who is a member of what team and more.

I built this in around 30 hours over the span of 5 days.

## Missing

There's a number of things I still want to implement but didn't want to drag it out too long
*	routes to handle single users/projects/teams
*	filtering of users/projects/teams
*	Adding users/editing users
*	more reusable dumb components, there's more work I could do around this

## Known bugs
* mobile menu doesn't close when you select a link, I had trouble dispatching the action, because preventing default behaviout on react-router `<NavLink/>` component means that the browser reloads the page, instead of the expected SPA action.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node
yarn
npm
```

### Installing

A step by step series of examples that tell you have to get a development env running

clone the repo

```
  https://github.com/NickProdromou/orbit-team-tracker.git
```

Install dependencies

```
cd orbit-team-tracker && yarn
```

to run the appliction, defaults to port 3000

```
yarn start
```

and in a separate terminal process, runs on port 3030

```
yarn start-api
```

## Testing

Coming soon, didn't have time to implement, was focusing on getting base features down.

## Linting

coming soon, as above..

## Built With

big thanks to the creators of the below libraries :)

Bootsrapped using [create-react-app](https://github.com/facebook/create-react-app)

* [React](http://www.dropwizard.io/1.0.2/docs/) - View library
* [React Router](https://github.com/ReactTraining/react-router) - routing
* [prop-types](https://www.npmjs.com/package/prop-types) - Type checking for component props
* [Redux](https://maven.apache.org/) - State management
* [Redux thunk](https://github.com/gaearon/redux-thunk) - Async middleware for Redux
* [Styled Components](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [Hedron]() - Grid components implemented with styled-components
* [json-server](https://github.com/typicode/json-server) - Mock API server
